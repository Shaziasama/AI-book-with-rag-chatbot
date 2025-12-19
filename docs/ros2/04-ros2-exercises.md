---
sidebar_position: 4
---

# 1.4 ROS 2 Exercises

These exercises are designed to help you solidify your understanding of ROS 2 fundamentals.

## Exercise 1: Custom Message Types

**Objective:** Create a custom ROS 2 message and use it in a publisher-subscriber pair.

1.  **Define a Custom Message:** Create a `.msg` file (e.g., `CustomMessage.msg`) in your ROS 2 package with fields like `string header` and `float64 data`.
2.  **Update `CMakeLists.txt` and `package.xml`:** Configure your package to build the custom message.
3.  **Implement a Publisher:** Write a Python node that publishes instances of your `CustomMessage` to a topic.
4.  **Implement a Subscriber:** Write a Python node that subscribes to the topic and prints the received custom message data.

## Exercise 2: Implementing a Simple Service

**Objective:** Create a service that takes two strings and concatenates them.

1.  **Define a Custom Service:** Create a `.srv` file (e.g., `ConcatenateStrings.srv`) with `string str1`, `string str2` as request and `string result` as response.
2.  **Implement a Service Server:** Write a Python node that provides this service, concatenating the two input strings.
3.  **Implement a Service Client:** Write a Python node that calls this service with two strings and prints the returned concatenated string.

## Exercise 3: Action-Based Robot Movement

**Objective:** Simulate a simple robot movement using a ROS 2 action.

1.  **Define a Custom Action:** Create an `.action` file (e.g., `MoveRobot.action`) where the goal is a target `x, y` coordinate, feedback includes the current `x, y` position, and the result indicates `bool success`.
2.  **Implement an Action Server:** Write a Python node that acts as a "robot," slowly moving towards the target `x, y` coordinate. It should publish feedback on its current position and return success when the target is reached.
3.  **Implement an Action Client:** Write a Python node that sends a goal to the action server and displays the feedback received, eventually printing the final result.

---
**Chatbot Integration Placeholder:**
*Ask our RAG chatbot for hints on debugging ROS 2 nodes or common errors in `CMakeLists.txt` for custom messages.*
---
