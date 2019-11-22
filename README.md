## Javascript Stack Dev_kit

### Project Installation

Docker Installation [docs.docker.com/v17.12/install/](https://docs.docker.com/v17.12/install/)

```
$ docker-compose up -d --build 			/ ### Start Server ### /
```

### Environment Location

| NO.| Environment | Location | Document |
| ------ | ------ | ------ | ------ |
| 1 | Client | [172.166.0.7](http://172.166.0.7/) | https://nextjs.org/ |
| 2 | Server | [172.166.0.6:8080](http://172.166.0.6:8080) | https://expressjs.com/ |
| 3 | Database | [172.166.0.5:5432](http://172.166.0.5:5432) | https://www.postgresql.org/ |
| 4 | Docker compose | - | https://docs.docker.com/compose/ |

### Database

```
Database : postgres
Username : postgres 
Password : 1234 
Host : 172.166.0.5 
Port : 5432 
```

### Debug

| Environment | Command  |
| ------------ | ------------ |
| Client | `$ docker-compose up --build client` |
| Server | `$ docker-compose up --build server` |
| Database | `$ docker-compose up --build db` |
