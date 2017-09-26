

var friendsData = require("../data/friends.js");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

//        the code between the lines has been commented out because it crashed the app:
  // ________________________________________________________________________________

//   Used to handle incoming survey results. Also used to handle the compatibiltiy logic
  // app.post("/api/friends", function(req, res) {
    
    //   var bestMatch = {
    //     name: "",
    //     photo: "",
    //     friendsDifference: 1000
    //   }
   
    // ------- the code stops here: "RefrenceError: req is not defined"-------

    // var userData = req.body;
   
    
    // var userScore = userData.scores;

    //   var userScore = [];
    //   var friends = [];
    //   var differenceArr = [];
    //   var totalDifference = 0;

    //   for(var i = 0; i < userScore; i++) {
        
    //       totalDifference += (parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

    //       differenceArr.push(Math.abs(totalDifference));
    //     }
    //   console.log(differenceArr);
      
  // ________________________________________________________________________________

   // Here we loop through all the friend possibilities in the database.

    // We then loop through all the scores of each friend

    // We calculate the difference between the scores and sum them into the totalDifference
    // totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]))

  
  // clear data from table

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];
   

    console.log(friendsData);
  });
};
