import express from 'express';
import JokesController from '../controller/Jokes';
import VoteController from '../controller/Vote';

const router = express.Router();

router.get('/all-jokes', JokesController.getAllJokes)

router.get('/jokes/:jokes_id', JokesController.getJokes)

// [Vote]

router.get('/get-all-vote', VoteController.getAllVote)

router.post('/post-new-vote', VoteController.postVote)

router.delete('/delete-all', VoteController.deleteAll)

export = router;
