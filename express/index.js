const http = require('http');

function createApplication() {
  const middleWares = [];
  let index = 0
  const app = function (req,res) {
    function next(){
      if (index>=middleWares.length) {
        return new Error('end')
      }
      const fn = middleWares[index]
      index++
      return fn({},()=>{return next()})

    }
    res.end('hello express')
    next()
  };
  app.listen = function (...args) {
    const server = http.createServer(app);
    server.listen(...args);
  };
  app.use = function (fn) {
    middleWares.push(fn);
  };

  return app;
}
module.exports = createApplication;