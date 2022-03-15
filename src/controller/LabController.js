const LabService = require("../service/LabService");

const createLab = async (req, res) => {
  try {
    const { name, address, status } = req.body;
    console.log(name, address, status);
    const Lab = await LabService.createLab({
      name,
      address,
      status,
    });
    return res.status(200).json(Lab);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAllLabs = async (req, res) => {
  try {
    const Labs = await LabService.getAllLabs();
    return res.status(200).json(Labs);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getLabById = async (req, res) => {
  const { id } = req.params;
  try {
    const Lab = await LabService.findLabById(id);
    if (Lab.message) return res.status(Lab.code).json(Lab.message);
    return res.status(200).json(Lab);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
};

const updateLab = async (req, res) => {
  const { id } = req.params;
  const { name, address, status } = req.body;
  try {
    const Lab = await LabService.updateLab(id, {
      name,
      address,
      status,
    });
    if (Lab.message) return res.status(Lab.code).json(Lab.message);
    return res.status(200).json(Lab);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
};

const deleteLab = async (req, res) => {
  const { id } = req.params;
  try {
    const Lab = await LabService.deleteLab(id);
    if (Lab.message) return res.status(Lab.code).json(Lab.message);
    return res.status(200).json(Lab);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
};

module.exports = {
  createLab,
  getAllLabs,
  getLabById,
  updateLab,
  deleteLab,
};

