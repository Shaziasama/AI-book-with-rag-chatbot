---
sidebar_position: 2
---

# 1.2 ROS 2 Nodes and Topics

In ROS 2, a **node** is an executable process that performs computation. Nodes are organized into packages, and multiple nodes can run concurrently, communicating with each other.

**Topics** are the primary means of asynchronous, many-to-many communication in ROS 2. Nodes publish data to topics, and other nodes can subscribe to these topics to receive that data. This publish/subscribe model allows for loose coupling between components.

## Creating a ROS 2 Node (Python)

Let's expand on the basic publisher example.

```python
# my_publisher_node.py
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MyPublisher(Node):
    def __init__(self):
        super().__init__('my_publisher')
        self.publisher_ = self.create_publisher(String, 'chatty_topic', 10)
        self.timer = self.create_timer(1.0, self.publish_message) # publish every 1 second
        self.counter = 0

    def publish_message(self):
        msg = String()
        msg.data = f'Hello from MyPublisher! Count: {self.counter}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Published: "{msg.data}"')
        self.counter += 1

def main(args=None):
    rclpy.init(args=args)
    my_publisher = MyPublisher()
    rclpy.spin(my_publisher)
    my_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Subscribing to a ROS 2 Topic (Python)

```python
# my_subscriber_node.py
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MySubscriber(Node):
    def __init__(self):
        super().__init__('my_subscriber')
        self.subscription = self.create_subscription(
            String,
            'chatty_topic',
            self.listener_callback,
            10
        )
        self.subscription # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info(f'Received: "{msg.data}"')

def main(args=None):
    rclpy.init(args=args)
    my_subscriber = MySubscriber()
    rclpy.spin(my_subscriber)
    my_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Running Nodes

To run these nodes, you would typically use `ros2 run` in separate terminals:

```bash
# Terminal 1
ros2 run my_package my_publisher_node

# Terminal 2
ros2 run my_package my_subscriber_node
```

Replace `my_package` with the actual name of your ROS 2 package.

---
**Chatbot Integration Placeholder:**
*Ask our RAG chatbot to explain the difference between ROS 2 topics and services.*
---
