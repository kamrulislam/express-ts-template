# Express TypeScript template

This is a customised version of the template.

* Dockernizable
* Logging using winston
* Database connection to postgresql using pg-promise
* Testing using mocha/chai/ndb
* Async handler for async/await syntax

```bash
cd to your project.
curl -vL https://api.github.com/repos/SpatialVision/express-ts-template/tarball/develop | \
tar xfz - && DIR=`ls |grep SpatialVision` && mv $DIR/* .; mv $DIR/.* .; rm -fr $DIR && chmod +x *.sh
```

# Pre-reqs
- Install nvm 
- Build and run the project
```
nvm install
nvm use
npm i
npm start
```
Navigate to `http://localhost:3000`


# .env
```bash

API_VERSION=1.0.2
API_LOG_LEVEL=debug

POSTGRES_HOST=localhost
POSTGRES_PORT=7432
POSTGRES_DATABASE=db
POSTGRES_USER=user
POSTGRES_PASSWORD=password

AUTH0_DOMAIN=your-auth0-domain.au.auth0.com
```

# Docker scripts
Edit Dockerfile and Dockerfile.dev
```
# Update FROM clouse with your registry for base
FROM svgitlab.spatialvision.com.au:4567/GROUP/YOUR_PROJECT:base

```

# Ramda and Rambda

https://github.com/selfrefactor/rambda#ramda-methods-missing-in-rambda


--------------------
Based on 
[TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter) and [Express Generator](https://github.com/expressjs/generator)