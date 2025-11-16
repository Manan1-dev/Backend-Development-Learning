/*
                                -------------------------------------------------

                                        Discussion No. 1 => What is Node.js?

                                -------------------------------------------------

Node.js is a fast, lightweight, server-side runtime built on Google’s V8 JavaScript engine.

It allows us to use JavaScript to build things like:
 - Backend servers
 - APIs
 - Real-time apps (chat, sockets)
 - File systems tools
 - Command-line scripts
 - Microservices


🔥 Key Points

1. JavaScript outside the browser:
    Before Node.js, JavaScript only ran in browsers. Node.js lets us run JavaScript directly on our computer/server — like Python or PHP.

2. Powered by V8 Engine:
    Node uses Google Chrome’s V8 engine, making it very fast.

3. Event-Driven & Non-Blocking:
    It's Event-Driven & Non-Block, which means Node.js handles many tasks at once without waiting.
    This makes it perfect for:
        - APIs
        - Handling many users
        - Real-time apps

4.  npm — Node Package Manager:
    Node includes npm, the world’s largest library ecosystem. We can install packages through it. 
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

    V8 converts it into machine code using a Just-In-Time (JIT) compiler.
    This runs in a single thread, meaning JS executes line by line.


⚙️ 2. libuv — Handles All “Slow” Operations
    Some operations are "slow" for JavaScript, like:
        - Reading or writing files
        - Sending network requests
        - Receiving HTTP requests
        - Working with databases

    If JS waited for these, the program would freeze.

    So Node.js uses libuv, a C++ library that gives Node:
        + A thread pool
        + Async I/O
        + Time                                                                          rs
        + Networking capabilities

    Example:

    const fs = require('fs');

    fs.readFile('data.txt', (err, data) => {
        console.log(data);
    });

Here, Node sends the task to libuv, continues running other code, and executes the callback when ready.

🔄 3. Event Loop — The Scheduler
    The Event Loop is the heart of Node.js.

    It constantly checks:
        - “Are there JS tasks to run?”
        - “Are callbacks ready?”
        - “Do timers need to run?”
        - “Did libuv finish a task?”

    When a background task completes, its callback enters a queue.

    The Event Loop picks it up and executes it.

    ✅ This is why Node.js never blocks and can handle multiple operations efficiently.


*/
