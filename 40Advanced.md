# Advanced 

In this lab you'll scaffold a full .NET Core Angular 2 app. .NET Core is cross-platform and you'll get up and running quickly. You'll then be able to explore routing and containers. 

## Install the prerequisites 

1. `npm i -g yo` 

2. `npm i -g generator-aspnetcore-spa` 

## Scaffold the project 

1. Create a directory `advanced` 

2. Change into the directory `cd advanced` 

3. Scaffold the app: `yo aspnetcore-spa` 

4. Choose "Angular 2" and hit ENTER 

5. Keep the default project name ("advanced")

6. Wait for the dependencies to install 

7. `dotnet run` 

8. Open [http://localhost:5000](http://localhost:5000)

## Examine the Routing 

1. Launch Visual Studio Code in the project root `code .` 

2. Open `ClientApp\app\app.module.ts` 

3. Note the import of `RouterModule` from `@angular/router` 

4. The `UniversalModule` is imported for server side rendering which speeds up the first page access 

5. Notice the route definition. It is a path (what appears in the URL), and either a redirect to another path or a component

6. Open `ClientApp\app\components\navmenu\navmenu.component.html` 

7. Note `[routerLink]` directives. These bind to a route so when they are clicked, the route is updated. 

8. Note `[routerLinkActive]` directives. These apply a class when the route is active for menu styling. 

9. Open `ClientApp\app\components\app\app.component.html` 

10. Note the `<router-outler>` tag. This specifies where routes are loaded to (the component is rendered inside). Note that routes can be nested, and a sub-component contain it's own outlet.

## Build a Container (Basic)

1. Examine the `Dockerfile` file which contains commands to build an image 

2. `docker build -t advanced .` to build an image based on the current directory (do this from the root of `advanced`)

3. Type `docker images` to view the image. Note its size. 

4. Type `docker run -d -p 5000:5000 advanced` to run and navigate to [http://localhost:5000](http://localhost:5000)

5. You are now running your app from a container! 

6. `docker ps` to get the container id 

7. `docker stop <containerid>` to stop the container 

8. `docker rm <containerid>` to clean up 

## Build a Container (Advanced) 


