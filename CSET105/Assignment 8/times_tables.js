function generateTable() {
    const num = parseInt(prompt("Enter your number"));
    if (isNaN(num)) {
        alert ("Please enter valid input");
        return;
    }
    let tableHTML = `
        <table>
            <tr><th colspan="2">Multiplication table of ${num}</th></tr>
    `;
    for (let i = 1; i <= 12; i++) {
        tableHTML += `<tr><td>${num} x ${i} = </td><td>${num * i}</td></tr>`;
    }
    tableHTML += `</table>`;
    document.getElementById("table").innerHTML = tableHTML;
}