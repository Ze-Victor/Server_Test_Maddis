<p align="center">
  <a href="https://github.com/Ze-Victor/Server_Test_Maddis/blob/master/README-en.md">English</a>&nbsp;&nbsp;&nbsp;β’&nbsp;&nbsp;
  <a href="https://github.com/Ze-Victor/Server_Test_Maddis/blob/master/README.md">PortuguΓͺs (Brasil)</a>
</p>
<hr>

# Server_Test_Maddis

# π Summary

- [About](#π·οΈ-about)
- [Used technologies](#π-used-technologies)
- [How to download and run?](#π¦-how-to-download-and-run)
- [Downloading the project](#β¬οΈ-downloading-the-project)
- [Database and tables](#π²-database-and-tables)
- [Environment variables](#π-environment-variables)
- [Running the API](#π-running-the-api)

## π·οΈ About

An API developed for knowledge improvment and practicing to further development of a web platform to be launched in the market.

## π Used technologies

The main used technologies were:

- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Knex](https://knexjs.org/)

## π¦ How to download and run?

**Before downloading the project**, it's required to have **Node.js** installed on your machine and, after that, you need to install the following tools:

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com/lang/en/)
- [Docker](https://www.docker.com/)

### β¬οΈ Downloading the project

Open your operational system terminal and run the following commands:

```bash
  # Clone the repository
  git clone https://github.com/Ze-Victor/Server_Test_Maddis.git

  # Change to repository directory 
  cd Server_Test_Maddis

  # Install dependencies
  yarn install
```

#### π² Database and tables

With Docker installed, run the command below in the terminal:

```bash
$ docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

Afterwards, create the database with the following command:

```bash
$ docker exec pg psql -c "CREATE DATABASE maddis_ef" -U root 
```

#### π Environment variables

Create a `.env` file in the root directory of the project and insert the content below inside it:

```bash
ACCESS_TOKEN_SECRET=plataforma_maddis_ef
```

This will be our *secret* for the authentication.

### π Running the API

While the database is in execution, type the following commands in the terminal inside the API directory:

```bash
  # Create tables in  PostgreSQL
  yarn knex:migrate
  # Run the server
  yarn dev
```
