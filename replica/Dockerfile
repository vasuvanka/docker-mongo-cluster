FROM mongo:latest

LABEL author="Vasu Vanka"

WORKDIR   /usr/src/config
COPY      . /usr/src/config

ENTRYPOINT ["mongo", "mongodb://mongo_node1:37017", "replicaSetConfig.js"]