const mongo = require('mongodb')
const monk = require('monk')
const db = monk('localhost:27017/canban')

const crypto = require('crypto')

module.exports = {
  authUser: function(login, password, callback) {
    const hex = crypto.createHash('md5').update(password).digest("hex");
    db.collection('users').find({ login }, {},
      (err, data) => {
        if (data.length > 0 && data[0].password === hex) {
          callback(true)
        } else {
          callback(false)
        }
      }
    )
  },

  allProjects: function(callback) {
    db.collection('projects')
      .find({}, {}, function(err, data) {
        callback(data)
      }
    )
  },

  allUsers: function(callback) {
    db.collection('users').find({}, {}, (err, data) => {
      callback(data)
    })
  },

  saveProject: function(project, callback) {
    if (project._id) {
      db.collection('projects').update({ _id: project._id }, project, {},
        () => this.allProjects(callback)
      )
    } else {
      db.collection('projects').insert(project, {},
        () => this.allProjects(callback)
      )
    }
  },

  deleteProject: function(id, callback) {
    db.collection('projects').remove({ _id: id }, {},
      () => this.allProjects(callback)
    )
  },

  projectTasks: function(id, callback) {
    db.collection('tasks')
      .find({ projectId: id }, {}, function(err, data) {
        callback(data)
      })
  },

  saveTask: function(newTask, callback) {
    if (newTask._id) {
      db.collection('tasks').update({ _id: newTask._id }, newTask, {},
        () => this.projectTasks(newTask.projectId, callback)
      )
    } else {
      db.collection('tasks').insert(newTask, {},
        () => this.projectTasks(newTask.projectId, callback)
      )
    }
  },

  deleteTask: function(task, callback) {
    db.collection('tasks').remove({ _id: task._id }, {}, () =>
      this.projectTasks(task.projectId, callback)
    )
  }
}
