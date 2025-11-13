/*
                                -------------------------------------------------

                                        Discussion No. 1 => What is Node.js?

                                -------------------------------------------------

Node.js is a fast, lightweight, server-side runtime built on Google’s V8 JavaScript engine.

It lets developers use JavaScript to build:
 - Backend servers
 - APIs
 - Real-time apps (chat, sockets)
 - File systems tools
 - Command-line scripts
 - Microservices


🔥 Key Points

1. Before Node.js, JavaScript only ran in browsers. Node.js lets us run JavaScript directly on our computer/server — like Python or PHP.
2. V8 is Google Chrome’s JavaScript engine. Node.js uses the same engine, so it's very fast.
3. It's Event-Driven & Non-Block, which means Node.js handles many tasks at once without waiting.
    This makes it perfect for:
        - APIs
        - Handling many users
        - Real-time apps

4. Node includes npm, the world’s largest library ecosystem. We can install packages through it. 
    Some popular packages are like:
        - Express (backend framework)
        - Mongoose (MongoDB)
        - Bcrypt (password hashing)
        - Nodemailer (emails)
        - Axios (HTTP requests)


Simple Example:

    console.log("Hello from Node.js!");

and then we can run this through our terminal by using:
    node hello.js

    
                            ----------------------------------------------------------

                                Discussion No. 2 => How Node.js works internally?

                            ----------------------------------------------------------    

Node.js uses three main components working together:

1. V8 Engine (Runs JavaScript)
2. libuv (Handles async tasks like I/O, timers, network)
3. Event Loop (The brain that manages everything)


🧠 1. V8 Engine — Executes JavaScript
When we write JavaScript:
    console.log("Hello!")

The v8 engine converts it into machine code and runs it. {Just in Time (JIT) compiler}
This part is single-threaded, meaning it runs JS line by line.


⚙️ 2. libuv — Handles All “Slow” Operations
JavaScript is fast, but tasks like:
    - Reading files
    - Writing files
    - Sending network requests
    - Receiving HTTP requests
    - Working with databases

are slow.

If JavaScript waited for them to finish, the whole program would freeze.
So Node.js uses libuv, a C++ library that gives Node:

    + A thread pool
    + Async I/O
    + Timers
    + Networking capabilities

When JS needs to do a slow task:

    fs.readFile('data.txt', (err, data) => {
        console.log(data);
    });

Node offloads this to libuv, which handles it in the background.

🔄 3. Event Loop — The Scheduler / Traffic Police
The Event Loop is the heart of Node.js.

It constantly checks:
 - “Do we have JS code to run?”
 - “Do we have callbacks ready?”
 - “Do timers need to run?”
 - “Did libuv finish a task?”

Every time a background task is done, its callback is put into a queue. Then the event loop pulls it and runs it.

This is why Node.js never blocks.

*/
