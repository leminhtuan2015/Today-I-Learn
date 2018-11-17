### Docker Image
### Build your own a Docker Image Dockerfile
### Pull Docker Image from Docker hub
### Pushing Docker Images to a Docker Repository (Docker hub)

--------------------------------------------------------------------------------------------

### Docker images

* In Docker, everything is based on Images. An image is a combination of a file system and parameters
* An image is an executable package that includes everything needed to run an application, the code, a runtime, libraries, environment variables, and configuration files.

```sh
# List the Docker images
docker image ls
docker images
```

### Build your own a Docker Image Dockerfile

Step 1: Make a **Dockerfile**

```docker
FROM ubuntu # FROM [IMAGE_NAME]

RUN apt-get update 
RUN apt-get install –y nginx 
CMD [“echo”,”Image created”]

```

### Pull Docker Image from Docker hub

* We can pull a Docker image from Docker Hub : **https://hub.docker.com/explore/**

```sh
docker pull DOCKER_IMAGE
```

#### Run a Docker container from Docker Image

* **Docker container** is the instance of **Docker Image**
* Docker container = Class
* Docker Image = Object (the instance of the class)

```sh
docker run -it [IMAGE ID|IMAGE NAME]
```

### Pushing Docker Images to a Docker Repository (Docker hub)

* The same push code to **Github**

* **Step 1:** Create an account on Docker Hub. Afterwards, to push your image, first log into Docker Hub. You'll be prompted to authenticate:

```sh
docker login -u [docker-hub-username]

# EX
docker login -u leminhtuan2015
Password:
Login Succeeded
```

* **Step 2:**

```sh
docker push [docker-hub-username]/[docker-image-name]

# EX

docker push leminhtuan2015/XXX_Image

```
