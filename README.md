# moldsamerica


## Instructions to run

Make sure that docker and docker-compose are installed and of a recent version. Then it's
simply a matter of running one of the two commands.

If running the dev environment, then use the following command.

```docker-compose up```

If running for production, use the following (the -d flag is optional, it stands for detach).

```docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d```


## Deploying

Easiest way to deploy is going to be to ssh into the server, do a ```git pull```
to get the most recent version. 

Then you will have to rebuild the docker images since the volumes aren't mounted.

```docker-compose build```

Next stop the container that is running.

```docker-compose down```

Finally push up the latest image by running the server for production (see above ```docker-compose -f docker-compose.yml ...```)
