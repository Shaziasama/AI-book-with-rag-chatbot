---
sidebar_position: 3
---

# 2.3 Digital Twin Exercises

These exercises will help you practice building and interacting with digital twins using Gazebo and Unity.

## Exercise 1: Customize a Gazebo Robot

**Objective:** Modify an existing URDF robot in Gazebo and spawn it in a custom environment.

1.  **Modify URDF:** Take the provided `my_diff_robot` URDF (or any other simple robot URDF) and add a simple sensor (e.g., a simulated LiDAR or camera) to it.
2.  **Create a Custom World:** Design a simple `.world` file for Gazebo that includes some obstacles (boxes, cylinders) and a flat ground plane.
3.  **Launch Robot in Custom World:** Create a ROS 2 launch file to spawn your modified robot in your custom Gazebo world.
4.  **Visualize Sensor Data:** Use `rviz2` to visualize the data from your simulated sensor.

## Exercise 2: Unity Robot Control via ROS 2

**Objective:** Control a simple robot model in Unity from a ROS 2 node.

1.  **Unity Setup:** Create a simple 3D model in Unity (e.g., a cube representing a robot) and set up `ROS-TCP-Endpoint`.
2.  **Unity Script:** Write a C# script in Unity to subscribe to a ROS 2 topic (e.g., `/cmd_vel` for velocity commands). Parse the incoming velocity commands and apply them to move your Unity robot model.
3.  **ROS 2 Publisher:** Write a Python ROS 2 node that publishes `geometry_msgs/Twist` messages to the `/cmd_vel` topic, simulating a teleoperation command.
4.  **Test Control:** Run both Unity and your ROS 2 node and observe the Unity robot moving according to your commands.

## Exercise 3: Synthetic Data Generation with Unity

**Objective:** Generate a dataset of images with object annotations from a Unity simulation.

1.  **Unity Scene:** Create a Unity scene with various 3D objects that you want to detect (e.g., different colored cubes, spheres).
2.  **Camera Setup:** Place a camera in the scene and configure it to render images.
3.  **Annotation Script:** Write a C# script that can capture images from the camera and also retrieve the 3D bounding box coordinates and labels for visible objects in the scene.
4.  **Data Export:** Implement logic to save the captured images and their corresponding annotation data (e.g., in COCO format) to disk.
5.  **Generate Dataset:** Run the simulation for a period, randomly changing object positions or camera viewpoints, to generate a diverse synthetic dataset.

---
**Chatbot Integration Placeholder:**
*Ask our RAG chatbot for tips on improving the realism of Gazebo textures or optimizing Unity scenes for better simulation performance.*
---
