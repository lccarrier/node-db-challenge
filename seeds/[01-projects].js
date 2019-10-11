exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Mars Reconnaissance Orbiter",
          project_desc: "Getting safely to Mars",
          is_completed: "true"
        },
        {
          id: 2,
          project_name: "Mars Global Surveyor",
          project_desc: "Getting quickly to Mars",
          is_completed: "true"
        },
        {
          id: 3,
          project_name: "Mars Odyssey",
          project_desc: "Be the first on Mars",
          is_completed: "true"
        }
      ]);
    });
};

