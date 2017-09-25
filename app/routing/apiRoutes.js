
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// 

var friendsData = require("../data/friendsData");


// ROUTING
// 

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // 
// Used to display a json of possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

//   Used to handle incoming survey results. Also used to handle the compatibiltiy logic
  app.post("/api/friends", function(req, res) {
    

    if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }
    else {
      friendsData.push(req.body);
      res.json(false);
    }
  });


  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];
   

    console.log(friendsData);
  });
};
