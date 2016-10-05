# Angular Command Line Interface (CLI) Lab 

1. Navigate to the `connect-ts-ng2` project 

2. `ng version` (should be 1.0.0-beta.16 or higher)

3. `ng build -dev` 

4. Inspect the `dist` folder and note the file sizes

5. `ng build -prod` 

6. Inspect the `dist` folder again 

7. Run tests with `ng test` 

8. Stop the test runner 

9. "Lint" the code (check it against best practices and standard formatting) with `ng lint` 

10. Open a second Node.js command prompt 

11. In the first command prompt run `ng serve` 

12. In the second command prompt run `ng e2e` 

## Notes 

`ng new` creates a folder, then runs `ng init` 

`ng init` creates a new CLI project in the current folder 

## Bonus: Run Angular Inside a Container

1. Create a file in the root of the project named `Dockerfile` 

2. Populate it: 


    FROM nginx 
    COPY dist /usr/share/nginx/html 
    EXPOSE 80/tcp

3. Create a file in the root named '.dockerignore' 

4. Populate it: 


    coverage
    e2e
    node_modules
    src 

5. Save both files 

6. `ng build -prod` 

7. From the command prompt, build the container: 
`docker build -t ng2inabox .` 

8. Run the container: 
`docker run --name ng2box -p 8192:80 -d ng2inabox` 

9. [http://localhost:8192](http://localhost:8192) 

10. Stop the container: `docker stop ng2box` 

11. Find the stopped container: `docker ps -a` 


    CONTAINER ID        IMAGE               COMMAND                  CREATED             
    2dc3559a01be        ng2inabox           "nginx -g 'daemon off"   42 minutes ago      
    STATUS                      PORTS               NAMES
    Exited (0) 20 seconds ago                       ng2box

12. Use the container id to remove the container: `docker rm 2dc3559a01be`