const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const Investment = require('../models/Investment');

// @route   GET api/investments
// @desc    Get all user's investments
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const investments = await Investment.find({ user: req.user.id }).sort({
      startDate: -1
    });
    res.json(investments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/investments
// @desc    Add new investment
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('type', 'Investment type is required').not().isEmpty(),
      check('name', 'Investment name is required').not().isEmpty(),
      check('amount', 'Amount is required').not().isEmpty(),
      check('startDate', 'Start date is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      type,
      name,
      amount,
      startDate,
      maturityDate,
      expectedReturns,
      status
    } = req.body;

    try {
      const newInvestment = new Investment({
        type,
        name,
        amount,
        startDate,
        maturityDate,
        expectedReturns,
        status,
        user: req.user.id
      });

      const investment = await newInvestment.save();
      res.json(investment);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/investments/:id
// @desc    Update investment
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const {
    type,
    name,
    amount,
    startDate,
    maturityDate,
    expectedReturns,
    status
  } = req.body;

  const investmentFields = {};
  if (type) investmentFields.type = type;
  if (name) investmentFields.name = name;
  if (amount) investmentFields.amount = amount;
  if (startDate) investmentFields.startDate = startDate;
  if (maturityDate) investmentFields.maturityDate = maturityDate;
  if (expectedReturns) investmentFields.expectedReturns = expectedReturns;
  if (status) investmentFields.status = status;

  try {
    let investment = await Investment.findById(req.params.id);

    if (!investment) return res.status(404).json({ msg: 'Investment not found' });

    // Make sure user owns investment
    if (investment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    investment = await Investment.findByIdAndUpdate(
      req.params.id,
      { $set: investmentFields },
      { new: true }
    );

    res.json(investment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/investments/:id
// @desc    Delete investment
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let investment = await Investment.findById(req.params.id);

    if (!investment) return res.status(404).json({ msg: 'Investment not found' });

    // Make sure user owns investment
    if (investment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Investment.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Investment removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 