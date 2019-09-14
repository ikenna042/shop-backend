const express = require('express');
const router = express.Router();

const stuffCntrl = require('../controllers/stuff');

router.post('/', stuffCntrl.createThing);
router.get('/', stuffCntrl.getAllThings);
router.get('/:id', stuffCntrl.getOneThing);
router.put('/:id', stuffCntrl.updateThing);
router.delete('/:id', stuffCntrl.deleteThing);

module.exports = router;