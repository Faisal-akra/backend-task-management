const taskModel = require("../models/task")

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
    console.log(error, "error");
    res.status(404).json({
      msg: "error",
    });
  }
};

module.exports = createTask;