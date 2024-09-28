const JSONServer = require('json-server');
const MPServer = JSONServer.create();
const router = JSONServer.router('db.json');
const middleware = JSONServer.defaults();
const PORT = process.env.PORT || 3000; // Use process.env.PORT if defined, otherwise default to 3000

MPServer.use(middleware);
MPServer.use(router);

MPServer.listen(PORT, () => {
    console.log(`Media player running at port: ${PORT} and waiting for client requests`);
});
