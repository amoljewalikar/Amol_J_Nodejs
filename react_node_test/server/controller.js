const { json } = require("express");
const pool  = require("./database")
const queries = require("./queries")

const getStudents = (req, res) => {
    // console.log(req.body,":::", req.query);
    const { page, limit } = req.query;
    const offset = (page - 1) * limit;
    pool.query(queries.getStudents, [parseInt(limit), parseInt(offset)], (err, results) => {
    // pool.query(queries.getStudents, (err, results) => {
        const noRecords = !results.rows.length;
        if (noRecords) 
            res.send({msg: "No records found"});
        else {
            pool.query(queries.countStudents, (err, count) => {
                if (err) throw err
                res.json({ students: results.rows, count: count.rows[0].count })
                // res.status(200).json({ students: results.rows, count: count.rows[0].count })
            })
        }
    })
}

const getStudentsById = (req, res) => {
    const id = parseInt(req.body.id)
    console.log("ID:",id);
    pool.query(queries.getStudentsById, [id], (err, results) => {
        if (err) throw err
        res.json(results.rows)
        // res.status(200).json(results.rows)
    })
}

const create_student = (req, res) => {
    const { firstName, lastName, email, age } = req.body
    console.log(firstName, lastName, email, age);
    pool.query(queries.create_student, [firstName, lastName, email, age], (err) => {
        if (err) throw err
        res.send({msg:"Student created successfully."})
        // res.status(201).send("Student created successfully.")
    })
}

const student_marks = (req, res) => {
    const { id, maths, physics, geology} = req.body
    console.log(id, maths, physics, geology);
    pool.query(queries.student_marks, [id, maths, physics, geology], (err) => {
        if (err) throw err
        res.send({msg:"Marks recorded successfully."})
        // res.status(201).send("Marks recorded successfully.")
    })
}

const deleteStudentsById = (req, res) => {
    const id = req.params.id;
    // console.log(req.query.id, ":::",req.body.id, ":::", req.params.id,);
    pool.query(queries.deleteStudentsById, [id], (err) => {
        if (err) throw err
        res.send("Deleted record "+ id);
        // res.status(204).send("Deleted record");
    })
}

const updateStudentsById = (req, res) => {
    // console.log(typeof req.body.id, parseInt(req.body.id));
    const id = req.body.id;
    const email = req.body.email;
    pool.query(queries.updateStudentsById, [parseInt(id), email], (err) => {
        if (err) throw err
        res.send("Record updated");
        // res.status(204).send("Record updated");
    })
}
module.exports = {
    getStudents,
    getStudentsById,
    create_student,
    deleteStudentsById,
    updateStudentsById,
    student_marks
}