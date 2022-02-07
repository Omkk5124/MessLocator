const router = require('express').Router();
let Mess = require('../models/mess.models');


router.route('/').get((req, res) => {
  Mess.find()
  .then(messes => res.json(messes))
  .catch(err => res.status(400).json('Error: ' + err));
  // .then(function(mess){
  //   JSON.stringify(mess)
  //   console.log(mess)
  //   // res.render({ListOfMess},{Messes:mess})
  //   // {mess.map(fun1)}
  // })
  
});


router.route('/register').post((req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const phone = Number(req.body.phone);
  const clgName = req.body.clgName;
  const link = req.body.link;

  const newMess = new Mess({
    name,
    address,
    phone,
    clgName,
    link,
  });

  newMess.save()
  .then(() => res.json('Mess added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Mess.findById(req.params.id)
  .then(mess => res.json(mess))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post(async (req, res) => {
  try {
    const phone = req.body.phone;
    const userName =  await Mess.findOne({phone:phone}) ;
    res.status(201).redirect('localhost:3000/mess');
    res.send(userName);
    console.log(userName);
    res.status(201).render('home')
  } catch (error) {
    console.log("Invalid");
    res.status(400).send("invalid Username");
    
  }

  // Mess.findOne(req.body.phone)
  // .then(mess => res.json(mess))
  // .catch(err => res.status(400).json('Error: ' + err));

});



router.route('/:id').delete((req, res) => {
  Mess.findByIdAndDelete(req.params.id)
    .then(() => res.json('Mess deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Mess.findById(req.params.id)
    .then(mess => {
        mess.name = req.body.name;
        mess.address = req.body.address;
        mess.phone = Number(req.body.phone);
        mess.clgName = req.body.clgName;

      mess.save()
        .then(() => res.json('Mess updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;