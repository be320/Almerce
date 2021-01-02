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


# A welcome message to test our server
@app.route('/')
def index():
    return "<h1>Welcome to our server !!</h1>"

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)
