const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/stuff');

router.post('/', auth, stuffCtrl.createThing);
router.get('/', auth, stuffCtrl.getAllThings);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, stuffCtrl.updateThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;