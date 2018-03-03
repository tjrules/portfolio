const express = require('express');
const projectsController = require('../controllers/projects-controller');
const projectsRouter = express.Router();

projectsRouter.get('/', projectsController.index);
projectsRouter.post('/', projectsController.create);
projectsRouter.get('/new', projectsController.new);
projectsRouter.get('/:id', projectsController.show);
projectsRouter.get('/edit/:id', projectsController.edit);
projectsRouter.put('/:id', projectsController.update);
projectsRouter.delete('/:id', projectsController.delete);

module.exports = projectsRouter;