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
| [Angular CLI](https://angular.io) | 13.+ | TypeScript-based web application framework | ```npm i -g @angular/cli@13.3.1"``` |
| [NodeJs](https://nodejs.org/en/) | 12.20+ OR 14.15+ OR 16.10.+ | JavaScript runtime built on Chrome's V8 JavaScript engine | [NodeJs 14.19.3](https://nodejs.org/download/release/v14.19.3/) |
| [NPM](https://www.npmjs.com) | 6.5.+ OR 7.4.+ | Node Package Manager | Compatible version comes with NodeJs |

# Installation

This project can be used as a base to your NAE application. Before you start coding please consider doing following
steps to personalize project:

- In package.json, change the value of ```name``` attribute to name of your application

As it is an Angular project, there is a file called ```package.json``` in root folder, which contains information about
project and application, script definitions, dependencies and their versions.

First step is to install the dependencies using the NPM package manager. Using terminal, navigate to the root folder (
where the ```package.json``` is saved) and run ```npm install --legacy-peer-deps``` command. This will scan the ```package.json``` file and
install the dependencies from NPM repositories.

The second step is to build the application using Angular CLI (Command Line Interface). This can be done using terminal
when you are in the root folder of the project running ```ng build``` command. This will create a ```dist``` folder,
that contains the build of application. This build then can be moved to a web server (e.g. Apache or Nginx).

To run the application locally you can use ```ng serve``` command, that runs an embedded server and serves the
application to localhost. Port of the application can be changed using ```--port``` option. The default port is 4200.

## NAE.json

The frontend application consist of side menu and a views for the application. There are some predefined views for
processes, cases, tasks and user management. Further views can be added using Angular schematics.

To configure NAE application more easily the libraries use file ```nae.json``` that is placed in root of the project.
```nae.json``` defines global application configuration like urls to backend resources, services' configurations,
routing and views.

<!--- For generating a view that is defined in ```nae.json``` you can use Angular Schematics. In terminal, use ```ng generate netgrif:components``` command to run NAE Components Schematic tool. --->

You can find [minimal nae.json configuration here](docs/configuration/nae-minimal.json).

## Runtime configuration

The Docker image is environment agnostic: at container start, `docker/40-env.sh` renders `src/env.template.js` into
`env.js`, which overrides the bundled `nae.json` before Angular bootstraps. A plain `ng build` ships the empty default
`src/env.js` from the repository, so the application also works without a container.

| Variable | Configuration key | Default |
|---|---|---|
| `API_BASE_URL` | `providers.auth.address` and every `providers.resources[].address` | `http://localhost:8080/api` |
| `AUTO_RESOLVE_BACKEND_URL` | `autoResolveBackendUrl` — rewrites every provider address to `<origin>/api` | `false` |
| `LOG_LEVEL` | `services.log.level` | `DEBUG` (from `nae.json`) |
| `DEFAULT_REALM` | `services.auth.defaultRealm`, sent as the `X-Realm-Id` header on login and signup | `Admin` (from `nae.json`) |
| `GATEWAY_URL` | `application.gatewayUrl` — used only by the public-configuration endpoint | `http://localhost:8800/api` |
| `APPLICATION_IDENTIFIER` | `application.applicationIdentifier` — used only by the public-configuration endpoint | `nae` |
| `TYPE_IDENTIFIER` | `application.typeIdentifier` — used only by the public-configuration endpoint | `default` |

`API_BASE_URL` is the variable a deployment normally sets; `AUTO_RESOLVE_BACKEND_URL=true` is the alternative for a
deployment where nginx (or an ingress) proxies `/api` on the same origin, and it wins over `API_BASE_URL`.
`GATEWAY_URL` and the identifiers are inert while `resolve_configuration` is `false`, because the application does not
call `loadConfiguration()`; `resolve_configuration` itself is therefore not configurable through `env.js` either.

An empty variable is ignored, so the value from `nae.json` stays in effect. Keys under `nae` are dotted paths into
`nae.json` and must already exist there; an unknown path only logs a warning and the application still starts. Values
must not contain `"`, `$`, `\` or control characters (including newlines) — the start script rejects them instead of
writing a broken `env.js`. The script derives the checked variables from `src/env.template.js`, so a new key needs to be
added only there. Run `sh docker/40-env.test.sh` to verify the script without Docker.

When the backend is on a different origin than the frontend, its CORS configuration must allow the `X-Realm-Id` header
in `Access-Control-Allow-Headers`; otherwise login and signup fail on the preflight request.

For easier startup
clone [template project for NAE frontend application](https://github.com/netgrif/nae-frontend-starter)
