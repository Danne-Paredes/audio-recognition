from dotenv import load_dotenv
from os import getenv
from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo

# Load environment variables
load_dotenv()

# Create an instance of Flask
app = Flask(__name__)

# Get the connection string for the database
app.config['MONGO_URI'] = 'mongodb+srv://danne:pass@cluster0.hpipt.mongodb.net/FinalP?retryWrites=true'

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app)

@app.route("/")
def index():
    # Find one record of data from the mongo database
    destination_data = mongo.db.test.find()

    return render_template("index.html", song=destination_data)

# Route that will trigger the scrape function
@app.route("/api")
def api():
    # data1 = mongo["covid_db"].covid.find({}, {'_id': False})
    data= mongo.db.test.find({}, {'_id': False})

    cases = [case for case in data1]
    data = {

    "cases": cases
    }

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)