var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */

var mongoose = require('mongoose');
var Post = mongoose.models.Post;

/* Router of the posts*/
router.get('/posts', function (req, res) {
  Post.find(function(err, posts) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.render('view_posts', {posts: posts});
    }
  });
});

/* Router of the annonces*/
router.get('/exercice3', function (req, res) {

  Post.find(function(err, posts) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.render('exercice3', {posts: posts});
    }
  });
});

router.get('/liste', function (req, res) {

  Post.find(function(err, posts) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.render('liste', {posts: posts});
    }
  });
});

router.post('/exercice3', function (req, res) {

    var   post = new Post(req.body);
        post.save(function (err) {
          if (err) {
            console.log("erreur d'affichage");
          } else {
             res.redirect('/liste');
          }
  });
});

module.exports = router;
