/*
-------------------------------------------------
    Discussion => Node.js Core Modules
-------------------------------------------------

Node.js comes with built-in modules that we can use without installing anything.
These are called core modules, and they make our life easier when building backend apps.

Common modules:
  - fs    => File System (read/write files)
  - path  => Work with file/folder paths
  - os    => Operating system info
  - http  => Create servers and handle requests
  - url   => Work with URLs
  - events=> Event-driven programming

HOW TO IMPORT (two methods)
1) CommonJS (default in many projects)
    const fs = require("fs");

2) ES Modules (modern JS)
   - In package.json add: { "type": "module" }
   - OR use .mjs extension for the file
   - Then import like:
       import * as fs from "fs";
     or use promises API:
       import { writeFile, readFile } from "fs/promises";

NOTE: ES modules have small differences:
  - __dirname and __filename are not available directly.
  - To get them, use:
      import { fileURLToPath } from "url";
      import { dirname } from "path";
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);

Mixing CJS and ESM:
  - In ESM you can still load CJS using createRequire:
      import { createRequire } from "module";
      const require = createRequire(import.meta.url);
      const oldModule = require("./some-old-module.cjs");

Let's make separate example files for each core module .
*/
