const connection = require('./connection');

const createLab = async ({name, address, status}) => {
  const query = 'INSERT INTO LabsDB.Lab (name, address, status) VALUES (?, ?, ?)';
  const [result] = await connection.execute(query, [name, address, status]);

  return {
    id: result.insertId,
    name,
    address,
    status,
  }
}

const getAllLabs = async () => {
  const query = 'SELECT * FROM LabsDB.Lab';
  const [result] = await connection.execute(query);

  return result;
}

const findLabById = async (id) => {
  const query = 'SELECT * FROM LabsDB.Lab WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  const Lab = result[0];

  if (!Lab) return null;

  return Lab;
}

const updateLab = async (id, {name, address, status}) => {
  const query = 'UPDATE LabsDB.Lab SET name = ?, address = ?, status = ? WHERE id = ?';
  const [result] = await connection.execute(query, [name, address, status, id]);

  if (!result.affectedRows) return null;

  return {
    id,
    name,
    address,
    status,
  }
}

const deleteLab = async (id) => {
  const query = 'DELETE FROM PharmaDB.Lab WHERE id = ?';
  const [result] = await connection.execute(query, [id]);

  if (!result.affectedRows) return null;

  return true;
}


module.exports = {
  createLab,
  getAllLabs,
  findLabById,
  updateLab,
  deleteLab,
}