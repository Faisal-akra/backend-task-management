const taskModel = require("../models/task");
const errorMsg = "Internal Server Error";

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

const fetchAllTask = async (req, res) => {
  try {
    const userId = req.user._id;

    const task = await taskModel.find({ user: userId });

    if (!task) {
      return res.status(404).json({
        msg: "this is task is nothing",
      });
    }

    res.status(200).json({
      msg: "task fetch successfully",
      task: task,
    });
  } catch (error) {
    console.log(error, errorMsg);
  }
};


const fetchSpecificTask = async(req, res) => {
  try {
    const {id} = req.params;

    const task = await taskModel.findById({_id: id, user: req.user._id});

    if(!task) {
      return res.status(404).json({
        msg: "task is not found!"
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


const deleteSpecificTask = async (req, res) => {
  try {
    const { id } = req.params;

    const userId = req.user._id;

    if (!userId) {
      return res.status(404).json({
        msg: "user not found",
      });
    }
    const task = await taskModel.findById(id);
     await taskModel.findOneAndDelete(id, task);

    res.status(200).json({
      msg: "task deleted successfully",
      deletedTask: task,
      
    })
  } catch (error) {
    console.log(error, "error");
  }
};




module.exports = { createTask, fetchAllTask, fetchSpecificTask, deleteSpecificTask };
