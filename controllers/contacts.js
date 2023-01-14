const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getOneContact = async (req, res, next) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('ContactList').collection('contacts').find({_id: contactId});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
}

const getAllContacts = async (req, res, next) => {
    const result = await mongodb.getDb().db('ContactList').collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

  module.exports = { getAllContacts, getOneContact };