create database sgpimts;
use sgpimts;

create table Tipo_Sistema (
    codigoTipo_Sistema int primary key auto_increment,
    nomeTipo_Sistema varchar(100) not null
);

create table Sistemas (
    codigoSistema int primary key auto_increment,
    nomeSistema varchar(100) not null,
    codigoTipo_Sistema int,
    foreign key (codigoTipo_Sistema) references Tipo_Sistema(codigoTipo_Sistema)
);

create table Clientes (
    codigoCliente int primary key auto_increment,
    nomeCliente varchar(100) not null,
    emailCliente varchar(100),
    telefoneCliente varchar(20),
    codigoSistema int,
    foreign key (codigoSistema) references Sistemas(codigoSistema)
);

create table Triagem (
    codigoTriagem int primary key auto_increment,
    nomeTriagem varchar(100) not null,
    emailTriagem varchar(100),
    telefoneTriagem varchar(20)
);

create table Tipo_Manutencao (
    codigoTipo_Manutencao int primary key auto_increment,
    nomeTipo_Manutencao varchar(100) not null
);

create table Status_Chamado (
    codigoStatus_Chamado int primary key auto_increment,
    nomeStatus_Chamado varchar(100) not null
);

create table Especialidade (
    codigoEspecialidade int primary key auto_increment,
    nomeEspecialidade varchar(100) not null
);

create table Especialistas (
    codigoEspecialista int primary key auto_increment,
    nomeEspecialista varchar(100) not null,
    emailEspecialista varchar(100),
    telefoneEspecialista varchar(20)
);

create table Chamados (
    numeroChamado int primary key auto_increment,
    tituloChamado varchar(100) not null,
    descricaoChamado text,
    codigoStatus_Chamado int,
    codigoCliente int,
    codigoTriagem int,
    codigoSistema int,
    dataAbertura date,
    dataFechamento date,
    codigoTipo_Manutencao int,
    foreign key (codigoStatus_Chamado) references Status_Chamado(codigoStatus_Chamado),
    foreign key (codigoCliente) references Clientes(codigoCliente),
    foreign key (codigoTriagem) references Triagem(codigoTriagem),
    foreign key (codigoSistema) references Sistemas(codigoSistema),
    foreign key (codigoTipo_Manutencao) references Tipo_Manutencao(codigoTipo_Manutencao)
);

create table Especialista_Chamado (
    codigoEspecialista int,
    numeroChamado int,
    primary key (codigoEspecialista, numeroChamado),
    foreign key (codigoEspecialista) references Especialistas(codigoEspecialista),
    foreign key (numeroChamado) references Chamados(numeroChamado)
);

create table Especialidade_Especialista (
    codigoEspecialidade int,
    codigoEspecialista int,
    primary key (codigoEspecialidade, codigoEspecialista),
    foreign key (codigoEspecialidade) references Especialidade(codigoEspecialidade),
	foreign key (codigoEspecialista) references Especialistas(codigoEspecialista)
);

create table Administrador (
    codigoAdm int primary key auto_increment,
    nomeAdm varchar(100) not null,
    emailAdm varchar(100),
    telefoneAdm varchar(20)
);

UPDATE Tipo_Sistema
SET nomeTipo_Sistema = 'ERP'
WHERE codigoTipo_Sistema = '3';

SELECT * FROM Tipo_Sistema; 

insert into Sistemas (nomeSistema,codigoTipo_Sistema) values
('FrancaSOFT',2),
('FRANWMS',3),
('NEGFRAN',1);

SELECT * FROM Sistemas;


INSERT INTO Clientes (nomeCliente, emailCliente, telefoneCliente, codigoSistema)
VALUES 
('João Silva', 'joao.silva@email.com', '11987654321', 1),
('Maria Oliveira', 'maria.oliveira@email.com', '21987654321', 2),
('Carlos Souza', 'carlos.souza@email.com', '31987654321', 3),
('Ana Costa', 'ana.costa@email.com', '41987654321', 2),
('Pedro Pereira', 'pedro.pereira@email.com', '51987654321', 3),
('Juliana Santos', 'juliana.santos@email.com', '61987654321', 1),
('Lucas Fernandes', 'lucas.fernandes@email.com', '71987654321', 1),
('Fernanda Lima', 'fernanda.lima@email.com', '81987654321', 1),
('Rafael Gomes', 'rafael.gomes@email.com', '91987654321', 2),
('Camila Barbosa', 'camila.barbosa@email.com', '11987654322', 1);

SELECT * FROM Clientes;