const ExamModel = require('../model/ExamModel');

const createExam = async ({name, type, status}) => {
    
    const Exam = await ExamModel.createExam({name, type, status});
  
    return Exam;
  }

  const getAllExams = async () => {
    const Exams = await ExamModel.getAllExams();

    return Exams;
  }

  const findExamById = async (id) => {
    const Exam = await ExamModel.findExamById(id);

    if (!Exam) {
      return {code: 404, message: { message: 'Exam not found' }};
    };

    return Exam;
  }

  const updateExam = async (id, {name, type, status}) => {
    const Exam = await ExamModel.updateExam(id, {name, type, status});

    if (!Exam) {
      return {code: 404, message: { message: 'Exam not found' }};
    };

    return Exam;
  }

  const deleteExam = async (id) => {
    const Exam = await ExamModel.findExamById(id);

    if (!Exam) {
      return {code: 404, message: { message: 'Exam not found' }};
    };

    await ExamModel.deleteExam(id);

    return Exam;
  }


module.exports = {
    createExam,
    getAllExams,
    findExamById,
    updateExam,
    deleteExam
}