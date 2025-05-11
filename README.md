# IEL-FORD-DevTest: Dashboard de Análise Salarial com Flask + React

Este projeto é parte de um desafio técnico proposto pela Inova Talentos do IEL Bahia: Consiste na criação de um dashboard interativo para análise de dados salariais fictícios, armazenados em um banco SQLite e expostos via API Flask, com interface React.

## Tecnologias Utilizadas

- **Frontend**:
  - Linguagem JavaScript
  - Framework React, para a interface do usuário
  - Biblioteca react-chartjs-2, para criação de gráficos
  - Axios, para requisições HTTP
  - CSS para estilização

- **Backend**:
  - Linguagem Python
  - Banco de Dados Sqlite
  - Framework Flask, para criação da API
  - Biblioteca sqlite3, para conexão com o banco de dados

## Funcionalidades do Dashboard
- Acompanhamento dos cargos existentes e quantidade de seus respectivos funcionários.
- Exibição do valor médio do salário por cargo.
- Visualização dos maiores salários registrados.
- Visualização dos menores salários registrados.
- Exibição dos funcionários com maiores salários por cargo.

## Dependências

- Python instalado
- Gerenciador de pacotes `pip`
- Node.js instalado
- Gerenciador de pacotes `yarn`

## Como Executar o Projeto
1. Clone o repositório:
    ```
    git clone https://github.com/IvyssonUchoa/IEL-FORD-DevTest.git
    cd IEL-FORD-DevTest
    ```

2. Inicie a API Backend:

    * Navegue até o Backend
        ```
        cd Backend
        ```

    * Crie o banco de dados, caso o arquivo "./Backend/db/company.db" não exista
        ```
        python3 create_db.py
        ```

    * Instale as dependências
        ```
        pip install -r requirements.txt
        ```

    * Inicia a API Flask
        ```
        python3 app.py
        ```
    
    * Acesse os endpoints através do navegador
        - http://localhost:5000/unique_roles : Retorna os cargos e a respectiva quantidade de funcionários.
        - http://localhost:5000/bigger_salaries : Retorna os 5 funcionários com os maiores salários.
        - http://localhost:5000/lower_salaries : Retorna os 5 funcionários com os menores salários.
        - http://localhost:5000/avg_salary : Retorna a média salarial por cargo.
        - http://localhost:5000/highest_per_role : Retorna os funcionários com os maiores salários por cargo.

3. Execute o Frontend

    * Em um novo terminal, navegue até o Frontend
        ```
        cd Frontend
        ```

    * Instale o yarn (caso não possua)
        ```
        npm install -g yarn
        ```

    * Instale as dependências
        ```
        yarn
        ```

    * Inicie a página React
        ```
        yarn dev
        ```

    * Acesse o Dashboard através do navegador
        - http://localhost:5173