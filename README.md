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

### Run the application

There are two ways to run full-stack application. Clone both repositories and run the front-end as instructed in the README file.

1. Run front-end and back-end separately

Then in a directory where you cloned backend, run:

- `npm install`
- `npm run dev`

Then go to `localhost:3000` where the front-end is running by default, to make sure that front-end and 

2. Serve static files from backend

Another way to run the application is by serving the static bundled React from the backend. This way, the backend and front-end could be run from the same port. Go to front-end directory and run:

- `npm install`
- `npm run build`

The last command will generate a `build` folder, which you need to copy to the root of backend directory. And in backend dir, do:

- `npm start`

Then go to `https://localhost:3005` to access the application

## Technical Decisions

Most of the technical decisions we took are based on hackathon's constraints. Since we needed to build a full-stack website in a short time, we went for NodeJs Express and React.
