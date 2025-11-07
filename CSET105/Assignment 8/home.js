console.log("Hello, World!");

let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

let doggo = document.getElementById("doggo");
console.log(doggo.src);

let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[3], paragraphs[2]);

// let images = document.body.getElementsByTagName("img");
// let node = document.createTextNode(images[0].src);
// images[0].parentNode.replaceChild(node, images[0]);
// let images2 = document.body.getElementsByTagName("img");
// let node2 = document.createTextNode(images2[0].src);
// if (images2[0].alt) 
//     images2[0].parentNode.replaceChild(node2, images2[0]);

function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
        let image = images[i];
        if (image.alt) {
            let text = document.createTextNode(image.alt);
            image.parentNode.replaceChild(text, image);
        }
    }
}

var btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";
document.body.appendChild(btn);

// var myobj = document.getElementById("demo");
// myobj.remove();

let para = document.getElementById("para");
console.log(para.style.color);
para.style.color = "magenta";

function count(selector) {
    return document.querySelectorAll(selector).length;
}
console.log(count("p"));
console.log(count(".animal"));
console.log(count("p .animal"));
console.log(count("p > .animal"));

console.log(document.getElementsByTagName("a")[0].target === "");
document.getElementsByTagName("a")[0].target = "_blank";
console.log(document.getElementsByTagName("a")[0].target);

// function sayHello() {
//     let child = document.createElement("h1");
//     child.innerHTML = "Hey there!";

//     let div = document.getElementById("div");
//     div.appendChild(child);
// }
let count1 = 0;
function sayHello() {
    let child = document.createElement("h1");
    child.innerHTML = "Hey there! " + ++count1;

    let div = document.getElementById("div");
    div.appendChild(child);
}

function whoClickedMe(thing) {
    console.log(thing);
    console.log(thing.id);
    console.log(thing.attributes);
    console.log(thing.value);
}

function getRndInteger(min, max) {
    let result = Math.floor(Math.random() * (max - min) ) + min;
    let output = document.createElement("h2");
    output.innerHTML = result;
    document.getElementById("div1").appendChild(output);
    console.log(result);
    return result;
}
function getRndInteger1(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1) ) + min;
    let output = document.createElement("h2");
    output.innerHTML = result;
    document.getElementById("div2").appendChild(output);
    console.log(result);
    return result;
}