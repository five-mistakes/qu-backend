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

## Infrastructure, Scale and Security.
We have a Cloud Native approach and plan to keep components as independent as possible. The application will be deployed as a Docker container onto AWS ECS using EC2 backend for majority and Fargate for bursting during peak hours. We manage infrastrucuture using Terraform and storing the state in AWS S3 buckets. We have 2 seperate VPCs, one for the application and one for the database. The VPCs each include two availability zones for high-availability. The Application VPC has public and private subnets. Public subnets are used for the load balancers and controlling network into the application. We have isolated the application containers within private subnets for security reasons. The containers are only allowed to communicate with the load balancers and the other VPC for the DB. The DB VPC has 2 zones and uses only private subnets for security reasons. Using AWS RDS lets us easily scale out in case it's needed. The VPC communicate between each other using a VPC Peering Connection and the main route tables allow routing to the specific subnets and their CIDR Blocks. We plan to use AWS KMS for storing and dealing with secrrets. For monitoring, we plan to use Cloudwatch or a combination of Prometheus + Grafana if we choose to use Kubernetes and make use of AWS EKS. Regarding databases, this is simply an example with RDS, if we use MongoDB for the final product, this would change the infrastructure a bit for us.

![Blank diagram](https://user-images.githubusercontent.com/79756625/109425391-b3c3d600-79f0-11eb-9fc0-063fcb243628.png)
