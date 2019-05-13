# Welcome to Martin's Angular Tutorial

Here you will find useful information and all the materials from the lectures.

Screen recordings (in bulgarian) can be found in the following

[youtube playlist link](https://www.youtube.com/watch?v=PJpzRJOzJ-w&list=PLqavB222LKn4zqH5fIH6mwkpOyxB75FXh)

The tutorial is accompanied by the linked github repository (checkout the link in the header).

**!!!The production server from the tutorials is not working anymore. The backend is available as a docker container [here](https://cloud.docker.com/repository/docker/maddob/blog-backend)!!! The Tag 0.3.6 has additional security disabled so you will be able to access all discussed features in the tutorial. To run the container execute:**
```
docker run -p 8000:8000 maddob/blog-backend:0.3.6
```

**SpringBoot REST API is started in the container on port 8000. Currently you cannot change that. So you have to map it to some of your local ports to access it. The command above will make the REST API accessible from localhost:8000. Swagger UI will then be available on http://localhost:8000/swagger-ui.html. You are of course free to change the mapping :)**  

**To get access from the Angular application you will also have to adjust the proxy settings. Here is a config for the started docker container from the example above:**

```
// the new proxy.conf.json that is to be used 
{
  "/api/v1/": {
    "target": "http://localhost:8000",
    "secure": false
  },

  "/messages/": {
    "target": "http://localhost:8000",
    "secure": false
  },

  "/actuator/": {
    "target": "http://localhost:8000",
    "secure": false
  }
}
```

As the lectures progress, the repository will also be updated.

So far the following lectures took place:
1. Basic angular introduction
 * Slides - [pdf](slides/lecture1.pdf)
 * Video recording (unfortunately not a screencast) - [video_1](https://www.youtube.com/watch?v=2htMrPe4KFU&index=1&list=PLqavB222LKn4zqH5fIH6mwkpOyxB75FXh)
 * Content: A gentle angular introduction

2. Basic angular introduction (continued)
 * Slides - continued from lecture 1
 * Video recording - [video_2](https://www.youtube.com/watch?v=PJpzRJOzJ-w&list=PLqavB222LKn4zqH5fIH6mwkpOyxB75FXh&index=2)
 * Content: Basic component interaction, services

3. Building Applications, Environment Configuration, Deployment
 * Slides - [pdf](slides/lecture2.pdf)
 * Video recording - [video_3](https://www.youtube.com/watch?v=yApcdxWlcNg&list=PLqavB222LKn4zqH5fIH6mwkpOyxB75FXh&index=3)
 * Content: Typescript compilation with basic configs, additional angular environments, deployment strategies discussion, demonstration with remote nginx

4. Routing
 * Slides - [pdf](slides/lecture3.pdf)
 * Video recording - [video_4](https://youtu.be/gK2sshXXSZk)
 * Content: Routing basics, using the core routing services and directives

5. RxJS Basics
 * Slides - [pdf](slides/lecture4.pdf)
 * Video recording - [video_4](https://youtu.be/bplkYoauuMU)
 * Content: RxJS basics, Observables creation, usage, subjects and chaining 