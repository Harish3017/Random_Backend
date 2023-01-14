const Task = require("../models/Task.js");

//get all Tasks
exports.getAll = async(req,res) =>{
    try{
        const tasks = await Task.find();
        res.status(200).json({
            message: "success",
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
                message: "success",
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
exports.create = async(req,res) =>{
    try{
       
        const task = await Task.create(req.body);
        res.status(201).json({
            message: "success",
            data: task
        });
        
    }catch(error){
        console.log(error);
        res.status(400).json({
            message:"Error"
        })
    }
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