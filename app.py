from flask import Flask, render_template
import os  # necesario para leer el puerto de Render

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/bellicenter')
def proyecto_bellicenter():
    return render_template('proyecto_bellicenter.html')  # usa guion bajo

@app.route('/after-effects')
def after_effects():
    return render_template('eff.html')

@app.route('/barberia')
def proyecto_barberia():
    return render_template('barberia.html')

if __name__ == '__main__':
    # Usa el puerto que Render asigna o 5000 para local
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
