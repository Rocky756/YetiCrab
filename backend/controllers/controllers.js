const RequestModel = require('../models/requestmodel');

const getRequest = async (req,res) => {
  let requests = await RequestModel.find().lean();
  requests.forEach((req, index) => {
    // const hours = `${req.datetime.getHours()}:`;
    const hours = (req.datetime.getHours()) > 9 ? `${req.datetime.getHours()}:` : `0${req.datetime.getHours()}:`;
    // const minutes = `${req.datetime.getMinutes()} `;
    const minutes = (req.datetime.getMinutes()) > 9 ? `${req.datetime.getMinutes()}` : `0${req.datetime.getMinutes()}`;
    // const day = `${req.datetime.getDate()}.`;
    const day = (req.datetime.getDate()) > 9 ? `${req.datetime.getDate()}.` : `0${req.datetime.getDate()}.`;
    const month = (req.datetime.getMonth()+1) > 9 ? `${req.datetime.getMonth()+1}` : `0${req.datetime.getMonth()+1}.`;
    const year = `${req.datetime.getFullYear()}`;
    req.datetime = day + month + year + ', время: ' + hours + minutes;
  })
  res.json({ requests });
}

const sortNewDate = async (req, res) => {
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
  };

const sortOldDate = async (req, res) => {
  console.log('Зашел в getrequests');
  let requests = await RequestModel.find().lean();
  requests.sort((a, b) => b.datetime - a.datetime);
  requests.forEach((req, index) => {
    const hours = (req.datetime.getHours()) > 9 ? `${req.datetime.getHours()}:` : `0${req.datetime.getHours()}:`;
    const minutes = (req.datetime.getMinutes()) > 9 ? `${req.datetime.getMinutes()}` : `0${req.datetime.getMinutes()}`;
    const day = `${req.datetime.getDate()}.`;
    const month = (req.datetime.getMonth()+1) > 9 ? `${req.datetime.getMonth()+1}` : `0${req.datetime.getMonth()+1}.`;
    const year = `${req.datetime.getFullYear()}`;
    req.datetime = day + month + year + ', время: ' + hours + minutes;
  })
  res.json({ requests });
}

const search = async(req, res) => {
  let { text } = req.body;
  text = text.toLowerCase();
  console.log(text);
  let requests = await RequestModel.find().lean();
  const validArr = [];
  
  // поиск по номеру заявки.
  for (let i = 0; i < requests.length; i++) {
    if (text == requests[i].reqnum) {
      validArr.push(requests[i]);
    }
  }
  // поиск по названию компании клиента.
  for (let i = 0; i < requests.length; i++) {
    if (text.length >= 3 && requests[i].company_name.toLowerCase().includes(text)) {
        validArr.push(requests[i]);
    }
  }
  // поиск по ФИО перевозчика.
  for (let i = 0; i < requests.length; i++) {
    if (text.length >= 3 && requests[i].carrier_name.toLowerCase().includes(text)) {
        validArr.push(requests[i]);
    }
  }
  // поиск по телефону.
  for (let i = 0; i < requests.length; i++) {
    if (text == requests[i].tel.toLowerCase()) {
      validArr.push(requests[i]);
    }
  }
  // поиск по комментарию.
  for (let i = 0; i < requests.length; i++) {
    if (text.length >= 3 && requests[i].comment.toLowerCase().includes(text)) {
        validArr.push(requests[i]);
    }
  }
  // поиск по ATI.
  for (let i = 0; i < requests.length; i++) {
    if (text == requests[i].ati.toLowerCase()) {
      validArr.push(requests[i]);
    }
  }
  res.json({ requests: validArr });
}

const addReq = async(req, res) => {
  const { clientState: company_name, carrierState: carrier_name, phoneState: tel, commentState: comment, atiState: ati } = req.body;
  console.log(company_name, carrier_name, tel, comment, ati);
  const datetime = new Date();
  // Проверяем наибольший номер заявки в базе и у новой создаем +1.
  const arr = await RequestModel.find().lean();
  const numArr = [];
  arr.forEach((el => numArr.push(el.reqnum)));
  const reqnum = (Math.max.apply( Math, numArr )) + 1;

  const request = await new RequestModel({ reqnum, datetime, company_name, carrier_name, tel, comment, ati });
  await request.save();
  const requests = await RequestModel.find().lean();
  requests.forEach((req, index) => {
    const hours = (req.datetime.getHours()) > 9 ? `${req.datetime.getHours()}:` : `0${req.datetime.getHours()}:`;
    const minutes = (req.datetime.getMinutes()) > 9 ? `${req.datetime.getMinutes()}` : `0${req.datetime.getMinutes()}`;
    const day = (req.datetime.getDate()) > 9 ? `${req.datetime.getDate()}.` : `0${req.datetime.getDate()}.`;
    const month = (req.datetime.getMonth()+1) > 9 ? `${req.datetime.getMonth()+1}` : `0${req.datetime.getMonth()+1}.`;
    const year = `${req.datetime.getFullYear()}`;
    req.datetime = day + month + year + ', время: ' + hours + minutes;
  })
  res.json({ requests });
}

const deleteReq = async (req, res) => {
  try {
    const { _id } = req.params;
    await RequestModel.findByIdAndDelete(_id);
    res.json({ removed: true });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

const editReq = async(req, res) => {
  const { _id } = req.params;
  const { clientState: company_name, carrierState: carrier_name, phoneState: tel, commentState: comment, atiState: ati } = req.body;
  console.log(_id, company_name, carrier_name, tel, comment, ati);
  const request = await RequestModel.findByIdAndUpdate(_id, { company_name, carrier_name, tel, comment, ati });
  const requests = await RequestModel.find().lean();
  res.json({ requests });
}

module.exports = {
  getRequest, sortNewDate, sortOldDate, search, addReq, deleteReq, editReq
};
