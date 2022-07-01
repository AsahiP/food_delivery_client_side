
"""
food_delivery_client_side 
Server for food delivery client app, ordering page
"""

print('+'*50)
print('SERVER')
print('+'*50)
import crud
# from model import User, connect_to_db

from flask import Flask, render_template

app = Flask(__name__)

print('+'*50)
print('MEOWMEOWMEOW')
print('+'*50)

@app.route("/")
def show_index():
    """Display index"""
    print('+'*50)
    print('INDEX')
    print('+'*50)
    return render_template("index.html")


@app.route("/create_order")
def create_order():
    """Display ordering page"""
    print('+'*50)
    print('CREATE ORDER')
    print('+'*50)
    return render_template("create-order.html")

@app.route('/test')
def test_route():
    return render_template("test.html")






if __name__ == "__main__":
    # DebugToolbarExtension(app)
    # connect_to_db(app)
    app.run(debug=True)
    app.run(host="0.0.0.0", debug=True)