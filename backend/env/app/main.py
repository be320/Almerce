from flask import Flask, request, jsonify
app = Flask(__name__)


@app.route('/productClicked', methods=["POST"])
def track():
    if request.method == "POST":
        request_data = request.get_json()
        print(request_data)
        data = {}
        data["reply"] = "Data Received"
        data["status"] = 'success'
        return jsonify(data)

# Testing Endpoint for frontend
@app.route('/test', methods=["PUT"])
def test():
        print("hello")
        request_data = request.get_json()
        return jsonify(request_data)        

# A welcome message to test our server
@app.route('/')
def index():
    return "<h1>Welcome to our server !!</h1>"



