# LCBO My Products On Sale!

Show me my products that are currently on sale

## Synopsis

This project is built with Express, React, Apollo & GraphQL as a full stack implementation. All installation of the modules are the latest as of March 2018. 

## Motivation

This project exists to solve a particular use case. As a user, we want to be able to favourite our product and be notified with that product is on sale. In addition, when we are near a LCBO store, to be notified which of our products we have favourited are on sale at that location. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. This repo has both the server and client set up.


### Installing

To begin starting the server

```
cd server
yarn install
yarn start:dev
```

To begin starting the client 

```
cd client
yarn install
yarn start:dev
```

To start mongodb
```
mongod
```

Add config to root directory
```
module.exports = {
  LCBO_API_ACCESS_KEY: // get from lcboapi.com
};
```

## Authors

* **Uma Umakanthan ** - *Initial work* - [umakajan](https://github.com/umakajan)