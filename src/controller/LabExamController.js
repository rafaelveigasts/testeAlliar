const labExamService = require('../service/LabExamService');

const createLabExam = async (req, res) =>{
  const { labId, examId } = req.body;

  try {
    const result = await labExamService.createLabExam(labId, examId);
    res.status(201).json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

const getAllLabExams = async (req, res) => {
  try {
    const result = await labExamService.getAllLabExams();
    res.status(200).json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

const editLabExam = async (req, res) => {
  const { labId, examId } = req.body;

  try {
    const result = await labExamService.editLabExam(labId, examId);
    res.status(200).json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

const removeLabExam = async (req, res) => {
  const { labId, examId } = req.body;

  try {
    const result = await labExamService.removeLabExam(labId, examId);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'LabExam not found' });
    }
    else {
      res.status(200).json(result);
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  createLabExam,
  getAllLabExams,
  editLabExam,
  removeLabExam
}