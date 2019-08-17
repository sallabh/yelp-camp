var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");
//Index - All camprounds will be here
router.get("/campgrounds",function(req,res){
	//Get all camgrounds from DB
	Campground.find({},function(err,allCampgrounds){
		if(err){
			console.log(err);
		}else{
		 res.render("campgrounds/index",{campgrounds: allCampgrounds });
		}
	});
});

//Create - Wil create new campground here and reroute to index
router.post("/campgrounds",middleware.isLoggedIn,function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var author = {
		id: 		req.user._id,
		username: 	req.user.username
	};
	var newCampground = {name: name,image: image,description: description, author: author};
	Campground.create(newCampground,function(err,newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			console.log(newlyCreated);
			res.redirect("/campgrounds");
		}
	   });
	});

//New - will have form which have action to /campground of method post
router.get("/campgrounds/new",middleware.isLoggedIn,function(req,res){
	res.render("campgrounds/new");
});
//Show - shows more info about one campground

router.get("/campgrounds/:id",function(req,res){
	var id = req.params.id;
Campground.findById(id).populate("comments").exec(function(err,foundCampground){
		if(err){
			console.log(err);
		}else{
			console.log(foundCampground);
			res.render("campgrounds/show",{campground : foundCampground});
		}
	});
		
});

//Edit Campground
router.get("/campgrounds/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
	 		
		Campground.findById(req.params.id,function(err,foundCampground){
				res.render("campgrounds/edit",{campground : foundCampground});
	})});
	
//Update Campground

router.put("/campgrounds/:id",middleware.checkCampgroundOwnership,function(req,res){
	Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updatedCampground){
		if(err){
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds/" + req.params.id)
		}
	});
});

//Destroy campground route

router.delete("/campgrounds/:id",middleware.checkCampgroundOwnership,function(req,res){
	Campground.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/campgrounds" + req.params.id);
		}else {
			res.redirect("/campgrounds");
		}
	});
});



module.exports = router;

