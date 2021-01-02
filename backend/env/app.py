from flask import Flask, request, jsonify
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/productClicked', methods=["POST"])
def track():
    if request.method == "POST":
        request_data = request.get_json()
        print(request_data)
        data = {}
        data["reply"] = "Data Received"
        data["status"] = 'success'
        return jsonify(data)

