DROP SCHEMA IF EXISTS johnglay cascade;
CREATE SCHEMA johnglay;

CREATE TABLE johnglay.todolist (
      todo_id uuid,
      todo varchar(300),
      created_date TIMESTAMP WITH TIME ZONE,
      modified_date TIMESTAMP WITH TIME ZONE,
      PRIMARY KEY (todo_id)
);