
"""
food_delivery_1, client side 
Server for food delivery client app, ordering page
"""

import crud
from model import User, connect_to_db
from flask import Flask, render_template, request, flash, session, redirect, jsonify, url_for


@app.route("/create_order")
def create_order():
    """Show the page for creating an order"""
    
    return render_template("create_order.html")


