//function main() {
let arrays = [];
let list = document.querySelector("#list");
let content = document.querySelector("#content");
const charactersImages = [
  "starwarsimages/Luke_Skywalker.webp",
  "starwarsimages/C-3PO.jpg",
  "starwarsimages/R2-D2.jpeg",
  "starwarsimages/Darth Vader.jpeg",
  "starwarsimages/leia-organa-star-wars-gun-movies-wallpaper-preview.jpeg",
  "starwarsimages/Owen-OP.webp",
  "starwarsimages/Beru Whitesun.jpeg",
  "starwarsimages/R5-D4.jpg",
  "starwarsimages/Biggs Darklighter.jpeg",
  "starwarsimages/Obi-Wan Kenobi.jpeg",
];

try {
  fetch("https://swapi.dev/api/people", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let datas = data.results;

      datas.forEach((item, i) => {
        arrays[i] = item;
        list.innerHTML += `<li value="${item.height}" title="${item.name}" id="${item.gender}" type="${i}" onclick="show(this,charactersImages)"><a href="#" >${item.name}</a></li>`;
      });
    });
} catch (e) {
  console.log(e.message);
}

function show(i, image) {
  let names = i.title;
  let height = i.value;
  let gender = i.id;
  let imageId = i.type;

  let arrays = ["Name: " + names, "gender: " + gender, "Height: " + height];
  let container = document.createElement("div");
  let close = document.createElement("button");
  let textButton = document.createTextNode("X");

  let img = document.createElement("img");

  img.src = image[imageId];
  close.id = "clickOut";
  close.appendChild(textButton);
  container.appendChild(close);
  container.appendChild(img);
  for (let index = 0; index < arrays.length; index++) {
    let p = document.createElement("p");
    let nodeP = document.createTextNode(arrays[index]);
    p.appendChild(nodeP);
    container.appendChild(p);
    p.className = "white";
  }

  container.className = "divContent";
  content.appendChild(container);
  let closeOut = document.getElementById("clickOut");
  closeOut.addEventListener("click", (x) => {
    container.remove();
  });
}

// module.exports = main;
