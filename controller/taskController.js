const Task = require("../models/task");

//get all Tasks
exports.getAll = async(req,res) =>{
    try{
        const tasks = await Task.find();
        res.status(200).json({
            message: "All Task Successfully Get",
            data:tasks,
        });
    }
    catch(error){
        res.status(500).json({
            message:"Failed",
        })
    }
}

//get Single task 
exports.getSingle = async(req,res) =>{
    try{
        const {title: taskTitle} = req.params;
        const task = await Task.findOne({
            title: taskTitle
        })

        if(!task){
            return res.status(404).json({
                message: `No task Created with Title:${taskTitle}`
            });
        } else{
            res.status(200).json({
                message: "Successfully Get the task",
                data:task,
            })
        }
    }
    catch(error){
        res.status(500).json({
            message:'Failed',
        })
    }
}

//Create a task
exports.addTask = async(req,res) =>{

    const newTask = new Task(req.body);
    await newTask.save((error)=>{
        if(error) {
            res.status(500).json({
                message:"error"
            });
        } else {
            res.status(201).json({
                message: "Task Added Succesfully",
            });
        }
    });
}

//edit task
exports.editTask = async (req,res) =>{
    try{
        const {id: taskId} = req.params;
        const task = await Task.findByIdAndUpdate(taskId,req.body, {new:true, runValidators:true});

        if(!task){
            return res.status(404).json({
                message:`No Task with id: ${taskId}`
            });
        } else{
            res.status(200).json({
                message:`Todo with id: ${taskId} updated Successfully`
            })
        }
    }
    catch(error){
        res.status(500).json({
            message:"Failed"
        })
    }
}

//Delete Task
exports.deleteTask = async(req,res) =>{
    try{
        const {id: taskId} = req.params;
        const task = await Task.findByIdAndDelete(taskId);

        if(!task){
            return res.status(404).json({
                message:`No task with id: ${taskId}`
            });
        } else {
            res.status(200).json({
                message:`Task with id:${taskId} deleted Successfully`,
                data:task
            });
        }
    }
    catch(error){
        res.status(500).json({
            message:"Failed"
        })
    }
}