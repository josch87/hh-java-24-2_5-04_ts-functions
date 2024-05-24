type validGrades = 1 | 2 | 3 | 4 | 5 | 6

type student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: validGrades[],
}


function printGrades(student: student) {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")");
    console.log("==============================");
    console.log("Grades: " + student.grades);
}


const aljoscha: student = {
    firstName: "Aljoscha",
    lastName: "Zöller",
    age: 17,
    grades: [1, 6, 4],
}

printGrades(aljoscha);