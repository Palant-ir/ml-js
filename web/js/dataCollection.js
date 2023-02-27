let index = 0;
const labels = [
  "car",
  "fish",
  "house",
  "tree",
  "bicycle",
  "guitar",
  "pencil",
  "clock",
];
const data = {
  student: null,
  session: new Date().getTime(),
  drawings: {},
};

const sketchPad = new SketchPad(sketchPadContainer);

function start() {
  if (student.value == "") {
    alert("Please provide your name");
    return;
  } else {
    data.student = student.value;
    student.style.display = "none";
    sketchPadContainer.style.visibility = "visible";
    const label = labels[index];
    instructions.innerHTML = "Please draw a " + label;
    advanceBtn.innerHTML = "NEXT";
    advanceBtn.onclick = next;
  }
}

function next() {
  const label = labels[index];
  if (sketchPad.paths.length == 0) {
    alert(`please draw a ${label}`);
    return;
  } else {
    data.drawings[label] = sketchPad.paths;
    sketchPad.reset();
    index++;
    if (index < labels.length - 1) {
      nextLabel = labels[index];
      instructions.innerHTML = "Please draw a " + nextLabel;
    } else {
      sketchPadContainer.style.visibility = "visible";
      instructions.innerHTML = "You have come to the end. Thank you.";
      advanceBtn.innerHTML = "SAVE DRAWINGS";
      advanceBtn.onclick = save;
    }
  }
}

function save() {
  advanceBtn.style.display = "none";
  instructions.innerHTML =
    "Place the downloaded file alongside others in the dataset";

  const donwnloadLink = document.createElement("a");
  donwnloadLink.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(data))
  );

  const fileName = data.session + ".json";
  donwnloadLink.setAttribute("download", fileName);

  donwnloadLink.style.display = "none";
  document.body.appendChild(donwnloadLink);
  donwnloadLink.click();
  document.body.removeChild(donwnloadLink);
}
