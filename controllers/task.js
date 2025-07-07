const taskModel = require("../models/task")
const errorMsg = "unexpected error";

const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, status, priority } = req.body;

    if (!title || !description || !dueDate) {
      return res.status(404).json({
        msg: "All fileds are required",
      });
    }

    const task = await taskModel.create({
      title,
      description,
      dueDate,
      status,
      priority,
      user: req.user._id,
    });

    res.status(200).json({
      msg: "task is created successfuly",
      task: task,
    });
  } catch (error) {
    console.log(error, errorMsg);
    res.status(404).json({
      msg: "error",
    });
  }
};



const fetchAllTask = async(req, res) => {
  try {
    const userId = req.user._id;

    const task = await taskModel.find({user: userId});

    if(!task) {
      return res.status(404).json({
        msg: "this is task is nothing"
      })
    }

    res.status(200).json({
      msg: "task fetch successfully",
      task: task
    })
  } catch (error) {
    console.log(error, errorMsg)
  }
}




module.exports = {createTask, fetchAllTask};