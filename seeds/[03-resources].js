exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "Rocket",
          resource_desc: "Extra-large",
          project_id: 1
        },
        {
          id: 2,
          resource_name: "Ship",
          resource_desc: "Super fast",
          project_id: 2
        },
        {
          id: 3,
          resource_name: "Fuel",
          resource_desc: "Dangerous AF",
          project_id: 3
        }
      ]);
    });
};

