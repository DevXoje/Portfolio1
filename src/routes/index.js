const router = require('express').Router();

// routes
router.get('/', (req, res) => {
    res.send('Express paginacion');
})

module.exports = router;