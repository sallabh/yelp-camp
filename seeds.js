// var mongoose = require("mongoose");
// var Campground = require("./models/campground");
// var Comment    = require("./models/comment");

// var data = [
	
// 	{
// 		name : "Yureka Camp",
// 		image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_96,w_1024,h_576,r_0,c_crop,q_60,fl_progressive/w_400,f_auto,c_fit/youreka/Youreka_Nature_Campouts_2018_Tirthan_Campus_4_pdi1bd",
// 		description: "Blah blah blah"
// 	},
	
// 	{
// 		name : "Desert Mesa",
// 		image: "https://www.campamerica.co.uk/images/uploads/images/Private-Camp---Camp-Westmont-1400-x-610.png",
// 		description: "Blah blah blah"
// 	},
// 	{
// 		name : "Desert Mesa",
// 		image: "https://www.campamerica.co.uk/images/uploads/images/Private-Camp---Camp-Westmont-1400-x-610.png",
// 		description: "Blah blah blah"
// 	}	
	
// ];
// function seedDB(){
// 	Campground.remove({},function(err){
// 		if(err){
// 			console.log(err);
// 		}else {
// 			console.log("removed campgrounds");
// 				//add a few campgrounds
// 			data.forEach(function(seed){
// 			Campground.create(seed,function(err,data){
// 			if(err){
// 				console.log(err);
// 			}else{
// 				console.log("added a campground");
// 				//add a comment
// 				Comment.create(
// 					{
// 						text: "This place is great,but i wish there was internet",
// 						author : "Homer"						
// 					},function(err,comment){
// 						if(err){
// 							console.log(err);
// 						}else{
// 							campground.comments.push(comment);
// 							campground.save();
// 							console.log("Creaeted comment");
// 						}							
						
// 					});
// 				}
// 			});
// 		});
// 		}
// 	});	
// }

var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://s-ec.bstatic.com/images/hotel/max1024x768/134/134637061.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Canyon Floor", 
        image: "https://content3.jdmagicbox.com/comp/kullu/u2/9999p1902.1902.170622233009.i3u2/catalogue/kasol-saanjh-kasol-kullu-camp-organisers-3tb6kra-250.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
];

function seedDB(){
   // //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
			
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;