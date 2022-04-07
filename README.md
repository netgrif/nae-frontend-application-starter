# Netgrif Application Engine Backend Starter

This is a frontend starter project for [Netgrif Application Engine](https://github.com/netgrif/components) to display your NAE based application, manage your processes, cases and tasks.

It helps if you are familiar with Angular Framework, Typescript, CSS and HTML, but it is not necessary as this starter project already contains some predefined views and navigation items, which are suitable for interacting with your processes.



# Requirements
Frontend application has some requirements for runtime environment. The following table is summary of requirements to run and use the engine.

| Name | Version | Description | Recommendation |
|------|---------|-------------|----------------|
| [NodeJs](https://nodejs.org/en/) | 12+ | JavaScript runtime built on Chrome's V8 JavaScript engine | [NodeJs 10.22.11](https://nodejs.org/en/download/releases/) |
| [NPM](https://www.npmjs.com) | 6+ | Node Package Manager | Compatible version comes with NodeJs |

The above requirements are enough to run this starter project, but if you want to develop other views and component into frontend application, you will need Angular framework installed too:

| Name | Version | Description | Recommendation |
|------|---------|-------------|----------------|
| [Angular](https://angular.io) | 10+ | TypeScript-based web application framework | [Angular 10](https://angular.io) |

# Installation
This project can be used as a base to your NAE application. Before you start coding please consider doing following steps to personalize project:

- In package.json, change the value of ```name``` attribute to name of your application

As it is an Angular project, it contains a file called ```package.json```


### NAE.json

To configure NAE application more easily the libraries use file nae.json that is placed in root of the project.
nae.json defines global application configuration like urls to backend resources, services' configurations, routing and views.

You can find [minimal nae.json configuration here](docs/configuration/nae-minimal.json).

You can read more on how to configure complete [nae.json here](https://components.netgrif.com/configuration).


For easier startup clone [template project for NAE frontend application](https://github.com/netgrif/nae-frontend-starter)

For more information please read instructions in [Get Started](https://components.netgrif.com/get_started)
