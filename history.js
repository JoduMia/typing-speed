const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, wordPerMinute) {

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount,wordPerMinute });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}


function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <p class="yellow italic text-sm">\"${test.questionText}\"</p>
  <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
    <p>Your Typeing speed is <span class="bold blue text-xl">${test.wordPerMinute}</span> WPM.</p>
  `;

    histories.appendChild(newRow);
  });
}
