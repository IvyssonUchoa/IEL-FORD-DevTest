import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

DB_PATH = "db/company.db"


@app.route("/unique_roles", methods=['GET'])
def unique_roles():
    """
        Identifica os cargos e a quantidade de funcionários em cada cargo.
        - Retorna uma lista JSON com os campos cargo e a quantidade de funcionários.
    """

    try:
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            # Executa a consulta SQL
            cursor.execute(
                """
                SELECT DISTINCT cargo, count(*) 
                FROM workers 
                GROUP BY cargo
                ORDER BY 2 DESC;
                """
            )
            data = cursor.fetchall()

            # Converte os resultados em uma lista de dicionários
            results = [{'cargo':row[0], 'quant': row[1]} for row in data]

        # Retorna o resultado para o endpoint
        return jsonify(results), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400
    

@app.route("/bigger_salaries", methods=['GET'])
def bigger_salaries():
    """
        Identifica os 5 maiores salários da empresa.
        - Retorna uma lista JSON com os campos nome, cargo e salário.
    """

    try:
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()

            cursor.execute( # Executa a consulta SQL
                """
                SELECT nome, cargo, salario
                FROM workers
                ORDER BY salario DESC
                LIMIT 5;
                """
            )
            data = cursor.fetchall()

            # Converte os resultados em uma lista de dicionários
            results = [{'nome':row[0], 'cargo': row[1], 'salario': row[2]} for row in data]

        # Retorna o resultado para o endpoint
        return jsonify(results), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route("/lower_salaries", methods=['GET'])
def lower_salaries():
    """
        Identifica os 5 menores salários da empresa.
        - Retorna uma lista JSON com os campos nome, cargo e salário.
    """

    try:
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()

            cursor.execute( # Executa a consulta SQL
                """
                SELECT nome, cargo, salario
                FROM workers
                ORDER BY salario ASC
                LIMIT 5;
                """
            )
            data = cursor.fetchall()

            # Converte os resultados em uma lista de dicionários
            results = [{'nome':row[0], 'cargo': row[1], 'salario': row[2]} for row in data]

        # Retorna o resultado para o endpoint
        return jsonify(results), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400
    

@app.route("/avg_salary", methods=['GET'])
def avg_salary():
    """
        Calcula a media salarial de cada cargo.
        - Retorna uma lista JSON com os campos cargo e media.
    """

    try:
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()

            cursor.execute( # Executa a consulta SQL
                """
                SELECT cargo, ROUND(AVG(salario), 2)
                FROM workers
                GROUP BY cargo
                ORDER BY 2 DESC;
                """
            )
            data = cursor.fetchall()

            # Converte os resultados em uma lista de dicionários
            results = [{'cargo':row[0], 'media': f"{row[1]:.2f}"} for row in data]

        # Retorna o resultado para o endpoint
        return jsonify(results), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400
    

@app.route("/highest_per_role", methods=['GET'])
def highest_per_role():
    """
        Identifica os funcionários com os maiores salários por cargo.
        - Retorna uma lista JSON com os campos nome, cargo e salário.
    """

    try:
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()

            cursor.execute( # Executa a consulta SQL
                """ 
                SELECT workers.nome, workers.cargo, workers.salario
                FROM (
                        SELECT cargo, MAX(salario) AS 'salario'
                        FROM workers
                        GROUP BY cargo
                    ) AS 'data'
                    LEFT JOIN workers ON workers.salario = data.salario
                        AND workers.cargo = data.cargo
                ORDER BY workers.salario DESC;
                """
            )
            data = cursor.fetchall()

            # Converte os resultados em uma lista de dicionários
            results = [{'nome':row[0], 'cargo': row[1], 'salario':row[2]} for row in data]

        # Retorna o resultado para o endpoint
        return jsonify(results), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)