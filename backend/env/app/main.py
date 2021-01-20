from flask import Flask, request, jsonify
app = Flask(__name__)

 

# Text Messages
@app.route('/sendText', methods=["POST"])
def sendText():
        request_data = request.get_json()
        print(request_data)
        data = {}
        data["reply"] = "Data Received"
        data["status"] = 'success'
        return jsonify(data)




# Click Events 
@app.route('/productClicked', methods=["POST"])
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
def index():
    return "<h1>Welcome to our server !!</h1>"






