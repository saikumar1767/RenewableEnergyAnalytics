from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

class EnergyData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(50), db.ForeignKey('user.id'), nullable=False)
    # Energy Consumption column in Units
    hourly_con = db.Column(db.Float, nullable=False)
    daily_con = db.Column(db.Float, nullable=False)
    weekly_con = db.Column(db.Float, nullable=False)
    monthly_con = db.Column(db.Float, nullable=False)
    quarterly_con = db.Column(db.Float, nullable=False)
    halfyearly_con = db.Column(db.Float, nullable=False)
    annually_con = db.Column(db.Float, nullable=False)
    # Energy generation column in Units
    hourly_gen = db.Column(db.Float, nullable=False)
    daily_gen = db.Column(db.Float, nullable=False)
    weekly_gen = db.Column(db.Float, nullable=False)
    monthly_gen = db.Column(db.Float, nullable=False)
    quarterly_gen = db.Column(db.Float, nullable=False)
    halfyearly_gen = db.Column(db.Float, nullable=False)
    annually_gen = db.Column(db.Float, nullable=False)
