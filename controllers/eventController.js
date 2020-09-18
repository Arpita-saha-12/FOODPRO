const express=require('express');
var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Event} = require('../models/eventModel');

router.post('/',(req, res) => {
    var insertData = new Event({
        eventname: req.body.eventname,
        bdesc: req.body.bdesc,
        bpic: req.body.bpic,
    });
    insertData.save((err, doc) => {
        if(!err) {res.send(doc); console.log(doc);}
        else {console.log('Error saving data : '+JSON.stringify(err));}
    });
});
//select all the employees
//http://localhost:3000/events
router.get('/',(req, res) => {
    Event.find((err, docs) => {
        if(!err) {res.send(docs);}
        else {console.log('Error in Retriving Event..!'+JSON.stringify(err));}
    });
});
//select a specific events by id
//http://localhost:3000/events
router.get('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record given with id : ${req.params.id}`);

        Event.findById(req.params.id, (err, doc) => {
        if(!err) res.send(doc);
        else console.log('Error Retriving Event Data : ' + JSON.stringify(err));
    });
});
//update the database
router.put('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given Id : ${req.params.id}');
    var updateData={
        eventname: req.body.eventname,
        bdesc: req.body.bdesc,
        bpic: req.body.bpic,
    };
    Event.findByIdAndUpdate(req.params.id, {$set: updateData}, {new: true}, (err, doc) => {
        if(!err) res.send(doc);
        else console.log('Error in Updating Update : '+JSON.stringify(err, undefined, 2));
    });
});
//delete from database
router.delete('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No records with given id : ${req.params.id}');
        Event.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) res.send(doc);
        else console.log('No record with the given Id : '+JSON.stringify(err, undefined, 2));
    });
});

module.exports = router;


