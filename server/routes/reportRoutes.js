const express = require('express');
const router = express.Router();
const {
  getAllReports,
  getReportById,
  createReport,
} = require('../controllers/reportController');

router.get('/', getAllReports);
router.get('/:id', getReportById);
router.post('/', createReport);

module.exports = router;
