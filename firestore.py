# firestore.py

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

def initialize_firestore():
    # Ensure the app is initialized only once
    if not firebase_admin._apps:
        cred = credentials.Certificate('skillzone-ebb44-firebase-adminsdk-r97nz-02793fbf62.json')
        firebase_admin.initialize_app(cred)
    return firestore.client()
