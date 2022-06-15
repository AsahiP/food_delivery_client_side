"""model for food_delivery_1"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model, UserMixin):
    """Table for a user"""

__tablename__= "users"

user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
f_name = db.Column(db.String, nullable=False)
l_name = db.Column(db.String, nullable=False)
username= db.Column(db.String, nullable=False)
email = db.Column(db.String, nullable=False)
password = db.Column(db.String, nullable=False)
order_id = db.Column(db.Integer, db.ForeignKey('order.order_id'))

orders = db.relationship("Orders",   backref="users")

def __repr__(self):
    return f'<User user_id = {self.user_id} username = {username}>'

#create food choices
#visual representation of food choices


class FoodChoices(db.Model):
    """Food choices"""

__tablename__ = "food_choices"

food_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
food_name = db.Column(db.String, nullable=False)
ingredients = db.Column(db.String, nullable=False)
description = db.Column(db.String, nullable=False)
meal_course = db.Column(db.String, nullable=False)
main = db.Column(db.Boolean, nullable=False)
side = db.Column(db.Boolean, nullable=False)
extra = db.Column(db.Boolean, nullable=False)
shellfish = db.Column(db.Boolean, nullable=False)
meat_product = db.Column(db.Boolean, nullable=False)
dairy = db.Column(db.Boolean, nullable=False)
nuts = db.Column(db.Boolean, nullable=False)
gluten = db.Column(db.Boolean, nullable=False)



def __repr__(self):
    return f'<FoodChoices food_id = {food_id} food_name = {food_name}>'



class Orders(db.Order):
    """Table for orders"""

__tablename__ = "orders"

order_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
food_id = db.Column(db.Integer, db.ForeignKey('food_choices.food_id'))



def __repr__(self):
    return f'<Orders order_id = {order_id} foods {food_id.food_name}>'

