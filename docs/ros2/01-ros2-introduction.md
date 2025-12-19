---
sidebar_position: 1
---

# 1.1 ROS 2 Introduction

The Robot Operating System (ROS) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robotic platforms. ROS 2 is the latest iteration, offering improved performance, security, and real-time capabilities.

## Why ROS 2?

*   **Distributed Architecture:** ROS 2 uses a decentralized node-based architecture, allowing for modular and scalable robot systems.
*   **Language Agnostic:** Supports multiple programming languages, primarily C++ and Python.
*   **Rich Ecosystem:** A vast collection of tools, libraries, and community support for various robotic tasks.
*   **Real-time Capabilities:** Improved quality of service (QoS) settings for reliable and timely data exchange.

## Key Concepts

*   **Nodes:** Executable processes that perform computation (e.g., a node for reading sensor data, a node for controlling motors).
*   **Topics:** Named buses over which nodes exchange messages. Topics are the primary mechanism for data streaming.
*   **Messages:** Data structures used for communication between nodes over topics.
*   **Services:** Request/reply communication mechanisms for synchronous interactions between nodes.
*   **Actions:** Long-running, goal-oriented tasks with feedback and cancellability, built on top of topics and services.

## Installation

(Placeholder for ROS 2 installation instructions)

## First ROS 2 Program (Python)

Let's create a simple ROS 2 publisher and subscriber in Python.

```python
# publisher.py
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello ROS 2: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

```python
# subscriber.py
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self):
        self.get_logger().info('I heard: "%s"' % msg.data)

def main(args=None):
    rclpy.init(args=args)
    minimal_subscriber = MinimalSubscriber()
    rclpy.spin(minimal_subscriber)
    minimal_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Diagram Placeholder

:::caution
A diagram illustrating ROS 2 nodes and topics would be highly beneficial here.
:::



---
**Chatbot Integration Placeholder:**
*Ask our RAG chatbot about common ROS 2 commands or troubleshooting tips.*
---
