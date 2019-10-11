exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl
          .text("project_name", 128)
          .unique()
          .notNullable();
        tbl.text("project_desc");
        tbl.boolean("is_completed");
      })
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.text("task_desc");
        tbl.text("task_notes");
        tbl.boolean("is_completed");
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      .createTable("resources", tbl => {
        tbl.increments();
        tbl.text("resource_name").notNullable();
        tbl.text("resource_desc");
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("projects")
      .dropTableIfExists("resources")
      .dropTableIfExists("tasks");
  };
  