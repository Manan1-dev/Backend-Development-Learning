// 1. Import the core 'fs' module using CommonJS require
//    - This is the default way in many Node.js projects.
//    - 'fs' gives us methods to read, write, delete files, etc.

const fs = require("fs");

// 2. Small helper function to show friendly console output
function log(title, value) {
    console.log(`\n--- ${title} ---`);
    console.log(value);
    console.log("-----------------\n");
}

// -----------------------------------------------------------------------------
// STEP A: Write a file (synchronous) - writeFileSync
// -----------------------------------------------------------------------------
// Why use Sync here for learning? It's simpler to read (step-by-step).
// But keep in mind: synchronous methods block the event loop (the whole program waits).
try {
    // writeFileSync(path, data[, options])
    // - path: file name or path
    // - data: string or buffer to write
    // - options: encoding, mode, flag (optional)
    fs.writeFileSync("hello.txt", "Hello Node.js!"); // creates file if not exists
    log("File written (sync)", "hello.txt created with 'Hello Node.js!'");
} catch (err) {
    // If something goes wrong (permission, disk full, invalid path) we will catch it.
    console.error("Error writing file (sync):", err.message);
}

// -----------------------------------------------------------------------------
// STEP B: Read the file (synchronous) - readFileSync
// -----------------------------------------------------------------------------
// readFileSync returns a Buffer by default. We pass 'utf-8' to get a string.
try {
    // readFileSync(path, [options]) -> returns content (Buffer or string)
    const content = fs.readFileSync("hello.txt", "utf-8");
    log("File content (sync read)", content);
} catch (err) {
    console.error("Error reading file (sync):", err.message);
}

// -----------------------------------------------------------------------------
// STEP C: Delete the file (synchronous) - unlinkSync
// -----------------------------------------------------------------------------
// unlinkSync removes the file from disk.
try {
    fs.unlinkSync("hello.txt");
    log("File deleted (sync)", "hello.txt removed");
} catch (err) {
    console.error("Error deleting file (sync):", err.message);
}

// -----------------------------------------------------------------------------
// NOTES & BEST PRACTICES
// -----------------------------------------------------------------------------
// 1) Why there are 'Sync' methods?
//    - Methods ending with "Sync" run synchronously: Node will wait until they finish.
//    - Good for learning or small scripts where blocking is okay.
//    - Not recommended for servers or apps that must stay responsive.
//
// 2) When to use async instead?
//    - For web servers or any I/O heavy apps: use non-blocking methods (fs.readFile, fs.writeFile)
//    - Or use promises API (fs/promises) with async/await for cleaner code.
//
// 3) Error handling:
//    - Synchronous methods throw exceptions. Always wrap them in try/catch to avoid crashing.
//    - Async methods pass errors to callbacks or reject promises.
//
// 4) Encoding:
//    - readFileSync returns Buffer by default. Use 'utf-8' to get a string.
//      Example: fs.readFileSync("file.txt", "utf-8")
//
// 5) Relative vs Absolute paths:
//    - "hello.txt" is relative to the process working directory (where you run node).
//    - Safer to use absolute paths or build path with __dirname:
//        const path = require("path");
//        const filePath = path.join(__dirname, "hello.txt");
//    - __dirname is available in CommonJS files (not in ESM).
//
// 6) Permissions & Errors:
//    - If Node can't write due to permission issues, writeFileSync will throw.
//    - Always check file paths and permissions.
//
// 7) Cleanup:
//    - If delete fails (file missing), unlinkSync will throw. Use try/catch.
//
// -----------------------------------------------------------------------------
// Quick Async Example (for reference) - don't block the program
// -----------------------------------------------------------------------------
// fs.writeFile("hello-async.txt", "Hello async!", (err) => {
//   if (err) return console.error("Async write error:", err.message);
//   fs.readFile("hello-async.txt", "utf-8", (err, data) => {
//     if (err) return console.error("Async read error:", err.message);
//     console.log("Async file content:", data);
//     fs.unlink("hello-async.txt", (err) => {
//       if (err) return console.error("Async unlink error:", err.message);
//       console.log("Async file deleted.");
//     });
//   });
// });
//
// This shows callback-style async. Modern code often uses fs/promises + async/await.
//
// -----------------------------------------------------------------------------
