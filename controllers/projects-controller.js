const Project = require('../models/project');
const projectsController {};

projectsController.indes = (req, res) => {
    Project.findAll(req.user.id)
        .then(projects => {
            res.json({
                message: 'we are getting data ',
                projects
            })
        }).catch(err => {
            console.log('houston we have a problem at index controller', err);
            res.status(400).json({
                err
            });
        });
};

projectsController.new = (req, res) => {
    res.render('projects/new');
};

projectsController.create = (req, res) => {
        Project.create({
                title: req.body.title,
                description: req.body.description,
                image_url: req.body.image_url,
                link: req.body.link,
                user_id: req.user.id
            })
            .then(project => {
                    res.json({
                            message: 'data data data',
                            projects
                        })
                        .catch(err => {
                            console.log('problems in the create controlelr', err);
                            res.status(400).json(err);
                        });
                };

projectsController.show = (req, res) => {
            Project.findById(req.params.id)
            .then(projects => {
                res.json({
                    message: 'things working!',
                    posts
                })
            }).catch(err => {
                console.log('show controller self destructing', err);
                res.status(400).json(err);
            });
        };

projectsController.edit = (req, res) => {
    Project.findById(req.params.id)
    .then(projects => {
        res.json({
            message: 'data for edit',
            data:projects
        })
    }).catch(err => {
        console.log('edit controoler has injured many people', err);
        res.status(400).json(err)
    });
};
    
projectsController.update = (req, res) => {
    Project.update({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        link: req.body.link,
        user_id: req.user.id
    }, req.params.id)
    .then( projects => {
        res.json({
            projects
        })
    }).catch(err => {
        console.log('update controller smells funndy', err);
        res.status(400).json(err);
    });
};
    
projectsController.delete = (req, res) => {
    Project.delete(req.params.id)
    .then(project => {
        res.redirect('/')
    })
    .catch(err => {
        res.status(400).json(err);
    });
};
    
module.exports = projectsController;