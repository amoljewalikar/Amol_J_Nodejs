const { Router } = require('express');
const controller = require('./controller')

const router = Router()

router.get("/", controller.getStudents)

router.get("/:id", controller.getStudentsById)

router.post("/create_student", controller.create_student)

router.post("/student_marks", controller.student_marks)

router.put("/update", controller.updateStudentsById)

router.post("/delete/:id", controller.deleteStudentsById)


module.exports = router;