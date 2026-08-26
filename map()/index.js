// .map() = accepts a callback and applies that function to each element of an array, then return a new array

const dates = ["2020-12-25","2025-2-05","2026-08-21"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}