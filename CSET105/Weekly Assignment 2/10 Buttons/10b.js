const contain = document.getElementById("buttons");
const oColor = [];
const buttons = [];

const select = document.createElement("select");
const options = ["red", "green", "blue", "random", "reset"];
for (let opt of options) {
    const option = document.createElement("option");
    option.value = opt;
    option.textContent = opt.charAt(0).toUpperCase() + opt.slice(1);

    select.appendChild(option);
}
document.body.appendChild(select, contain);

for (let i = 1; i <= 10; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("btn");

    const color = getColor();
    btn.style.backgroundColor = color;
    oColor.push(color);
    buttons.push(btn);

    contain.appendChild(btn);
}

select.addEventListener("input", () => {
    const selected = select.value;
    buttons.forEach((btn, i) => {
        if (selected === "reset") {
            btn.style.backgroundColor = oColor[i];
        }
        else if (selected === "random") {
            const nColor = getColor();
            btn.style.backgroundColor = nColor;
        }
        else {
            btn.style.backgroundColor = selected;
        }
    });

    select.value = "";
});

function getColor() {
    const rColor = ["red", "green", "blue"];
    const input = Math.floor(Math.random() * 3);
    return rColor[input];
}