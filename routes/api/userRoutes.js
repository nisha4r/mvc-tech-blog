const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const { error } = require('console');

router.post('/', async (req, res) => {
    try {
        console.log("body: "+req.body.username);
      const userData = await User.create(req.body);
       console.log(userData);
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
  });
// post login api to verify username and password
router.post('/login', async (req, res) => {
    try {

        //  querying user table with a given email
        const userData = await User.findOne({ where: { email: req.body.email } });
        //  validating user id
        if (!userData) {
            res.status(404).json({ message: 'Login failed. Please try again!' });
            return;
        }
        // to compare the hashed password ,used bcrypt library
        const validPassword = await bcrypt.compare(
            req.body.password, userData.password
        );
        //  validating password , if they do not match, return error message
        if (!validPassword) {
            res.status(400).json({ message: 'Login failed. Please try again!' });
            return;
        }
        // for succesful login
        res.status(200).json({ message: 'Login successful' });
    } catch { error } {
        res.status(500).json(error);
    }



});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

module.exports = router;