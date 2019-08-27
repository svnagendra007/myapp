var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
res.send('Get route on things.');
});
router.post('/', (req, res) => {
res.send('Post router on things.');
});

//export this router to use in our index.js
module.exports=router;