CREATE DATABASE bugers_db;
use burgers_db;

CREATE TABLE burgerHistory (
    id int (5) auto_increment not null,
    burger_name varchar(150) not null,
    burger_served boolean not null default 0,
    primary key (id)

);
