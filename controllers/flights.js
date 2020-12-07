const Flight = require('../models/flight');

module.exports = {
 index,
 new: newFlight,

}


function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights: flights, title: 'Prev Flights'})
    })
};

function newFlight(req, res){
    res.render('flights/new', {title: 'Add Flight', err: 'Error!'})
};

function create(req, res) {
    req.body.newFlight = !!req.body.newFlight
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
      }
      const flight = new Flight(req.body)
      flight.save(function(err) {
        if (err) {
          console.log(err)
          return res.render('flights/new', {err: err})
        }
        console.log(flight)
        res.redirect(`/flights/${flights._id}`)
      })
    };
    





