from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
 

# Text Messages
@app.route('/sendText', methods=["POST"])
@cross_origin()
def sendText():
        request_data = request.get_json()
        print(request_data)
        request_data["Template"]["serverSide"] = True
        data = {}
        data["reply"] = "Data Received"
        data["status"] = 'success'
        return jsonify(request_data)




# Click Events 
@app.route('/productClicked', methods=["POST"])
@cross_origin()
def track():
    if request.method == "POST":
        request_data = request.get_json()
        print(request_data)
        data = {}
        data["reply"] = "Data Received"
        data["status"] = 'success'
        return jsonify(data)


# A welcome message to test our server
@app.route('/')
@cross_origin()
def index():
    return "<h1>Welcome to our server !!</h1>"






