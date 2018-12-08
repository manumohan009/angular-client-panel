'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    clientId: {
      type: String,
      unique: true
    },
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: 'passskdajakdjkadsj'
    },
    email: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    balance: {
      type: Number,
      default: 0
    },
    created: {
      type: Date,
      default: Date.now
    },
    lastModified: {
      type: Date,
      default: Date.now
    }
  }
)

mongoose.model('Client', clientSchema);
