const Router = require('express');
const router = new Router();
const todoController = require('../controllers/todoController');
const { validateTodoPost } = require('../middleware/validateMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, todoController.getTodo);
router.post('/', authMiddleware, validateTodoPost, todoController.postTodo);
router.put('/:id', authMiddleware, todoController.putTodo);
router.delete('/:id', authMiddleware, todoController.deleteTodo);

module.exports = router;
