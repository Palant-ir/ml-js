function createRow(container, studentName, samples) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  const rowLabel = document.createElement("div");
  rowLabel.innerHTML = studentName;
  rowLabel.classList.add("rowLabel");
  row.appendChild(rowLabel);

  for (let sample of samples) {
    const { id, label, student_id } = sample;
    const img = document.createElement("img");

    const sampleContainer = document.createElement("div");
    sampleContainer.id = "sample_" + id;
    sampleContainer.classList.add("sampleContainer");

    const sampleLable = document.createElement("div");
    sampleLable.innerHTML = label;

    sampleContainer.appendChild(sampleLable);

    img.src = constants.IMG_DIR + "/" + id + ".png";
    img.classList.add("thumb");

    if (utils.flaggedUsers.includes(student_id)) {
      img.classList.add("blur");
    }

    sampleContainer.appendChild(img);
    row.appendChild(sampleContainer);
  }
}
