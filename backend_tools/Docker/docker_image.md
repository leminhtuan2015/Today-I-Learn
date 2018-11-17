### Docker Image

--------------------------------------------------------------------------------------------

### Docker images

* In Docker, everything is based on Images. An image is a combination of a file system and parameters
* An image is an executable package that includes everything needed to run an application, the code, a runtime, libraries, environment variables, and configuration files.

```sh
# List the Docker images
docker image ls
docker images
```

#### Pull Docker Image

* We can pull a Docker image from Docker Hub : **https://hub.docker.com/explore/**

```sh

docker pull DOCKER_IMAGE

```

#### Run a Docker image

* **Docker container** is the instance of **Docker Image**
* Docker container = Class
* Docker Image = Object (the instance of the class)

```sh
docker run [IMAGE ID|IMAGE NAME]
```
