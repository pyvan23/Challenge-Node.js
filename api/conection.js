const router = require('express').Router();

const middlewares = require('../middlewares/tokenRegistrer');
const apiCharacterRouter = require('./api/character');
const apiGenreRouter = require('./api/genre');
const apiMovieRouter = require('./api/movieSerie');
const apiUsersRouter = require('./api/user');


router.use('/characters', middlewares.checkToken, apiCharacterRouter);
router.use('/movies', middlewares.checkToken, apiMovieRouter);
router.use('/auth', apiUsersRouter);



module.exports = router;