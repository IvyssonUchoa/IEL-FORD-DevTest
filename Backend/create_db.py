import sqlite3

# Crie e conecta-se ao banco de dados
conn = sqlite3.connect("db/company.db")
cursor = conn.cursor()

# Cria a tabela de funcionários "workers"
cursor.execute(
    """
    CREATE TABLE IF NOT EXISTS workers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        cargo TEXT NOT NULL,
        salario REAL NOT NULL,
        data_admissao TEXT NOT NULL
    );
    """
)


# Dados dos funcinarios
workers = [
    ('Alice', 'Desenvolvedora', 6000.00, '2020-01-15'),
    ('Bruno', 'Gerente', 30000.00, '2018-03-01'),
    ('Carlos', 'Analista', 8000.00, '2021-06-10'),
    ('Diana', 'Desenvolvedora', 7500.00, '2019-05-20'),
    ('Eva', 'Designer', 9000.00, '2022-02-25'),
    ('Faythe', 'Gerente de Projetos', 25000.00, '2017-07-30'),
    ('Gabriel', 'Desenvolvedora', 6200.00, '2021-04-15'),
    ('Heidi', 'Analista de Dados', 9500.00, '2020-08-10'),
    ('Ivan', 'Tester', 4500.00, '2020-12-05'),
    ('Judy', 'Desenvolvedora', 7000.00, '2019-10-25'),
    ('Karla', 'Analista', 12000.00, '2021-02-20'),
    ('Liam', 'Gerente', 28000.00, '2018-11-11'),
    ('Mariana', 'Desenvolvedora', 5700.00, '2019-03-30'),
    ('Nina', 'Designer', 11000.00, '2021-05-05'),
    ('Oscar', 'Desenvolvedor', 6400.00, '2020-06-15'),
    ('Peggy', 'Gerente de Marketing', 27000.00, '2016-09-01'),
    ('Quentin', 'Analista de Negócios', 10500.00, '2021-01-10'),
    ('Rupert', 'Tester', 4200.00, '2020-11-20'),
    ('Sybil', 'Desenvolvedora', 6200.00, '2019-12-15'),
    ('Trent', 'Gerente de Vendas', 29000.00, '2017-05-25'),
    ('Uma', 'Desenvolvedora', 6800.00, '2018-04-01'),
    ('Victor', 'Designer', 9600.00, '2021-03-20'),
    ('Walter', 'Analista de Dados', 8800.00, '2020-07-30'),
    ('Xena', 'Gerente de Projetos', 25000.00, '2016-08-15'),
    ('Yara', 'Desenvolvedora', 7300.00, '2021-09-10'),
    ('Zico', 'Tester', 4600.00, '2020-10-05'),
    ('André', 'Desenvolvedor', 5900.00, '2020-01-12'),
    ('Betty', 'Analista', 8500.00, '2021-06-10'),
    ('Clara', 'Gerente de Marketing', 26000.00, '2019-07-20'),
    ('David', 'Designer', 9500.00, '2022-02-25'),
    ('Eva', 'Desenvolvedora', 6400.00, '2020-04-15'),
    ('Finley', 'Analista de Sistemas', 8000.00, '2021-11-10'),
    ('Gina', 'Tester', 4700.00, '2020-12-05'),
    ('Harry', 'Desenvolvedor', 5800.00, '2019-10-25'),
    ('Isabel', 'Gerente', 27000.00, '2018-11-11'),
    ('Jack', 'Analista', 10200.00, '2021-02-20'),
    ('Lara', 'Desenvolvedora', 7500.00, '2019-03-30'),
    ('Mia', 'Designer', 9800.00, '2021-05-05'),
    ('Nate', 'Analista', 9900.00, '2021-06-15'),
    ('Olga', 'Gerente de Projetos', 24000.00, '2016-09-01'),
    ('Pete', 'Desenvolvedor', 7000.00, '2020-08-10'),
    ('Quinn', 'Analista de Negócios', 11400.00, '2021-01-10'),
    ('Ryan', 'Tester', 4200.00, '2020-11-20'),
    ('Sam', 'Desenvolvedora', 6500.00, '2019-12-15'),
    ('Tina', 'Gerente de Vendas', 28000.00, '2017-05-25'),
    ('Uma', 'Desenvolvedora', 6600.00, '2018-04-01'),
    ('Victor', 'Designer', 9700.00, '2021-03-20'),
    ('Wendy', 'Analista de Dados', 8900.00, '2020-07-30')
]

# Insere os dados na tabela
cursor.executemany(
    """ INSERT INTO workers (nome, cargo, salario, data_admissao) VALUES (?, ?, ?, ?) """,
     workers
)

print("Dados adicionados com sucesso!")

# Fecha a conexão com o banco de dados
conn.commit()
conn.close()