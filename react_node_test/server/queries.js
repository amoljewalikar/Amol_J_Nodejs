// create table Student(
// 	stud_id SERIAL PRIMARY KEY,
// 	first_name varchar(30),
// 	last_name varchar(30),
// 	email date,
// 	age varchar(50)
// )
// create table Marks(
// 	mark_id SERIAL PRIMARY KEY,
// 	stud_id int,
// 	sub1 varchar(30),
// 	mark1 int,
// 	sub2 varchar(30),
// 	mark2 int,
// 	sub3 varchar(30),
// 	mark3 int,
// 	FOREIGN KEY (stud_id) REFERENCES Student(stud_id) ON DELETE CASCADE
// )

const getStudents = 
`SELECT
	s.stud_id,
    s.first_name,
    s.last_name,
    s.email,
    s.age,
    m.mark_id,
    m.maths,
    m.physics,
    m.geology
FROM 
    Student s
LEFT JOIN 
    Marks m
ON 
    s.stud_id = m.stud_id
ORDER BY 
  s.stud_id
LIMIT 
  $1
OFFSET 
  $2;`;

const countStudents = 
`SELECT 
    COUNT(*)
FROM 
    Student s`;
// JOIN 
//     Marks m
// ON 
//     s.stud_id = m.stud_id;`

const getStudentsById = 
`SELECT
	s.stud_id,
    s.first_name,
    s.last_name,
    s.email,
    s.age,
    m.mark_id,
    m.maths,
    m.physics,
    m.geology
FROM 
    Student s
JOIN 
    Marks m
ON 
    s.stud_id = m.stud_id
WHERE 
    s.stud_id = $1;`;

const create_student = "INSERT INTO Student(first_name, last_name, email, age) VALUES ( $1, $2, $3, $4);";

const deleteStudentsById = "DELETE FROM Student WHERE stud_id = $1;"

const updateStudentsById = "UPDATE Student SET email = $2 WHERE stud_id = $1;"

const student_marks = "INSERT INTO Marks(stud_id, maths, physics, geology) VALUES ( $1, $2, $3, $4);";

module.exports = {
    getStudents,
    countStudents,
    getStudentsById,
    create_student,
    deleteStudentsById,
    updateStudentsById,
    student_marks
}