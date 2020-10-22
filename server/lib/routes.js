const router = require("express").Router();
const projectModel = require("./model.js");


//setup multer for file uploads
const multer = require("multer");
const path = require("path");

//setup multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../assets/images"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.get("/project", async (req, res) => {
  const projects = await projectModel.find();
  res.status(200).json(projects);
});

router.get("/project/:id", (req, res) => {
  projectModel.findOne({ _id: req.params.id })
    .then(project => {
      if (!project) {
        res.status(404).json({ message: 'no project found' })
      }
      return res.json(project)
    })
    .catch(err => console.error(err))
});

router.post("/project", (req, res) => {
  new projectModel(req.body)
    .save()
    .then(project => res.status(201).json(project))
    .catch(err => console.error(err))
});

router.put('/project', (req, res) => {
  projectModel.findOneAndUpdate({ title: req.body.title }, req.body, (err, doc) => {
    if (err) throw err;
    res.status(202).json(doc)
  })
})

router.delete('/project', (req, res) => {
  projectModel.findOneAndDelete({ title: req.body.title }, (err, doc) => {
    if (err) throw err;
    res.status(301).json(doc)
  })
})

module.exports = router;
