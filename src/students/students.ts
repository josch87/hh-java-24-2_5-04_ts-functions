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
}


const aljoscha: student = {
    firstName: "Aljoscha",
    lastName: "Zöller",
    age: 17,
    grades: [1, undefined, 'C', 6, 4, 'B'],
}

printGrades(aljoscha);

