rsconf = {
    _id: "rs0",
    members: [{
            _id: 0,
            host: "mongo_node1:37017"
        },
        {
            _id: 1,
            host: "mongo_node2:27018"
        },
        {
            _id: 2,
            host: "mongo_node3:27019"
        }
    ]
}

rs.initiate(rsconf);

rs.conf();