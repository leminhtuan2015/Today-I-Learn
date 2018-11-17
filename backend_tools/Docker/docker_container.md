### Docker containers
### Run a Docker container from Docker Image
### Run Docker container in background (keep Docker container alive as service)
### Committing Changes in a Container to a Docker Image

---------------------------------------------------------------------------------------------------

### Docker containers

* A container is a runtime instance of an Docker image, what the image becomes in memory when executed (that is, an image with state, or a user process). You can see a list of your running containers with the command, **docker ps**, just as you would in Linux.

* Docker images = The Class
* Docker containers = The object (instance of the Class)

```sh
# List the Docker containers
docker container ls
# OR
docker ps
```

#### Dockerfile

* Define a container with Dockerfile
* **Dockerfile** defines what goes on in the environment inside your **Docker container**

### Run a Docker container from Docker Image

* **Docker container** is the instance of **Docker Image**
* Docker container = Class
* Docker Image = Object (the instance of the class)

```sh
docker images

REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
mongo               latest              f4f3756fa507        39 hours ago        382MB
centos              latest              75835a67d134        5 weeks ago         200MB
hello-world         latest              4ab4c602aa5e        2 months ago        1.84kB
```

```sh
docker run -it [IMAGE ID|IMAGE NAME]
# EX: docker run -it centos
# Install tools on Docker container
yum install ...
```

### Run Docker container in background (keep Docker container alive as service)

```sh
docker run -p 49160:8080 -d <your username>/node-web-app

-d = --detach : Run container in background and print container ID

```

### Committing Changes in a Container to a Docker Image

```sh
docker commit -m "What did you do to the image" -a "Author Name" [container-id] [repository/new_image_name]

# EX

docker commit -m "added mariadb-server" -a "TUANLM" 59839a1b7de2 tuanlm/centos-mariadb

```

