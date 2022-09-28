DROP SCHEMA IF EXISTS jowel cascade;
CREATE SCHEMA jowel;

CREATE TABLE jowel.todolist (
      todo_id uuid,
      todo varchar(300),
      created_date TIMESTAMP WITH TIME ZONE,
      modified_date TIMESTAMP WITH TIME ZONE,
      PRIMARY KEY (todo_id)
);