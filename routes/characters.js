const router = require('express').Router();


const { characters, MovieOrSerie } = require('../dataBase/db');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    
    console.log(req.userId);
    const character = await characters.findAll({
        attributes: ['image', 'name']
    });
    res.json(character);
});

router.post('/', async (req, res) => {
    const character = await characters.create(req.body);
    res.json(character);
});

router.put('/:id', async (req, res) => {
    await characters.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Character updated.' });
});

router.delete('/:id', async (req, res) => {
    await characters.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Character deleted.' })
});




module.exports = router;