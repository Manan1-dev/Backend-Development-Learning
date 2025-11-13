/*
                                -------------------------------------------------

                                    Discussion => What is Node.js REPL?

                                -------------------------------------------------

REPL stands for:

R -> Read

E -> Eval (Evalute)

P -> Print

L -> Loop

It is an interactive shell where we can run JavaScript line-by-line directly in our terminal. It's a quick testing environment, built into Node.js which is very useful for experimenting with JavaScript. It's greate for checking functions, objects, expressions, Node features.

For more clear understanding, we have open our terminal in VS Code. See image for reference in public assets: "../public assets/REPL - SS1.png".

In the image "REPL - SS1", we clearly see it just our regular terminal. (I use git-bash as default terminal). Now we can open the REPL shell by typing 

    node                    
    
We'll see this prompt:

    >

See image for reference in public assets: "../public assets/REPL - SS2.png". That means REPL is running and ready.


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

        ✔️ .help => Shows all commands.

        ✔️ .exit => Exit the REPL (or press Ctrl + C twice).

        ✔️ .clear => Clear the current REPL context.

        ✔️ .save filename.js => Save the current session into a file.

        ✔️ .load filename.js => Load a file into REPL to run it line-by-line.

That's a brief overview of Node.js REPL. It's a powerful tool for quick testing and experimentation with JavaScript and Node.js features directly in the terminal.

*/
