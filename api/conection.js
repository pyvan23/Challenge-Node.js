const router = require('express').Router();

const middlewares = require('../middlewares/tokenRegistrer');
const apiUsersRouter = require('../routes/userRout');
const characterRouter = require('../routes/characters');
const moviesOrSeriesRouter = require('../routes/moviesOrSeries');
const genderRouter = require('../routes/genders');



router.use('/characters', middlewares.checkToken, characterRouter);
router.use('/movies', middlewares.checkToken, moviesOrSeriesRouter);
router.use('/auth', apiUsersRouter);



module.exports = router;