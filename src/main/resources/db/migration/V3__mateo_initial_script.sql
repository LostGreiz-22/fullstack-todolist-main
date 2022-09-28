DROP SCHEMA IF EXISTS mateo cascade;
CREATE SCHEMA mateo;

CREATE TABLE mateo.todolist (
      todo_id uuid,
      todo varchar(300),
      created_date TIMESTAMP WITH TIME ZONE,
      modified_date TIMESTAMP WITH TIME ZONE,
      PRIMARY KEY (todo_id)
);