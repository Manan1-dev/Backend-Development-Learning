/*
                                -------------------------------------------------

                                    Discussion => What is Node.js REPL?

                                -------------------------------------------------

REPL stands for:

    R -> Read

    E -> Eval (Evalute)

    P -> Print

    L -> Loop

It is an interactive shell where we can run JavaScript line-by-line directly in our terminal.

It's a quick testing environment, built into Node.js which is very useful for experimenting with JavaScript code. It's great for checking:
        - functions
        - Objects
        - Expressions
        - Node features

🔹 Starting the REPL

    Open your terminal in VS Code (or your preferred terminal, e.g., Git Bash) and type:
        
        node                    
    
    You will see this prompt:

        >

    This means the REPL is running and ready.

    (Tip: I have screenshots in ../public assets/REPL - SS1.png and REPL - SS2.png for reference.)


🔥 What We Can Do in the REPL

    ✔️ Run JavaScript instantly (image reference: "../public assets/REPL - SS3.png")

        > 5 + 5
        10

    ✔️ Create variables (image reference: "../public assets/REPL - SS4.png")

        > let x = 10
        > x * 2
        20

    ✔️ Test functions (image reference: "../public assets/REPL - SS5.png")

        > function add(a, b) { return a + b; }
        > add(4, 6)
        10

    ✔️ Use Node features like fs, path, etc. (image reference: "../public assets/REPL - SS6.png")

        > const os = require('os')
        > os.platform()
        'win32'

🧠 Special REPL Commands (Very Important)
    
    These are not JavaScript. They are REPL commands.

        ✔️ .help => Shows all REPL commands.

        ✔️ .exit => Exit the REPL (or press Ctrl + C twice).

        ✔️ .clear => Clear the current REPL context.

        ✔️ .save filename.js => Save the current session into a file.

        ✔️ .load filename.js => Load a file into REPL to run it line-by-line.

🎯 Why REPL is Useful

    - Quick Testing: Test small code snippets without creating a file.
    - Learning: Great for beginners to practice JavaScript. 
    - Debugging: Quickly check values and functions during development.
    - Experimentation: Try out new Node.js features or libraries on the fly.

    Happy coding with Node.js REPL!


*/
