const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getOneContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('ContactList')
    .collection('contacts')
    .find({ _id: contactId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const getAllContacts = async (req, res) => {
  const result = await mongodb.getDb().db('ContactList').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const createContact = async (req, res) => {
  const result = await mongodb.getDb().db('ContactList').collection('contacts').insertOne(req.body);
  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).send('there was an error');
  }
};

const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('ContactList')
    .collection('contacts')
    .replaceOne({ _id: contactId }, req.body);
  if (result.modifiedCount != 0) {
    res.status(204).send();
  } else {
    res.status(500).send('there was an error');
  }
};

const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('ContactList')
    .collection('contacts')
    .deleteOne({ _id: contactId });
  if (result.deletedCount != 0) {
    res.status(200).send(contactId + 'has been deleted');
  } else {
    res.status(500).send('there was an error');
  }
};

module.exports = { getAllContacts, getOneContact, createContact, updateContact, deleteContact };
