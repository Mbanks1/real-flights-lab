const Flight = require('../models/flight');

module.exports = {
 index,
 new: newFlight,
 create

}



function newFlight(req, res){
    res.render('flights/new', {title: 'Add Flight', err: 'Error!'})
};


function create(req, res) {
    const addFlight = new Flight(req.body);
    addFlight.save(function(err){
        res.redirect('/flights')

    })
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights: flights, title: 'Prev Flights'})
    })
};
    




