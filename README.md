## Javascript Stack Dev_kit

### Installation

Docker Installation (https://docs.docker.com/v17.12/install/)

```
$ docker-compose up -d --build
```

### Environment Location

| Environment | Location |
| ------ | ------ |
| Client | (http://172.166.0.7/) |
| Server | (http://172.166.0.6:8080) |
| Database | (http://172.166.0.5:5432) |

### Database

| Title | Details |
| ------ | ------ |
| Host | 172.166.0.5 |
| PORT | 5432 |
| USER | postgres |
| PASSWORD | 1234 |
| DATABASE | postgres |

### Debug

```
- Client
$ docker-compose up --build client

- Server
$ docker-compose up --build server

- Database
$ docker-compose up --build db
```