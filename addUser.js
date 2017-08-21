const mongo = require('mongodb')
const monk = require('monk')
const db = monk('localhost:27017/canban')
const crypto = require('crypto')

const login = process.argv[2]
const password = process.argv[3]

const handleError = function (err) {
  if(err) {
    console.log(err)
    process.exit()
  }
}

if (login && password) {
  const hex = crypto.createHash('md5').update(password).digest("hex");

  db.collection('users').find({ login }, {},
    (err, data) => {
      handleError(err)
      if (data.length === 0) {
        db.collection('users').insert({
          login,
          password: hex
        }, {}, (err, data) => {
          handleError(err)
          console.log(`user with login <${login}> inserted!`)
          process.exit()
        })
      } else {
        console.log(`user with login <${login}> already exists`)
        process.exit()
      }
    }
  )
}
