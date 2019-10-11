exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          id: 1,
          task_desc: "Lorem Ipsum",
          task_notes: "NASA science is focused on better understanding Earth through the Earth Observing System",
          project_id: 1,
          is_completed: "true"
        },
        {
          id: 2,
          task_desc: "Ipsum Lorem",
          task_notes: "From 1946, the National Advisory Committee for Aeronautics (NACA) had been experimenting with rocket planes",
          project_id: 2,
          is_completed: "false"
        },
        {
          id: 3,
          task_desc: "Iplo Isrem",
          task_notes: "NASA has conducted many manned and unmanned spaceflight programs throughout its history",
          project_id: 3,
          is_completed: "false"
        }
      ]);
    });
};
