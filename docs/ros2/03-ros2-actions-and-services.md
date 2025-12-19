---
sidebar_position: 3
---

# 1.3 ROS 2 Actions and Services

Beyond topics, ROS 2 provides mechanisms for more structured and reliable communication: **Services** for synchronous request/reply patterns, and **Actions** for long-running, goal-oriented tasks.

## Services

A ROS 2 **Service** is a request/reply communication method. When a node calls a service, it sends a request and blocks (or asynchronously waits) until it receives a response. This is suitable for operations that have a clear start and end, and where the caller needs to know the result immediately.

### Defining a Service (Example: `AddTwoInts.srv`)

```
int64 a
int64 b
---
int64 sum
```

### Implementing a Service Server (Python)

```python
# add_two_ints_server.py
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts # assuming this service is defined

class MinimalService(Node):

    def __init__(self):
        super().__init__('minimal_service')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(f'Incoming request: a={request.a} b={request.b}')
        self.get_logger().info(f'Sending back response: {response.sum}')
        return response

def main(args=None):
    rclpy.init(args=args)
    minimal_service = MinimalService()
    rclpy.spin(minimal_service)
    minimal_service.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Implementing a Service Client (Python)

```python
# add_two_ints_client.py
import sys
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts # assuming this service is defined

class MinimalClientAsync(Node):

    def __init__(self):
        super().__init__('minimal_client_async')
        self.cli = self.create_client(AddTwoInts, 'add_two_ints')
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('service not available, waiting again...')
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        self.future = self.cli.call_async(self.req)
        rclpy.spin_until_future_complete(self, self.future)
        return self.future.result()

def main(args=None):
    rclpy.init(args=args)
    minimal_client = MinimalClientAsync()
    response = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    minimal_client.get_logger().info(
        f'Result of add_two_ints: for {sys.argv[1]} + {sys.argv[2]} = {response.sum}')
    minimal_client.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Actions

**Actions** are similar to services but provide feedback on their progress and can be preempted (cancelled). They are designed for long-running tasks, such as navigating a robot to a goal or performing a complex manipulation sequence.

### Defining an Action (Example: `Fibonacci.action`)

```
# Goal
int32 order
---
# Result
int32[] sequence
---
# Feedback
int32[] partial_sequence
```

### Implementing an Action Server (Python)

```python
# fibonacci_action_server.py
import time
import rclpy
from rclpy.action import ActionServer, ActionClient
from rclpy.node import Node
from example_interfaces.action import Fibonacci # assuming this action is defined

class MinimalActionServer(Node):

    def __init__(self):
        super().__init__('minimal_action_server')
        self._action_server = ActionServer(
            self,
            Fibonacci,
            'fibonacci',
            self.execute_callback)

    def execute_callback(self, goal_handle):
        self.get_logger().info('Executing goal...')

        feedback_msg = Fibonacci.Feedback()
        feedback_msg.partial_sequence = [0, 1]

        for i in range(1, goal_handle.request.order):
            feedback_msg.partial_sequence.append(
                feedback_msg.partial_sequence[i] + feedback_msg.partial_sequence[i-1])
            self.get_logger().info(f'Feedback: {feedback_msg.partial_sequence}')
            goal_handle.publish_feedback(feedback_msg)
            time.sleep(1)

        goal_handle.succeed()

        result = Fibonacci.Result()
        result.sequence = feedback_msg.partial_sequence
        return result

def main(args=None):
    rclpy.init(args=args)
    minimal_action_server = MinimalActionServer()
    rclpy.spin(minimal_action_server)
    minimal_action_server.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Implementing an Action Client (Python)

```python
# fibonacci_action_client.py
import rclpy
from rclpy.action import ActionClient
from rclpy.node import Node
from example_interfaces.action import Fibonacci # assuming this action is defined

class MinimalActionClient(Node):

    def __init__(self):
        super().__init__('minimal_action_client')
        self._action_client = ActionClient(self, Fibonacci, 'fibonacci')

    def send_goal(self, order):
        goal_msg = Fibonacci.Goal()
        goal_msg.order = order

        self._action_client.wait_for_server()
        self._send_goal_future = self._action_client.send_goal_async(goal_msg, feedback_callback=self.feedback_callback)
        self._send_goal_future.add_done_callback(self.goal_response_callback)

    def goal_response_callback(self, future):
        goal_handle = future.result()
        if not goal_handle.accepted:
            self.get_logger().info('Goal rejected :(')
            return

        self.get_logger().info('Goal accepted :)')
        self._get_result_future = goal_handle.get_result_async()
        self._get_result_future.add_done_callback(self.get_result_callback)

    def get_result_callback(self, future):
        result = future.result().result
        self.get_logger().info(f'Result: {result.sequence}')
        rclpy.shutdown()

    def feedback_callback(self, feedback_msg):
        self.get_logger().info(f'Received feedback: {feedback_msg.feedback.partial_sequence}')


def main(args=None):
    rclpy.init(args=args)
    action_client = MinimalActionClient()
    action_client.send_goal(10)
    rclpy.spin(action_client)


if __name__ == '__main__':
    main()
```

---
**Chatbot Integration Placeholder:**
*Ask our RAG chatbot for use cases where ROS 2 actions are preferred over services.*
---
