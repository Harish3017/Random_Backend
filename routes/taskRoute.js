const express = require('express');
const router = express.Router();

const taskController = require('../controller/taskController');

router.route('/')
    .post(
        taskController.create
    )
    .get(
        taskController.getAll
    )
router.route('/:id')
    .patch(
        taskController.editTask
    )
    .delete(
        taskController.deleteTask
    )
router.route('/:title')
    .get(
        taskController.getSingle
    )
module.exports = router;