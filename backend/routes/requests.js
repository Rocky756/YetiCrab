
const router = require('express').Router();
const RequestModel = require('../models/requestmodel');

// получить все записи
router.get('/getrequests', async (req, res) => {
  console.log('Зашел в getrequests');
  let requests = await RequestModel.find().lean();
  requests.forEach((req, index) => {
    // const hours = `${req.datetime.getHours()}:`;
    const hours = (req.datetime.getHours()) > 9 ? `${req.datetime.getHours()}:` : `0${req.datetime.getHours()}:`;
    // const minutes = `${req.datetime.getMinutes()} `;
    const minutes = (req.datetime.getMinutes()) > 9 ? `${req.datetime.getMinutes()}` : `0${req.datetime.getMinutes()}`;
    const day = `${req.datetime.getDate()}.`;
    const month = (req.datetime.getMonth()+1) > 9 ? `${req.datetime.getMonth()+1}` : `0${req.datetime.getMonth()+1}.`;
    const year = `${req.datetime.getFullYear()}`;
    req.datetime = day + month + year + ', время: ' + hours + minutes;
  })
  res.json({ requests });
  });

// получить отсортированные по дате (новейшие) записи
router.get('/getrequests/datenew', async (req, res) => {
  console.log('Зашел в getrequests');
  let requests = await RequestModel.find().lean();
  requests.sort((a, b) => a.datetime - b.datetime);
  requests.forEach((req, index) => {
    // const hours = `${req.datetime.getHours()}:`;
    const hours = (req.datetime.getHours()) > 9 ? `${req.datetime.getHours()}:` : `0${req.datetime.getHours()}:`;
    // const minutes = `${req.datetime.getMinutes()} `;
    const minutes = (req.datetime.getMinutes()) > 9 ? `${req.datetime.getMinutes()}` : `0${req.datetime.getMinutes()}`;
    const day = `${req.datetime.getDate()}.`;
    const month = (req.datetime.getMonth()+1) > 9 ? `${req.datetime.getMonth()+1}` : `0${req.datetime.getMonth()+1}.`;
    const year = `${req.datetime.getFullYear()}`;
    req.datetime = day + month + year + ', время: ' + hours + minutes;
  })
  res.json({ requests });
  });

// получить отсортированные по дате (старые) записи
  router.get('/getrequests/dateold', async (req, res) => {
    console.log('Зашел в getrequests');
    let requests = await RequestModel.find().lean();
    requests.sort((a, b) => b.datetime - a.datetime);
    requests.forEach((req, index) => {
      // const hours = `${req.datetime.getHours()}:`;
      const hours = (req.datetime.getHours()) > 9 ? `${req.datetime.getHours()}:` : `0${req.datetime.getHours()}:`;
      // const minutes = `${req.datetime.getMinutes()} `;
      const minutes = (req.datetime.getMinutes()) > 9 ? `${req.datetime.getMinutes()}` : `0${req.datetime.getMinutes()}`;
      const day = `${req.datetime.getDate()}.`;
      const month = (req.datetime.getMonth()+1) > 9 ? `${req.datetime.getMonth()+1}` : `0${req.datetime.getMonth()+1}.`;
      const year = `${req.datetime.getFullYear()}`;
      req.datetime = day + month + year + ', время: ' + hours + minutes;
    })
    res.json({ requests });
    });

router.post('/add', async(req, res) => {
  const { nameState: name, dateState, salaryState: salary } = req.body;
  const parts = dateState.split('-');
  const dateBirth = new Date(parts[0], parts[1] - 1, parts[2]); 
  const worker = await new workerModel({ name, dateBirth, salary });
  await worker.save();
  let workers = await workerModel.find().lean();
  let taxValue = 0.13;
  // console.log(allWorkers);
  const currentTime = new Date(); // текущая дата
  for (let i=0; i < workers.length; i++) {
    workers[i].dateBirth = Math.floor((currentTime - workers[i].dateBirth) / 31536000000);
    workers[i].tax = parseInt(workers[i].salary) * taxValue;
    workers[i].salary = parseInt(workers[i].salary) + 'р';
  }
  // console.log(workers);
  res.json({ workers });
})

router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await workerModel.findByIdAndDelete(_id);
    res.json({ removed: true });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



module.exports = router;
