# Netgrif Application Engine Frontend Starter

This is a frontend starter project for [Netgrif Application Engine](https://github.com/netgrif/components) to display
your NAE based application, manage your processes, cases and tasks.

It helps if you are familiar with Angular Framework, Typescript, CSS and HTML, but it is not necessary as this starter
project already contains some predefined views and navigation items, which are suitable for interacting with your
processes.

# Requirements

Frontend application has some requirements for runtime environment. The following table is summary of requirements to
build, run and use the engine.

| Name | Version | Description | Recommendation |
|------|---------|-------------|----------------|
| [Angular CLI](https://angular.dev) | 17.3.+ | TypeScript-based web application framework | ```npm i -g @angular/cli@17.3.8``` |
| [NodeJs](https://nodejs.org/en/) | 18.13+ OR 20.9+ | JavaScript runtime built on Chrome's V8 JavaScript engine | [NodeJs 20.x LTS](https://nodejs.org/download/release/latest-v20.x/) |
| [NPM](https://www.npmjs.com) | 8.+ | Node Package Manager | Compatible version comes with NodeJs |

# Installation

This project can be used as a base to your NAE application. Before you start coding please consider doing following
steps to personalize project:

- In ```package.json```, change the value of ```name``` attribute to name of your application
- In ```angular.json```, rename the project ```template-frontend``` (including all ```buildTarget```
  and ```devServerTarget``` references and ```outputPath```) to name of your application

As it is an Angular project, there is a file called ```package.json``` in root folder, which contains information about
project and application, script definitions, dependencies and their versions.

First step is to install the dependencies using the NPM package manager. Using terminal, navigate to the root folder (
where the ```package.json``` is saved) and run ```npm install --legacy-peer-deps``` command. This will scan
the ```package.json``` file and install the dependencies from NPM repositories. The ```--legacy-peer-deps``` flag is
required, because some of the dependencies (e.g. ```@angular-material-components/datetime-picker```) declare peer
dependencies on older Angular versions than the one used by this project.

The second step is to build the application. In the root folder of the project run ```npm run build``` command, which
builds the application in production configuration. This will create a ```dist/template-frontend``` folder (named
after the project in ```angular.json```), that contains the build of application. This build then can be moved to a
web server (e.g. Apache or Nginx).

To run the application locally you can use ```npm start``` command, that runs an embedded development server and serves
the application to localhost. The default port is 4200, it can be changed using ```--port``` option
(e.g. ```npm start -- --port 4300```).

The following scripts are defined in ```package.json```:

| Script | Command | Description |
|--------|---------|-------------|
| ```npm start``` | ```ng serve --configuration development``` | Runs development server on http://localhost:4200 |
| ```npm run build``` | ```ng build --configuration production``` | Builds the application for production into ```dist``` folder |
| ```npm test``` | ```ng test``` | Runs unit tests using Karma |
| ```npm run lint``` | ```ng lint``` | Runs ESLint |

If you have Angular CLI installed globally, you can use ```ng``` commands directly (e.g. ```ng serve```, ```ng build```).

## Connecting to backend

The frontend application requires a running NAE backend application, for example
[NAE backend application starter](https://github.com/netgrif/nae-backend-application-starter). By default, the
application expects the backend to run on ```http://localhost:8080/api```.

The backend address is configured in ```nae.json``` in the ```providers``` section:

- ```providers.auth.address``` - address used for authentication (login, logout, signup)
- ```providers.resources[].address``` - addresses of backend resources (e.g. ```main```, ```case```, ```task```,
  ```petrinet```)

If your backend runs on a different host or port, change these addresses accordingly.

If the frontend is deployed on the same origin as the backend (e.g. behind a reverse proxy), you can set
attribute ```autoResolveBackendUrl``` to ```true```. All addresses in ```providers``` are then replaced with
```<origin of the frontend>/api``` (see ```src/app/template-frontend-configuration.service.ts```).

## NAE.json

The frontend application consists of a side menu and views for the application. There are some predefined views for
processes, cases, tasks and user management. Further views can be added using Angular schematics.

To configure NAE application more easily the libraries use file ```nae.json``` that is placed in root of the project.
```nae.json``` defines global application configuration like urls to backend resources, services' configurations,
routing and views.

<!--- For generating a view that is defined in ```nae.json``` you can use Angular Schematics. In terminal, use ```ng generate netgrif:components``` command to run NAE Components Schematic tool. --->

You can find [minimal nae.json configuration here](https://github.com/netgrif/components/blob/master/docs/configuration/nae-minimal.json).
Detailed description of all configuration options can be found
in [configuration documentation](https://github.com/netgrif/components/blob/master/docs/configuration/configuration.md).
