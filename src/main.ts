import "./style.css"

const numbers: number[] = [1, 5, 17, 46, 523, 1361, 34461, 2473247347, 236283675287365];
// @ts-ignore
const doubledNumbers = numbers.map(number => number * 2);

const words: string[] = ["Saubstauger", "Getreideförderband", "Elektrolyte", "Energieeinsparpotential"];
// @ts-ignore
const filteredWords = words.filter(word => word.length > 5);

const moreNumbers: number[] = [17, 21, 1, 14, 5];
// @ts-ignore
const reducedNumbers = moreNumbers.reduce((a, b) => a + b);

const evenMoreNumbers: number[] = [29, 22136, 125, 4, -11];
// @ts-ignore
const isEvenMoreNumbersGreaterThan10 = evenMoreNumbers.some(number => number > 10)


// Bonus

const list: number[] = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194];

const newList = [...list]
    .sort((a, b) => b - a)
    .slice(4, -2)
    .map(number => number ** 2);

const result = newList
    .filter(number => number % 4 !== 0)
    .reduce((a, b) => a + b, 0);

console.log(list)
console.log(newList)
console.log(result)


const app = document.querySelector("#app")
console.log(app)
// @ts-ignore
app.innerHTML = `
    <table>
        <tbody>
            <tr>
                <td>List:</td>
                <td>${list.join(", ")}</td>
            </tr>
            <tr>
                <td>Result:</td>
                <td>${result}</td>
            </tr>
        </tbody>

    </table>
`;