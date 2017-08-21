const path = require('path');
const db = require('./db/utils')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const indexPath = path.join(__dirname, '/public/index.html');
const loginPath = path.join(__dirname, '/public/login.html');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser())

  if (process.env.NODE_ENV !== 'production') {
    app.all('/*', function(req, res, next) {
      const auth = req.cookies.auth
      if (auth) {
        next()
      } else {
        const login = req.body.login
        const password = req.body.password
        if (login && password) {
          db.authUser(login, password, (result) => {
            if (result) {
              res.cookie('auth', true, { expires: 0 })
              res.cookie('user', login, { expires: 0 })
              res.sendFile(indexPath)
            } else {
              res.sendFile(loginPath)
            }
          })
        } else {
          res.sendFile(loginPath)
        }
      }
    })
  }


  app.get('/', function(req, res) {
    res.sendFile(indexPath);
  });

  app.all('/projects', function(req, res) {
    db.allUsers(function(users) {
      db.allProjects(function(projects) {
        res.json({ projects, users})
      })
    })
  });

  app.all('/project/add', function(req, res) {
    db.saveProject(req.body.project, function(projects) {
      res.json({ projects })
    })
  });

  app.all('/project/delete', function(req, res) {
    db.deleteProject(req.body.id, function(projects) {
      res.json({ projects })
    })
  });

  app.all('/project/board', function(req, res) {
    db.projectTasks(req.body.id, function(tasks) {
      res.json({ tasks })
    })
  });

  app.all('/project/board/task/save', function(req, res) {
    db.saveTask(req.body.task, function(tasks) {
      res.json({ tasks })
    })
  })

  app.all('/project/board/task/delete', function(req, res) {
    db.deleteTask(req.body.task, function(tasks) {
      res.json({ tasks })
    })
  })
}
