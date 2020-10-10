drop database anime_sekai;
create Database anime_sekai;
create table usersInfo(
  userInof_id int auto_increment primary key,
  Name varchar(20),
  Email varchar(30),
  UserName varchar(16),
  Password varchar(16)
);
use anime_sekai;