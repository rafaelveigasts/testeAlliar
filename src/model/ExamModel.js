const connection = require('./connection');

const createExam = async ({name, type, status}) => {
  const query = 'INSERT INTO LabsDB.Exam (name, type, status) VALUES (?, ?, ?)';
  const [result] = await connection.execute(query, [name, type, status]);

  return {
    id: result.insertId,
    name,
    type,
    status,
  }
}

const getAllExams = async () => {
  const query = 'SELECT * FROM LabsDB.Exam';
  const [result] = await connection.execute(query);

  return result;
}

const findExamById = async (id) => {
  const query = 'SELECT * FROM LabsDB.Exam WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  const Exam = result[0];

  if (!Exam) return null;

  return Exam;
}

const updateExam = async (id, {name, address, status}) => {
  const query = 'UPDATE LabsDB.Exam SET name = ?, address = ?, status = ? WHERE id = ?';
  const [result] = await connection.execute(query, [name, address, status, id]);

  if (!result.affectedRows) return null;

  return {
    id,
    name,
    address,
    status,
  }
}

const deleteExam = async (id) => {
  const query = 'DELETE FROM LabsDB.Exam WHERE id = ?';
  const [result] = await connection.execute(query, [id]);

  if (!result.affectedRows) return null;

  return true;
}


module.exports = {
  createExam,
  getAllExams,
  findExamById,
  updateExam,
  deleteExam,
}