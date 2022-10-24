const express = require("express");
const mongoose = require("mongoose");



const Tasks = require("../db/Tasks");



//The express.Router() function is used to create a new router object. 
//This function is used when you want to create a new router object in your program to handle requests.
const router = express.Router();


//add tasks
router.post("/tasks",  (req, res) => {
 // let Tasks = new Tasks(null);

  let tasks = new Tasks({projectId:req.body.projectId,msg:req.body.msg,state:req.body.state,dateOfPosting:req.body.dateOfPosting,deadline:req.body.deadline
   
  });
  let newData=[{projectId:0,tasks:[]}]

  tasks
    .save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      //Whenever any user sends an invalid request to the server, 
      //the server immediately reports it and generates an HTTP based 400 bad request error.
      res.status(400).json(err);
    });
});


/*
router.get('/project', async (req, res) => {


  try {
    
    let studentsLi = [{
      Question: '',
      answerOptions :[
        {
          answerText : ''
        }
      ]
    }]
    
    
    const classes = await QuestionSchema.find({});
    res.send({classes});
   


  } catch(err) {
    res.status(400).send({ error: err });
  }
});
*/
router.delete('/:id', async (req, res) => {
  try {
    const removeTasks = await Tasks.findByIdAndRemove(req.params.id);
     res.send({ message: 'The task was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
}); 

router.get('/group', async (req, res) => {
  try {
    const task = await Tasks.find({});
    hash = task.reduce((p,c) => (p[c.projectId] ? p[c.projectId].push(c) : p[c.projectId] = [c],p) ,{}),
    newData = Object.keys(hash).map(k => ({projectId: k, taskss: hash[k]}));
    res.send({ newData })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);
    res.send({ task });
  } catch (err) {
    res.status(404).send({ message: 'task not found !' });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The student was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const task = await Tasks.find({});
    res.send({ task })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});
module.exports = router;
