use instagram;

create table user (
id int,
age int,
name varchar(23),
email varchar(23),
follower int,
following int);

select * from user;
INSERT INTO user (id, age, name, email, follower, following) 
VALUES
(1, 23, 'vinayak', 'vinayk@424', 234, 423),
(2, 20, 'sumit', 'sumit@424', 232, 4245),
(3, 22, 'vinayak', 'vinayk@434', 234, 424),
(4, 20, 'kailas', 'kailash@420', 24, 274),
(5, 23, 'vishal', 'vishal@464', 274, 484),
(6, 43, 'virat', 'virat@44', 224, 234),
(7, 43, 'vikas', 'vikas@424', 224, 34);

select * from user;


select id,age,name,email from user order by id asc limit 4;

select min(follower) from user;

select max(follower) from user;

select sum(follower) as total_follower from user;

select avg(follower) as average_follower from user;

select count(follower) as count_follower from user where id=3;

select age, count(age) from user group by age;

select age, max(follower)
FROM user
GROUP BY age
HAVING max(follower)>=200;

use instagram ;

show tables;

SET SQL_SAFE_UPDATES=0;

update user
set name="Govind"
where id=2;

