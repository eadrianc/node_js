const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const task = require('./models/task')
const Task = require('./models/task')

const app = express()
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './task-list.db' })
const tasks = Task(sequelize, DataTypes)


app.use(express.urlencoded())
// We need to parse JSON coming from requests
app.use(express.json())

// List tasks
app.get('/tasks', async (req, res) => {
const allTasks = await tasks.findAll()

  res.send({ allTasks })
})

// Create task


app.post("/tasks", async (req, res) => {
 // const taskId = req.params.id
 console.log(req.body)
      await tasks.create({description: req.body.description, done: req.body.done})
  res.json({"ID": this.lastID})
})

// Show task
app.get('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  const task = await tasks.findByPk(taskId)

  res.send({id: task.id, description: task.description, done: task.done, createdAt: task.createdAt, updatedAt: task.updatedAt})
})

// Update task
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Updating task', taskId: taskId })
})

// Delete task
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Deleting task', taskId: taskId })
})

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})