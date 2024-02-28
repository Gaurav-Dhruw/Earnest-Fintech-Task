# Earnest Fintech Task

## System Prerequisite

The system should have the following dependencies installed:

- node v20 or above
- yarn

## Running Client Application

Go to the "client" directory and run the following commands:

```
yarn
yarn build
yarn preview
```

Visit http://localhost:4173/ through the browser

**Important:** Add a .env file with a variable "VITE_SERVER_BASE_URL" with value "http://localhost:8000"

## Running Server Application

Go to the "server" directory and run the following commands:

```
yarn
yarn build
yarn start
```

Server will be running at http://localhost:8000/

**Important:** Add a .env file with a variable "DATABASE_URL" with value being the url of the locally setup PostgreSQL database and having the "task" table.

## [Live Site](https://earnest-fintech-task.vercel.app/)
