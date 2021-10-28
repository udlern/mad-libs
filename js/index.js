const allMadLibsContent = {};

function onClick(event) {
  console.log(event);
  const allInputs = document
    .querySelectorAll("input")
    .forEach((input) => (allMadLibsContent[input.id] = input.value));
  console.log(allMadLibsContent);
  window.location.href = "form.html";
  return false;
}

function viewMadlib() {
  const startingPoint = document.getElementById("story-starts"); 
  startingPoint.innerHTML = "<p>`You are walking on a street ${allMadLibsContent["adj-1"]} and you did`></p>"
}

// function onClick(event) {
//     const allInputs = document.querySelectorAll("input")
//     for (let i = 0; i < allInputs; i++) {
//         console.log(input[i].id + ": " + input[i].value)
//     }
// }
// };
