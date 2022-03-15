const connection = require("./connection");
const { findLabById } = require("./LabModel");
const { findExamById } = require("./ExamModel");


const createLabExam = async (labId, examId) => {

  const lab = await findLabById(labId);
  const exam = await findExamById(examId);

  const query = "INSERT INTO Lab_Exam VALUES (?, ?)";

  const result = await connection.query(query, [lab.id, exam.id]);

  const labExam = {lab, exam}

  return labExam

};

const getAllLabExams = async () => {
  const query = "SELECT * FROM Lab_Exam";

  const labExams = await connection.query(query);

  return labExams[0];
};

const editLabExam = async (labId, examId) => {
  const labExam = await findLabExamById(labId, examId);

  if (labExam) {
    const query = "UPDATE Lab_Exam SET lab_id = ?, exam_id = ? WHERE lab_id = ? AND exam_id = ?";

    const result = await connection.query(query, [labId, examId, labId, examId]);

    return result;
  }
  else {
    throw new Error('LabExam not found');
  }
};

const removeLabExam = async (labId, examId) => {
  const labExam = await findLabExamById(labId, examId);

  if (labExam) {
    const query = "DELETE FROM Lab_Exam WHERE lab_id = ? AND exam_id = ?";

    const result = await connection.query(query, [labId, examId]);

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
};

module.exports = {
  createLabExam,
  getAllLabExams,
  editLabExam,
  removeLabExam

};
