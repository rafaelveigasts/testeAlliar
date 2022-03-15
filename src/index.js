const {
  createLab,
  getAllLabs,
  getLabById,
  updateLab,
  deleteLab,
} = require("./controller/LabController");

const {
  createExam,
  getAllExams,
  findExamById,
  updateExam,
  deleteExam,
} = require("./controller/ExamController");

const {
  createLabExam,
  getAllLabExams,
  editLabExam,
  removeLabExam,
} = require("./controller/LabExamController");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get("/", sayHello);

app.post("/lab", createLab);
app.post("/exam", createExam);

app.get("/lab", getAllLabs);
app.get("/exam", getAllExams);

app.get("/lab/:id", getLabById);
app.get("/exam/:id", findExamById);

app.put("/lab/:id", updateLab);
app.put("/exam/:id", updateExam);

app.delete("/lab/:id", deleteLab);
app.delete("/exam/:id", deleteExam);

app.post("/labexam", createLabExam);
app.get("/labexam", getAllLabExams);
app.put("/labexam/:labId/:examId", editLabExam);
app.delete("/labexam/:labId/:examId", removeLabExam);

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});

function sayHello(req, res) {
  res.send("Hello World!");
}
