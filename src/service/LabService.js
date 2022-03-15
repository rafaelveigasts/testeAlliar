const LabModel = require('../model/LabModel');

const createLab = async ({name, address, status}) => {
  
  const Lab = await LabModel.createLab({name, address, status});

  return Lab;
}

const getAllLabs = async () => {
  const Labs = await LabModel.getAllLabs();
  
  return Labs;
}

const findLabById = async (id) => {
  const Lab = await LabModel.findLabById(id);

  if (!Lab) {
    return {code: 404, message: { message: 'Lab not found' }};
  };

  return Lab;
}

const updateLab = async (id, {name, address, status}) => {
  const Lab = await LabModel.updateLab(id, {name, address, status});

  if (!Lab) {
    return {code: 404, message: { message: 'Lab not found' }};
  };

  return Lab;
}

const deleteLab = async (id) => {
  const Lab = await LabModel.findLabById(id);

  if (!Lab) {
    return {code: 404, message: { message: 'Lab not found' }};
  };

  await LabModel.deleteLab(id);

  return Lab;
}

module.exports = {
  createLab,
  getAllLabs,
  findLabById,
  updateLab,
  deleteLab
}