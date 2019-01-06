const AuthRoute = require('./auth.route');
const UsersRoute = require('./users.route');

module.exports = (app) => {
    AuthRoute.routesConfig(app);
    UsersRoute.routesConfig(app);
}