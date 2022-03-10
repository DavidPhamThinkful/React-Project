const router = require('express').Router();
const asyncHandler = require('express-async-handler')
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const questionRouter = require('./questions');
const { route } = require('./session.js');
const answerRouter = require('./answers.js')


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/questions',questionRouter)
router.use('/answers', answerRouter)



module.exports = router;
