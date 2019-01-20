module.exports = {
    "port": 3000,
    "jwt_secret": "!!!p4ssw0rd!!!",
    "jwt_expiration_in_seconds": 3600,
    "mongo": {
        "host": "mongodb://localhost",
        "collection": "nodejs-rest-api"
    },
    "permissionLevels": {
        "NORMAL_USER": 1,
        "MANAGER_USER": 2,
        "ADMIN": 3,
    }
};