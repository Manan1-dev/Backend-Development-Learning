// todo.js
// CommonJS version — Node.js project to manage tasks (add, list, remove)

const fs = require("fs");
const filePath = "./tasks.json";

// ✅ Load tasks safely (returns [] if file doesn't exist or JSON invalid)
const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch {
        return [];
    }
};

// ✅ Save tasks to file
const saveTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

// ✅ Add new task
const addTask = (taskDescription) => {
    if (!taskDescription) {
        console.log("⚠️ Please provide a task description.");
        return;
    }

    const tasks = loadTasks();
    tasks.push({ task: taskDescription });
    saveTasks(tasks);

    console.log(`✅ Task added: "${taskDescription}"`);
};

// ✅ List all tasks
const listTasks = () => {
    const tasks = loadTasks();

    if (tasks.length === 0) {
        console.log("📭 No tasks found.");
        return;
    }

    console.log("\n📝 Your Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.task}`);
    });
};

// ✅ Remove task by index
const removeTask = (arg) => {
    const index = parseInt(arg) - 1;

    if (isNaN(index)) {
        console.log("⚠️ Please provide a valid task number to remove.");
        return;
    }

    const tasks = loadTasks();

    if (index < 0 || index >= tasks.length) {
        console.log("❌ Invalid task number.");
        return;
    }

    const removed = tasks.splice(index, 1);
    saveTasks(tasks);

    console.log(`🗑️ Task removed: "${removed[0].task}"`);
};

// ✅ Handle CLI commands
const [, , command, argument] = process.argv;

switch (command) {
    case "add":
        addTask(argument);
        break;
    case "list":
        listTasks();
        break;
    case "remove":
        removeTask(argument);
        break;
    default:
        console.log(
            `❓ Unknown command: "${command}". Use "add", "list", or "remove".`
        );
}
