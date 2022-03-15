const ExamService = require('../service/ExamService');

const createExam = async (req, res) => {
  try {
    const { name, type, status } = req.body;
    const Exam = await ExamService.createExam({
      name,
      type,
      status,
    });
    return res.status(200).json(Exam);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const getAllExams = async (req, res) => {
  try {
    const Exams = await ExamService.getAllExams();
    return res.status(200).json(Exams);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const findExamById = async (req, res) => {
  const { id } = req.params;
  try {
    const Exam = await ExamService.findExamById(id);
    if (Exam.message) return res.status(Exam.code).json(Exam.message);
    return res.status(200).json(Exam);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
}

const updateExam = async (req, res) => {
  const { id } = req.params;
  const { name, type, status } = req.body;
  try {
    const Exam = await ExamService.updateExam(id, {
      name,
      type,
      status, 
    });
    if (Exam.message) return res.status(Exam.code).json(Exam.message);
    return res.status(200).json(Exam);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
}

const deleteExam = async (req, res) => {
  const { id } = req.params;
  try {
    const Exam = await ExamService.findExamById(id);
    if (Exam.message) return res.status(Exam.code).json(Exam.message);
    await ExamService.deleteExam(id);
    return res.status(200).json(Exam);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
}

module.exports = {
  createExam,
  getAllExams,
  findExamById,
  updateExam,
  deleteExam,
};