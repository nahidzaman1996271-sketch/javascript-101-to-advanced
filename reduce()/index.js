// .reduce() = reduce the elements of an array to a single value

const grades = [75,50,90,80,65,95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(minimum);

function getMax(accumalator, element){
    return Math.max(accumalator,element);
}

function getMin(accumalator, element){
    return Math.min(accumalator,element);
}