DROP SCHEMA IF EXISTS johnpaul cascade;
CREATE SCHEMA johnpaul;

CREATE TABLE johnpaul.todolist (
      todo_id uuid,
      todo varchar(300),
      created_date TIMESTAMP WITH TIME ZONE,
      modified_date TIMESTAMP WITH TIME ZONE,
      PRIMARY KEY (todo_id)
);