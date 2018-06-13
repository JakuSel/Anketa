const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Vote = require('../models/voting');


router.get("/", (req, res, next) =>{
    
    res.render("voting");   
});

router.post("/", (req, res, next)=>{
    const newVote = {
        os: req.body.os,
        points: 1
      };
      new Vote(newVote).save().then(vote => {
        res.redirect("/vote");
      });
});

router.get("/vote", (req, res, next) =>{
    Vote.find({os:'Android'}).count().then((android) => { 
        Vote.find({os:'iOS'}).count().then((ios) => { 
            Vote.find({os:'Windows'}).count().then((windows) => { 
                Vote.find({os:'Other'}).count().then((others) => {                                        
                    res.render('vote', {
                        android:android,
                        ios:ios,
                        windows:windows,
                        others:others
                    }); 
                });
            });
        });   
    });
});

module.exports = router;