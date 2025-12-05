create database vinland;
use vinland;

create table usuario (
idusuario int primary key auto_increment,
nome varchar(80) not null,
email varchar(100) unique not null,
senha varchar(50),
dataCadastro timestamp default current_timestamp,
statusUsuario varchar(45),
constraint chk_statusUsuario check (statusUsuario in('ativo', 'inativo'))
);

create table quiz(
idquiz int primary key auto_increment
);

create table tentativa (
  idtentativa int auto_increment,
  fkusuario int not null,
  fkquiz int not null,
  acertos int,
  erros int,
  datatentativa timestamp default current_timestamp,
  foreign key (fkusuario) references usuario(idusuario),
  foreign key (fkquiz) references quiz(idquiz),
  primary key (idtentativa, fkusuario, fkquiz)
);


