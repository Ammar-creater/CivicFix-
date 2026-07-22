const mongoose = require('mongoose');
const Report = require('../models/Report');

// @desc    Get all reports
// @route   GET /api/reports
const getAllReports = async (req, res, next) => {
  try {
    const reports = await Report.find({});
    res.status(200).json(reports);
  } catch (error) {
    next(error);
  }
};

// @desc    Get report by ID
// @route   GET /api/reports/:id
const getReportById = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400);
      return next(new Error('Invalid report ID'));
    }
    const report = await Report.findById(req.params.id);
    if (!report) {
      res.status(404);
      return next(new Error('Report not found'));
    }
    res.status(200).json(report);
  } catch (error) {
    next(error);
  }
};

// @desc    Create new report
// @route   POST /api/reports
const createReport = async (req, res, next) => {
  try {
    const { description, photoUrl, createdBy } = req.body;
    if (!description || description.trim() === '') {
      res.status(400);
      return next(new Error('Description is required'));
    }
    const report = await Report.create({ description, photoUrl, createdBy });
    res.status(201).json(report);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllReports,
  getReportById,
  createReport,
};
