# Brew o Matic

This project is an intent to rewrite [BoM](https://github.com/lautarobock/brew-o-matic), the excellent web application for home brewers developed by [Lautaro](https://github.com/lautarobock), using new technologies such as [PWA](https://developers.google.com/web/progressive-web-apps/) and [VueJS](https://vuejs.org/).

## Requirements

You have to install [nodejs](https://nodejs.org/) and either [npm](https://yarnpkg.com/en/) or [yarn](https://yarnpkg.com/en/).  I recommend using [nvm](https://github.com/creationix/nvm), which is a great node version manager.

## Configuration

You need a config.js file in the backend root directory to run the application in development mode, this file has to have the environment specific information such as mongodb url or clientID/secret for the authentications methods that Bom supports.

If you run the application in production mode (for example with docker-compose, see below), you have to set the path to this file in the docker-compose.yml file:

```yml
  bom:
    .....
    volumes:
      - /tmp/dist/config.js:/usr/src/app/config.js
```
## Development mode

Please move to the ```backend``` directory and execute

```sh
$ cd backend
$ yarn
$ yarn start
```

This will start the server (web services) application.  Then, move to the ```frontend``` directory and run

```sh
$ cd frontend
$ yarn 
$ yarn dev
```

The system default browser should be opened and the web application displayed

## Build

@TODO

## Docker

If you have [docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/) installed, I recommend that run the application with it:

1. First build the docker image
```sh
$ docker build -t brew-o-matic .
```
2. Then, start both containers (BoM and MongoDB)
```sh
$ docker-compose up
```
