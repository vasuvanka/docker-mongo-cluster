# Mongodb Cluster With Docker

- Run `docker-compose up --build`

# Mongodb Cluster Config Without Docker

- Run mongodb instances by using following commands.
- Create folders for data storage.(rs0-0,rs0-1,rs0-2)
    - mongod --replSet rs0 --port 27017 --bind_ip localhost,0.0.0.0 --dbpath ./rs0-0 --smallfiles --oplogSize 128
    - mongod --replSet rs0 --port 27018 --bind_ip localhost,0.0.0.0 --dbpath ./rs0-1 --smallfiles --oplogSize 128
    - mongod --replSet rs0 --port 27019 --bind_ip localhost,0.0.0.0 --dbpath ./rs0-2 --smallfiles --oplogSize 128

- Create an cluster instance config 
    - mongo --port 27017
        >  rsconf = {
        >    _id: "rs0",
        >    members: [
        >        {
        >        _id: 0,
        >        host: "localhost:27017"
        >        },
        >        {
        >        _id: 1,
        >        host: "localhost:27018"
        >        },
        >        {
        >        _id: 2,
        >        host: "localhost:27019"
        >        }
        >    ]
        >    }
- rs.initiate( rsconf )
- rs.conf()
