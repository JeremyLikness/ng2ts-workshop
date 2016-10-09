# TypeScript Labs 

## Introduction to TypeScript 

[Presentation](./1ATypeScript/ts.pptx)

## TypeScript Lab 

1. Create a lab directory `mkdir ts-lab` 

2. `cd ts-lab` 

3. `code .` 

4. Create `package.json` 


    {
        "name": "connect-tech-typescript",
        "version": "1.0.0",
        "description": "TypeScript presentation",
        "main": "main.js",
        "scripts": {
            "tsc": "tsc",
            "tsc:w": "tsc -w",
            "start": "npm run tsc:w",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [
            "typescript"
        ],
        "author": "Jeremy Likness",
        "license": "MIT",
        "devDependencies": {
            "typescript": "2.0.0"
        }
    }

5. Create `tsconfig.json` 


    {
        "compilerOptions": {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        },
        "exclude": [
            "node_modules",
            "typings"
        ]
    }

6. After saving, from the root of the project: `npm install` 

7. Create an `examples` directory

8. Add file [001types.ts](./1ATypeScript/examples/001types.ts) to the directory

9. Compile from the project root (parent directory to `examples`): `npm run-script tsc` 

10. Examine the output in `examples/001types.js` 

11. Run the output with `node examples/001types.js` 

12. Repeat steps 8 - 11 with the following: 

    a. [002interfaces.ts](./1ATypeScript/examples/002interfaces.ts)
    
    b. [003classes.ts](./1ATypeScript/examples/003classes.ts)

    c. [004lambdas.ts](./1ATypeScript/examples/004lambdas.ts)

    d. [005complex.ts](./1ATypeScript/examples/005complex.ts)

    e. [006generics.ts](./1ATypeScript/examples/006generics.ts)

    f. [007mixins.ts](./1ATypeScript/examples/007mixins.ts)

13. Congratulations ... you are on your way to mastering TypeScript!
