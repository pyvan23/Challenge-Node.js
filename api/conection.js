const router = require('express').Router();

const middlewares = require('../middlewares/tokenRegistrer');
const usersRouter = require('../routes/userRout');
const characterRouter = require('../routes/characters');
const moviesOrSeriesRouter = require('../routes/moviesOrSeries');
const genderRouter = require('../routes/genders');



router.use('/characters', middlewares.checkToken, characterRouter);
router.use('/movies', middlewares.checkToken, moviesOrSeriesRouter);
router.use('/auth', usersRouter);



module.exports = router;