var fs = require('fs')

fs.readFile('./stub/projects.json', function(err, data) {
  console.log('error', err)
  console.log('data', data)
  console.log(JSON.parse(data))
})

// console.log('stub', stub)

// console.log('object', JSON.parse(stub))
