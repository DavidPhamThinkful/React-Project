const express = require('express')
const asyncHandler = require('express-async-handler');
const {Answer, Question, User} = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req,res) =>{
    const answers = await Answer.findAll({
        include: {model: User, Question},
        order: [['createdAt', 'DESC']]
    });
    return res.json(answers);
}));

router.post('/', asyncHandler(async (req,res) => {
    const {userId, questionId, answer} = req.body;
    const newAnswer = await Answer.create({
        userId,
        questionId,
        answer
    })
    return res.status(201).json(newAnswer);
}))


router.get('/:id(\\d+)', asyncHandler(async (req,res) =>{
    const answer = await Answer.findByPk(req.params.id);
    return res.json(answer);
}))

router.delete('/:id(\\d+)', asyncHandler(async (req,res) =>{
    const answer = await Answer.findByPk(req.params.id);
    if(answer) {
        await answer.destroy()
    }
    return res.json(answer)
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const { answer } = req.body;
  const newAnswer = await Answer.findByPk(req.params.id);
  if (newAnswer) {
    await newAnswer.update({
      answer
    });
    return res.json(newAnswer);
  } else {
    next();
  }
}))

module.exports = router;
