// Type definition
type validGermanGrades = 1 | 2 | 3 | 4 | 5 | 6 | undefined;
type validAmericanGrades = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | undefined;
type subject = {
    name: string,
    grades: (validGermanGrades | validAmericanGrades)[]
}
type student = {
    firstName: string,
    lastName: string,
    age: number,
    subjects: subject[],
};
type students = student[]

// Data
const aljoscha: student = {
    firstName: "Aljoscha",
    lastName: "Zöller",
    age: 17,
    subjects: [
        {
            name: "Computer Science",
            grades: [1, undefined, 'C', 6, 4, 'B',],
        }
    ],
}

const detlev: student = {
    firstName: "Detlev",
    lastName: "Arnolds",
    age: 87,
    subjects: [
        {
            name: "Computer Science",
            grades: [1, 'A', 2, 'B', 3, 'C',],
        }
    ],
}

const dieter: student = {
    ...detlev,
    firstName: "Dieter",
    subjects: [
        {
            name: "Math",
            grades: [5, 'E', 6, 'F',],
        }
    ]
}

const susie: student = {
    firstName: "Susie",
    lastName: "S.",
    age: 15,
    subjects: [
        {
            name: "Naturschutz",
            grades: ['A', 'B', 'C'],
        },
        {
            name: "Biologie",
            grades: [1, 2, 3],
        },
    ],
}

const highSchoolStudents = [aljoscha, detlev, dieter, susie]


// Functions
function printGrades(student: student) {
    const head: string = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(head);
    console.log(getSeparator(head))
    console.log("Grades:")
    student.subjects.forEach((subject) => {
            console.log(subject.name + ": " + subject.grades.map((grade) => getGrade(grade)));

        }
    )
    console.log("");
}

function printAllStudents(students: students) {
    console.log("");
    students.forEach(student => printGrades(student));
}

function getGrade(grade: validAmericanGrades | validGermanGrades) {
    if (grade === undefined) {
        return '*';
    }
    return grade;
}

function getSeparator(string: string) {
    let separator: string = "";

    for (let i = 0; i < string.length; i++) {
        separator = separator + "=";
    }

    return separator;
}


function getAverageSubjectGrade(subject: subject): number {
    const grades = subject.grades
        .filter(grade => grade !== undefined && grade !== null)
        .map((grade) => {
            switch (grade) {
                case 'A':
                    return 1
                case 'B':
                    return 2
                case 'C':
                    return 3
                case 'D':
                    return 4
                case 'F':
                    return 6
                case 1:
                    return 1
                case 2:
                    return 2
                case 3:
                    return 3
                case 4:
                    return 4
                case 5:
                    return 5
                case 6:
                    return 6
                default:
                    throw Error(`Invalid grade: ${grade}`)
                case 'E':
                    return 5
            }
        });

    const sum = grades.reduce((a, b) => a + b, 0)
    return sum / grades.length;
}

function getAverageStudentGrade(student: student): number {
    const subjectsAverage = student.subjects.map((subject) => getAverageSubjectGrade(subject));
    const sum = subjectsAverage.reduce((a, b,) => a + b, 0);
    return sum / subjectsAverage.length;
}

function getAverageGradeOfStudents(students: students): number {
    const studentAvg: number[] = students.map((student) => getAverageStudentGrade(student));
    const sum: number = studentAvg.reduce((a, b) => a + b, 0);
    return sum / studentAvg.length;
}

// Function call
printAllStudents(highSchoolStudents)

const av = getAverageSubjectGrade({name: "testName", grades: [1, 2, 'B', 6]})
console.log(av)

console.log("Aljoschas average grade: " + getAverageStudentGrade(aljoscha));
console.log("Average grade of all High-School students: " + getAverageGradeOfStudents(highSchoolStudents));
