# Phase 1: Node.js Fundamentals

## 📘 Overview

Phase 1 marks the foundation of the entire backend journey. Before diving into frameworks or databases, we must first understand **what Node.js is**, **how it works**, and **why it’s used to build scalable backend systems**.

In this phase, we will explore the **core principles of Node.js**, its **architecture**, and **asynchronous event-driven design**. By the end, we’ll be comfortable executing JavaScript outside the browser, working with Node’s built-in modules, and building small, practical command-line tools.

---

## 🎯 Goals

-   Understand what Node.js is and how it works internally
-   Learn how the **V8 engine** and **event loop** power Node.js
-   Explore **core Node modules** and their real-world use cases
-   Develop comfort with **asynchronous patterns** (callbacks, promises, async/await)
-   Work confidently with **files, directories, and environment variables**
-   Begin thinking like a **backend developer**, not just a JavaScript programmer

---

## 🧩 Topics to Cover

### 1. What is Node.js?

-   Understanding the **V8 JavaScript engine**
-   Node.js runtime and single-threaded architecture
-   Event-driven, non-blocking I/O

### 2. The Node.js REPL

-   Running quick experiments in the Node environment
-   Using `.help`, `.save`, and `.load` commands

### 3. Core Modules

-   **`fs`** – File system operations (read, write, delete, append)
-   **`path`** – Working with file and directory paths
-   **`os`** – Accessing operating system information
-   **`url`** – Parsing and formatting URLs
-   **`events`** – Using `EventEmitter` and creating custom events

### 4. Module System

-   Understanding `require` and `module.exports`
-   CommonJS modules and code modularization

### 5. Asynchronous Patterns

-   Callbacks vs. Promises vs. Async/Await
-   Error handling in asynchronous functions

### 6. Environment Variables

-   Using `process.env` for configuration
-   Managing environment variables with `.env` files

---

## 🧱 Mini Projects

1. **File Organizer CLI**  
   Build a simple command-line tool that scans a directory and automatically organizes files into folders based on their type (e.g., Images, Documents, Videos, etc.).

    - Focus: File I/O, path manipulation, command-line arguments

2. **System Info App**  
   Create a lightweight script that logs your system’s details (CPU, memory, uptime, OS type) to the console.
    - Focus: Using the `os` and `fs` modules to fetch and display data

---

## 🧭 Expected Outcomes

By completing this phase, we will:

-   Gain a **clear understanding of Node.js fundamentals**
-   Develop the ability to **write modular and asynchronous code**
-   Build confidence running JavaScript on the backend
-   Be ready to move on to **Phase 2: Building Servers with HTTP & Express.js**
