type validGermanGrades = 1 | 2 | 3 | 4 | 5 | 6 | undefined;
type validAmericanGrades = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | undefined;
type subject = {
    subject: string,
    grades: validGermanGrades[] | validAmericanGrades[]
}

type student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: subject[],
};

function printGrades(student: student) {
    const head: string = student.firstName + " " + student.lastName + " (" + student.age + ")";
    console.log(head);
    console.log(getSeparator(head))
    console.log("Grades:")
    student.grades.forEach((grade) => {
            console.log(grade.subject + ": " + grade.grades.map((grade) => getGrade(grade)));

        }
    )
    console.log("");
}

function getGrade(grade: validAmericanGrades | validGermanGrades) {
    if (grade === undefined) {
        return '*';
    }
    return grade;
}


const aljoscha: student = {
    firstName: "Aljoscha",
    lastName: "Zöller",
    age: 17,
    grades: [
        {
            subject: "Computer Science",
            grades: [1, undefined, 'C', 6, 4, 'B',],
        }
    ],
}

type students = student[]

const detlev: student = {
    firstName: "Detlev",
    lastName: "Arnolds",
    age: 87,
    grades: [
        {
            subject: "Computer Science",
            grades: [1, 'A', 2, 'B', 3, 'C',],
        }
    ],
}

const dieter: student = {
    ...detlev,
    firstName: "Dieter",
    grades: [
        {
            subject: "Math",
            grades: [5, 'E', 6, 'F',],
        }
    ]
}

const susie: student = {
    firstName: "Susie",
    lastName: "S.",
    age: 15,
    grades: [
        {
            subject: "Naturschutz",
            grades: ['A', 'B', 'C'],
        },
        {
            subject: "Biologie",
            grades: [1, 2, 3],
        },
    ],
}

const highSchoolStudents = [aljoscha, detlev, dieter, susie]

function printAllStudents(students: students) {
    console.log("");
    students.forEach(student => printGrades(student));
}

printAllStudents(highSchoolStudents)


// Bonus
function getSeparator(string: string) {
    string.length
    let separator: string = "";

    for (let i = 0; i < string.length; i++) {
        separator = separator + "=";
    }

    return separator;
}
