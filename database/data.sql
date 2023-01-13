create table users (
    id serial primary key,
    user_name varchar(50) not null,
    phone varchar(12) not null,
    email varchar(50) not null,
    password varchar(200) not null,
    date timestamptz default current_timestamp
);

create table todos (
    id serial primary key,
    user_id int references users(id),
    todo_value varchar(100) not null,
    date timestamptz default current_timestamp
);

