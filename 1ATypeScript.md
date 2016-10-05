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

7. `npm start` 

8. Add file `001types.ts` 

