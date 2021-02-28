# SmartQ API

## Requirements
- NodeJS 12 or above
- Docker
- MongoDB

### Production Setup
Run the Docker container with the MONGO_URI environmental variable set and route traffic to port 3005 on the container. The port can be changed by supplying the PORT environmental variable.

### Build the Image
```bash
$ docker build -t name:tag . 
```

### Run the container
```bash
$ docker run -d -p hostPort:containerPort -e MONGO_URI=<supply connection string> name:tag
```

