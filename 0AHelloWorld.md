# Hello, World Lab 

The lab will be posted at the workshop start.

## JavaScript Steps 

1. `mkdir connectjs-ng2` 

2. `cd connectjs-ng2` 

3. `code .` 

4. New file `package.json` 

    ```JavaScript
    {
        "name": "angular2-quickstart",
        "version": "1.0.0",
        "scripts": {
            "start": "npm run lite",
            "lite": "lite-server"
        },
        "license": "ISC",
        "dependencies": {
            "@angular/common": "2.0.0",
            "@angular/compiler": "2.0.0",
            "@angular/core": "2.0.0",
            "@angular/platform-browser": "2.0.0",
            "@angular/platform-browser-dynamic": "2.0.0",

            "core-js": "^2.4.1",
            "reflect-metadata": "^0.1.3",
            "rxjs": "5.0.0-beta.12",
            "zone.js": "^0.6.23",

            "bootstrap": "^3.3.6"
        },

    "devDependencies": {
        "concurrently": "^2.0.0",
        "lite-server": "^2.2.0"
        }
    }
```

5. From command line at root of project: `npm install` 

6. Create `app` subdirectory 

7. Create `app/app.component.js` 
    ```JavaScript
    (function(app) {
        app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>Connect.Tech Rocks!</h1>'
        })
        .Class({
            constructor: function() {}
        });
    })(window.app || (window.app = {}));
```
8. Create `app/app.module.js` 

    ```JavaScript
    (function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [ ng.platformBrowser.BrowserModule ],
            declarations: [ app.AppComponent ],
            bootstrap: [ app.AppComponent ]
        })
        .Class({
            constructor: function() {}
        });
    })(window.app || (window.app = {}));
```

9. Create `app/main.js` 

    ```JavaScript
    (function(app) {
        document.addEventListener('DOMContentLoaded', function() {
            ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.AppModule);
        });
    })(window.app || (window.app = {}));
```

10. Create `index.html` 

    ```html
    <html>
    <head>
        <title>Connect.TECH Angular 2 Lab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles.css">

        <!-- 1. Load libraries -->
        <!-- IE required polyfill -->
        <script src="node_modules/core-js/client/shim.min.js"></script>

        <script src="node_modules/zone.js/dist/zone.js"></script>
        <script src="node_modules/reflect-metadata/Reflect.js"></script>

        <script src="node_modules/rxjs/bundles/Rx.js"></script>
        <script src="node_modules/@angular/core/bundles/core.umd.js"></script>
        <script src="node_modules/@angular/common/bundles/common.umd.js"></script>
        <script src="node_modules/@angular/compiler/bundles/compiler.umd.js"></script>
        <script src="node_modules/@angular/platform-browser/bundles/platform-browser.umd.js"></script>
        <script src="node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js"></script>

        <!-- 2. Load our 'modules' -->
        <script src='app/app.component.js'></script>
        <script src='app/app.module.js'></script>
        <script src='app/main.js'></script>

    </head>

    <!-- 3. Display the application -->
    <body>
        <my-app>Loading...</my-app>
    </body>

</html>
```

11. Create `styles.css` 

    ```css
    h1 {
        color: #369;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 250%;
    }
    body {
        margin: 2em;
    }
```

12. From command line: `npm start` 

## TypeScript Steps (with a little help from the CLI)

1. From admin command line in parent directory: `ng new connect-ts-ng2`

2. Go surf the web for awhile. 

3. No, seriously, go surf the web for awhile. 

4. `cd connect-ts-ng2` 

5. `ng serve` 

6. Open [http://localhost:4200](http://localhost:4200)

