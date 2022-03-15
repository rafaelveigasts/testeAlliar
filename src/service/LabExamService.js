const LabExamModel = require('../model/LabExamModel');

const createLabExam = async (labId, examId) => {
  const result = await LabExamModel.createLabExam(labId, examId);
  return result;
}

const getAllLabExams = async () => {
  const result = await LabExamModel.getAllLabExams();
  return result;
}

const editLabExam = async (labId, examId) => {
  const foundLabExam = await LabExamModel.findLabExamById(labId, examId);

  if (foundLabExam) {
    const result = await LabExamModel.editLabExam(labId, examId);
    return result;
  }
  else {
    throw new Error('LabExam not found');
  }
}

const removeLabExam = async (labId, examId) => {
  const foundLabExam = await LabExamModel.findLabExamById(labId, examId);

  if (foundLabExam) {
    const result = await LabExamModel.removeLabExam(labId, examId);

    if (result.affectedRows === 0) {
      throw new Error('LabExam not found');
    }
    else {
      return result;
    }
  }
  else {
    throw new Error('LabExam not found');
  }
}

module.exports = {

  createLabExam,
  getAllLabExams,
  editLabExam,
  removeLabExam
}