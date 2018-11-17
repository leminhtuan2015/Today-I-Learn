### Docker Image
### Build your own a Docker Image Dockerfile
### Pull Docker Image from Docker hub
### Pushing Docker Images to a Docker Repository (Docker hub)

--------------------------------------------------------------------------------------------

### Docker images

* Docker images = **OS** + **Tools (Mysql, Node, ...)** + **Application (Web services, API services, ...)**
* Docker container = Instance of running Docker images

* In Docker, everything is based on Images. An image is a combination of a file system and parameters
* An image is an executable package that includes everything needed to run an application, the code, a runtime, libraries, environment variables, and configuration files.

```sh
# List the Docker images
docker image ls
docker images
```

### Build your own a Docker Image Dockerfile

**Step 1:** Make a **Dockerfile**

```sh
FROM ubuntu 
# FROM [IMAGE_NAME] : It tells docker, from which base image you want to base your image from

RUN apt-get update 
# The RUN command is used to run instructions against the image.
RUN apt-get install –y nginx 
CMD [“echo”,”Image created”]

```

**Step 2:**

```sh
docker build [path/to/folder/contain/Dockerfile]

#OR

docker build  -t [ImageName]:[TagName] [path/to/folder/contain/Dockerfile]

# -t : is to mention a tag to the image
# ImageName : This is the name you want to give to your image.
# TagName : This is the tag you want to give to your image.
# [path/to/folder/contain/Dockerfile] : The directory where the Docker File is present.

# EX:

sudo docker build –t myimage:0.1 ./


```

### Pull Docker Image from Docker hub

* We can pull a Docker image from Docker Hub : **https://hub.docker.com/explore/**

```sh
docker pull DOCKER_IMAGE
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
