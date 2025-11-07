var rpsDatabase = {
    'Rock': {'Scissors': 2, 'Rock': 1, 'Paper': 0},
    'Paper': {'Rock': 2, 'Paper': 1, 'Scissors': 0},
    'Scissors': {'Paper': 2, 'Scissors': 1, 'Rock': 0}
};
let cScore = 0;
let uScore = 0;
let gCount = 0;
let tCount = 0;
const choices = ["Rock", "Paper", "Scissors"];

document.getElementById("reset").addEventListener("click", () => {
    cScore = 0;
    uScore = 0;
    gCount = 0;
    tCount = 0;

    const resultsDiv = document.querySelector(".results");
    resultsDiv.innerHTML = "";

    document.querySelector(".score").textContent = `Score: You - 0, Computer - 0`;
    document.querySelector(".ties").textContent = `Ties: 0`;

    console.log("Game reset~!");
});
choices.forEach((choice, input) => {
    document.getElementById(choice.toLowerCase()).addEventListener("click", () => {
        console.log("Player " + input);
        comp = getComputer();
        rpsGame(input, comp);
    });
});
function rpsGame(input, comp) {
    gCount++;
    let uChoice = choices[input];
    let cChoice = choices[comp];
    const match = rpsDatabase[uChoice][cChoice];

    if (match === 2) uScore++;
    if (match === 1) tCount++;
    if (match === 0) cScore++;

    const resultText = ["Computer wins!", "Tied!", "Player wins!"][match];

    console.log(resultText);
    displayResult(`<span style="font-weight: bold">${gCount}.</span> You - ${choices[input]}, Computer - ${choices[comp]}`);
    document.querySelector(".score").textContent = `Score: You - ${uScore}, Computer - ${cScore}`;
    document.querySelector(".ties").textContent = `Ties: ${tCount}`;
}
function getComputer() {
    const comp = Math.floor(Math.random() * 3);
    console.log("Computer " + comp);
    return comp;
}
function displayResult(text) {
    const resultsDiv = document.querySelector(".results");
    const p = document.createElement("p");
    p.innerHTML = text;
    resultsDiv.appendChild(p);
}