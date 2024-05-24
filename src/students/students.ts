type validGermanGrades = 1 | 2 | 3 | 4 | 5 | 6 | undefined;
type validAmericanGrades = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | undefined;

type student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: validGermanGrades[] | validAmericanGrades[],
}


function printGrades(student: student) {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")");
    console.log("==============================");
    const grades = student.grades.map((grade) => {
            if (grade === undefined) {
                return '*'
            } else {
                return grade
            }
        }
    )
    console.log("Grades: " + grades);
    console.log("");
}


const aljoscha: student = {
    firstName: "Aljoscha",
    lastName: "Zöller",
    age: 17,
    grades: [1, undefined, 'C', 6, 4, 'B',],
}

type students = student[]

const detlev: student = {
    firstName: "Detlev",
    lastName: "Arnolds",
    age: 87,
    grades: [1, 'A', 2, 'B', 3, 'C',]
}

const dieter: student = {...detlev, firstName: "Dieter", grades: [5, 'E', 6, 'F',]}

const highSchoolStudents = [aljoscha, detlev, dieter]

function printAllStudents(students: students) {
    students.forEach(student => printGrades(student))
}

printAllStudents(highSchoolStudents)