const express = require('./express')
const app = express();
const port = 3000

function f1({}, next) {
  console.log('f1 start ->');
  next();
  console.log('f1 end <-');
}

function f2({},next) {
  console.log('f2 start ->');
  next();
  console.log('f2 end <-');
}

// async function f3(req, res) {
//   await sleep();
//   console.log('f3 service...');
//   res.send('Hello World!')
// }
async function f4(req, res,next) {

  console.log(777777777)
  console.log(88888)
  const _copy = res.send;
  // res.send('ssssss')
   res.send=function(data){
    console.log(data,22222222)
    return _copy.call(this,`${data}sssssss`)
   }
   next()
}

app.use(f1);
app.use(f2);
// app.use(f3);
// app.use(f4);

// app.get('/', f4,function(req,res){
//   console.log(99)
//    res.send('hello')
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))