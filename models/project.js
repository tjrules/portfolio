const db = require('../db/config');
//const pg = require('../db/index');

const Project = {};

Project.findAll = id => {
    return db.query(`
    SELECT *, projects.id FROM projects
    JOIN users On projects.user_id = users.id
    WHERE users.id = $1
`, id)
};

Project.findById = id => {
    return db.oneOrNone(`SELECT * FROM projects WHERE id = $1`, [id]);
};

Project.create = (projects) => {
    return db.one(`
    INSERT INTO projects (title, description, image_url, link, user_id) VALUES (1$, 2$, 3$) RETURNING *
`, [projects.title, projects.description, projects.image_url, projects.link, projects.user_id]);
};

Project.update = (projects, id) => {
    return db.oneOrNone(
    `
    UPDATE projects SET 
    title = $1, 
    description = $2,
    image_url = $3,
    link = $4,
    user_id = $5
    WHERE id = $6
    RETURNING *
    
`, [projects.title, projects.description, projects.image_url, projects.link, projects.user_id, id]);
};

Project.delete = id => {
    return db.none(
    `
    DELETE FROM projects
    WHERE id = $1
`, [id]);
};

module.exports = Project;