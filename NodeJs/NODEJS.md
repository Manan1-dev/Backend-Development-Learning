# Node.js

**Node.js** is JavaScript’s runtime environment that enables JavaScript to work outside the browser.

## Introduction

This markdown file is a concise study guide for the core Node.js concepts required to build backend services as a software developer or full-stack developer.

It focuses on practical fundamentals and intentionally avoids diving into every advanced niche of the Node ecosystem. Covered topics include:

-   Node runtime and the event loop
-   Modules and package management (npm / yarn)
-   Asynchronous patterns: callbacks, Promises, async/await
-   Streams, buffers, and the file system
-   Creating HTTP servers and basic routing
-   Debugging, testing, and deployment basics

This is a living document: examples, notes, and references will be added as each topic is practiced.

## Learning Pattern

I’ll be following a **project-based learning approach**, building small applications to reinforce each concept. Each section will include code snippets, explanations, and links to further resources.

## Prerequisites

-   Basic understanding of JavaScript (ES6+)
-   Familiarity with command line operations
-   Basic knowledge of web protocols (HTTP/HTTPS)
-   A code editor (e.g., VS Code) and Node.js installed on your machine
-   Git for version control

---

## Project 1 - Handling Files Operations

### Todo

#### Overview

This project demonstrates how to use Node.js **file system (fs)** module to perform basic **CRUD operations** on a JSON file — simulating a mini task manager from the command line.

The program supports three main commands:

-   `add` → Add a new task
-   `list` → Display all saved tasks
-   `remove` → Delete a specific task by its number

All tasks are stored in a local file `tasks.json`, which is created automatically.

#### Folder Structure

NodeJS/Todo

-   todo.js
-   taks.json (auto-generated)

---

#### Key Takeaways

-   `const filePath = "./tasks.json";` — Defines the file name and relative path.
-   `fs.readFileSync()` — Reads the file contents synchronously and returns a buffer.
-   `fs.writeFileSync()` — Writes updated data back to the file.
-   `process.argv[]` — Captures command-line arguments provided by the user.
-   `JSON.parse()` and `JSON.stringify()` — Convert between text and object formats for storing structured data.

---

#### Features

-   Add new tasks via command line
-   List all saved tasks
-   Remove tasks by index
-   Automatically creates `tasks.json` file if it doesn’t exist
-   Simple, persistent storage using JSON

---

#### 💻 Commands

Run these commands in your terminal inside the project folder:

```javascript
// Add a task
node todo.js add "Buy groceries"

// List all tasks
node todo.js list

// Remove a task by index
node todo.js remove 1
```

### Contacts

#### Overview

#### Folder Structure

#### Key Takeaways

#### Features

#### 💻 Commands

Run these commands in your terminal inside the project folder
