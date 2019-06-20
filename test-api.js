const axios = require('axios');

const aRequest = () => axios
  .get('http://localhost:3000/count')
  .then(res => `${res.data} ${new Date().toISOString()}` )

const aRequestWithInc = () => axios
  .get('http://localhost:3000/countWithInc')
  .then(res => `${res.data} ${new Date().toISOString()}` )

Promise.all([
  aRequest(),
  aRequest(),
  aRequest(),
  aRequest(),
  aRequest(),
]).then(res => {
  console.log(res);
})

Promise.all([
  aRequestWithInc(),
  aRequestWithInc(),
  aRequestWithInc(),
  aRequestWithInc(),
  aRequestWithInc(),
]).then(res => {
  console.log(res);
})