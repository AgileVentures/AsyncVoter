var express = require('express');
var router = express.Router();

var controller = require('./story.controller');
var voteController = require('../vote/vote.controller')


router.route('/')
  // GET all stories
  .get(controller.allStories)
  // POST a new story
  .post(controller.createStory)

router.route('/:id')
  // GET a specific story
  .get(controller.findById)
  // PUT a size - close votes
  .put(controller.closeVoting)


// TODO: Handle this here, or pass to the votes router??????
router.route('/:storyId/votes')
  // POST a specific vote
  .post(voteController.castVote)

module.exports = router;
