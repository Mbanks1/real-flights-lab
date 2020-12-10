const Destination = require('../models/destination');
const Flight = require('../models/flight');


module.exports = {
    new: newDestination,
    create,
    deleteDestination,
}
function newDestination(req, res){
    Destination.find({}, function(err, destinations) {
        res.render('destinations/new', {title: 'Add Destination', destinations})
    })
}  
function create(req, res){
    Destination.create(req.body, function(err, destination){
        res.redirect('/destinations/new')
    })
}


function deleteDestination(req, res){
    Destination.findByIdAndDelete(req.params.id, function(err, destinations){
        res.redirect('/destinations/new')
    })
}

