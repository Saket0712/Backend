var express = require('express');
var router = express.Router();

var AddData = require('../models/AddData')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/callApi', async(req, res) => {
  try {

      const newData = await new AddData(req.body).save();

      if (newData)
          res.json({ message: "Phone added", success: true })
      else
          throw new Error('an err occured during Adding data')
  } catch (err) {
      console.error(err);
      if (err.message)
          res.json({ message: err.message, data: err, success: false });

      else
          res.json({ message: 'error', data: err, success: false })
  }

})


router.get('/getData', async(req, res) => {
  try {

      const getData = await AddData.find().exec();
      if (getData) {

          res.json({ message: "user data", data: getData, success: true });
      } else {
          throw new Error;
      }
  } catch (err) {
      console.error(err);
      if (err.message)
          res.json({ message: err.message, data: err, success: false });

      else
          res.json({ message: 'error', data: err, success: false })
  }
})


router.delete('/deleteSpecific/:id', async(req, res) => {
    try {
        const deleteSpecific = await AddData.findByIdAndDelete(req.params.id).exec();
        if (deleteSpecific) {
            res.json({ message: "Phone deleted", data: deleteSpecific, success: true });
        } else {
            throw new Error;
        }
    } catch (err) {
        console.error(err);
        if (err.message)
            res.json({ message: err.message, data: err, success: false });

        else
            res.json({ message: 'error', data: err, success: false })
    }
})

module.exports = router;
