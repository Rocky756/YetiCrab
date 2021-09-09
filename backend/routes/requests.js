
const router = require('express').Router();
const RequestModel = require('../models/requestmodel');
const { getRequest, sortNewDate, sortOldDate, search, addReq, deleteReq, editReq } = require('../controllers/controllers')

// получить все записи
router.get('/getrequests', getRequest);

// получить отсортированные по дате (новейшие) записи
router.get('/sort/datenew', sortNewDate);

// получить отсортированные по дате (старые) записи
router.get('/sort/dateold', sortOldDate);

// ручка поиска.
router.post('/search', search)
  
// добавление записи.
router.post('/add', addReq)

// удалление записи.
router.delete("/delete/:_id", deleteReq);

// редактирование записи.
router.put('/edit/:_id', editReq)



module.exports = router;
