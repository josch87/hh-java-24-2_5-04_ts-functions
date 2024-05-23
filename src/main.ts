const numbers: number[] = [1, 5, 17, 46, 523, 1361, 34461, 2473247347, 236283675287365];

const doubledNumbers = numbers.map(number => number * 2);

const words: string[] = ["Saubstauger", "Getreideförderband", "Elektrolyte", "Energieeinsparpotential"];

const filteredWords = words.filter(word => word.length > 5);

const moreNumbers: number[] = [17, 21, 1, 14, 5];

const reducedNumbers = moreNumbers.reduce((a, b) => a + b);

const evenMoreNumbers: number[] = [29,22136,125,4,-11];

const isEvenMoreNumbersGreaterThan10 = evenMoreNumbers.some(number => number > 10)

