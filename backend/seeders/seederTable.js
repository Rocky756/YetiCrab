const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const RequestModel = require('../models/requestmodel')
const connect = require('../db/connect');
const dbUrl = 'mongodb+srv://Rocky:1234@cluster0.f9f81.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function main() {
  await mongoose.connect(dbUrl);

const requests = [
  {
    reqnum: 001,
    datetime: new Date('2021-08-30T15:24:00'),
    company_name: "Богемский хрусталь",
    carrier_name: 'Иванов Сергей Викторович',
    tel: '8-952-125-45-65',
    comment: 'Хрупкий груз',
    ati: '12345'
  },
  {
    reqnum: 002,
    datetime: new Date('2021-08-29T11:01:00'),
    company_name: "Рога и копыта",
    carrier_name: 'Суханов Алексей Валерьевич',
    tel: '8-912-454-44-12',
    comment: 'Племенной скот',
    ati: '12346'
  },
  {
    reqnum: 003,
    datetime: new Date('2021-08-28T13:46:00'),
    company_name: "Ленинград",
    carrier_name: 'Маленков Георгий Андреевич',
    tel: '8-965-749-01-32',
    comment: 'Музыкальная техника',
    ati: '12347'
  },
  {
    reqnum: 004,
    datetime: new Date('2021-08-30T09:31:00'),
    company_name: "ООО Фейерверк",
    carrier_name: 'Кучера Артур Михайлович',
    tel: '8-932-013-45-65',
    comment: 'Пиротехника',
    ati: '12348'
  },
  {
    reqnum: 005,
    datetime: new Date('2021-08-31T16:57:00'),
    company_name: "Мир ткани",
    carrier_name: 'Козлов Николай Эдуардович',
    tel: '8-978-056-47-31',
    comment: 'Ткани',
    ati: '12350'
  },
  
]
await RequestModel.insertMany(requests);
  await mongoose.disconnect();
}

main();
