const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getProjectsById,
  getTasks,
  getResources,
  addProjects,
  addTasks,
  addResources
};

function getProjects() {
  return db("projects");
}

function getProjectsById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getTasks(id) {
  return db("projects")
    .join("tasks", "projects.id", "tasks.project_id")
    .where("projects.id", id)
    .select(
      "projects.project_name",
      "projects.project_desc",
      "tasks.task_desc",
      "tasks.task_notes",
      "tasks.is_completed"
    )
    .then(tasks => {
      return tasks;
    });
}

function getResources(id) {
  return db("projects")
    .join("resources", "projects.id", "resources.project_id")
    .where("projects.id", id)
    .select("projects.id", "resources.resource_name", "resources.resource_desc")
    .then(resources => {
      return resources;
    });
}

function addProjects(project, id) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getProjectsById(ids[0]);
    });
}

function addResources(resource, id) {
  return db("resources")
    .insert(resource)
    .then(ids => {
      return getProjectsById(ids[0]);
    });
}

function addTasks(task, id) {
  return db("tasks")
    .insert(task)
    .then(ids => {
      return getProjectsById(ids[0]);
    });
}
