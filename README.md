# HostApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.

# Angular Micro frontend Architecture with multiple repositories 
Micro-frontend is a pattern that allows to build the frontend applications as individual applications (remote) that can be integrated within a shell (host) application. Module federation plugin of the Webpack is used to load these remote micro-frontend applications into a host application.

## Prerequisites
Clone both host-app and remote-app repo

Host App (Hosted in port 4200)
https://github.com/priyausjobs/angular-multirepo-microfrontend-host-app

Remote App (Hosted in port 4300)
https://github.com/priyausjobs/angular-multirepo-microfrontend-remote-app

## Commands
Run npm install, ng s -o from cloned repo Host App
Run npm install, ng s -o from cloned repo Remote App

## Functionalities
Demonstrate  communication between multi repo in an micro-frontend architecture through Webpack module federation
- Control remote app state from host app
- Control host app state from remote app
