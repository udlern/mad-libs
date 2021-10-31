const allMadLibsContent = {};

function onClick(event) {
  console.log(event);
  document
    .querySelectorAll("input")
    .forEach((input) => {
      if (input.value === "") {
        alert("Please: " + input.placeholder);
        return;
      }
      localStorage.setItem(input.id, input.value)
    });
  console.log(allMadLibsContent);
  document.location.href = "form.html";
  return false;
}

function viewMadlib() {
  const secondAdjValue = localStorage.getItem("adj-2");
  const personNameOneValue = localStorage.getItem("person-name-1");
  const oneAdjValue = localStorage.getItem("adj-1");
  const secondNounValue = localStorage.getItem("noun-2");
  const pluralNounValue = localStorage.getItem("plural-noun");
  const thirdNounValue = localStorage.getItem("noun-3");
  const personNameValue = localStorage.getItem("person-name");
  const firstNounValue = localStorage.getItem("noun-1");
  const adverbValue = localStorage.getItem("adverb");
  const songValue = localStorage.getItem("song");
  const pastTenseVerbValue = localStorage.getItem("past-tense-verb");
  const beverageValue = localStorage.getItem("beverage");
  const corporationNameValue = localStorage.getItem("corporation-name");
  const fourthAdjValue = localStorage.getItem("adj-4");
  const thirdAdjValue = localStorage.getItem("adj-3");
  const superlativeAdjValue = localStorage.getItem("superlative-adj");
  const startingPoint = document.getElementById("story-starts");
  let textNode1 = document.createTextNode("There's a full moon out and a chill in the air, which can mean only one thing: it's Halloween night, and the party has just ");
  startingPoint.appendChild(textNode1);
  startingPoint.appendChild(createDecoratedElement("span", pastTenseVerbValue));
  let textNode3 = document.createTextNode(". Everyone is dressed in ")
  startingPoint.appendChild(textNode3);
  startingPoint.appendChild(createDecoratedElement("span", oneAdjValue));
  let textNode5 = document.createTextNode(" costumes. The speakers are blasting such classic Halloween hits as ");
  startingPoint.appendChild(textNode5);
  startingPoint.appendChild(createDecoratedElement("span", `"${songValue}"`));
  let textNode7 = document.createTextNode(". In the dining room, there is a group of people gathered around a large bowl of ");
  startingPoint.appendChild(textNode7);
  startingPoint.appendChild(createDecoratedElement("span", beverageValue));
  let textNode8 = document.createTextNode(" and a(n) ");
  startingPoint.appendChild(textNode8);
  startingPoint.appendChild(createDecoratedElement("span", secondAdjValue));
  let textNode9 = document.createTextNode(" assortment of snacks. Out in the living room, ");
  startingPoint.appendChild(textNode9);
  startingPoint.appendChild(createDecoratedElement("span", personNameValue));
  let textNode10 = document.createTextNode(" is dancing " );
  startingPoint.appendChild(textNode10);
  startingPoint.appendChild(createDecoratedElement("span", adverbValue));
  let textNode11 = document.createTextNode(". The decor is ");
  startingPoint.appendChild(textNode11);
  startingPoint.appendChild(createDecoratedElement("span", thirdAdjValue));
  let textNode12 = document.createTextNode(", with ");
  startingPoint.appendChild(textNode12);
  startingPoint.appendChild(createDecoratedElement("span", pluralNounValue));
  let textNode13 = document.createTextNode(" hanging from the ceiling and candles everywhere. Someone leans a little too close to one and sets their ");
  startingPoint.appendChild(textNode13);
  startingPoint.appendChild(createDecoratedElement("span", firstNounValue));
  let textNode14 = document.createTextNode(" on fire. At one point, some cops show up in response to a(n) ");
  startingPoint.appendChild(textNode14);
  startingPoint.appendChild(createDecoratedElement("span", secondNounValue));
  let textNode15 = document.createTextNode(" complaint and confiscate the ");
  startingPoint.appendChild(textNode15);
  startingPoint.appendChild(createDecoratedElement("span", thirdNounValue));
  let textNode16 = document.createTextNode(". Before the night ends, ");
  startingPoint.appendChild(textNode16);
  startingPoint.appendChild(createDecoratedElement("span", personNameOneValue));
  let textNode17 = document.createTextNode(" wins the contest for ");
  startingPoint.appendChild(textNode17);
  startingPoint.appendChild(createDecoratedElement("span", `"${superlativeAdjValue}`));
  let textNode18 = document.createTextNode(' Costume" and takes home a gift card for ');
  startingPoint.appendChild(textNode18);
  startingPoint.appendChild(createDecoratedElement("span", corporationNameValue));
  let textNode19 = document.createTextNode(". All in all, a(n) ");
  startingPoint.appendChild(textNode19);
  startingPoint.appendChild(createDecoratedElement("span", fourthAdjValue));
  let textNode20 = document.createTextNode(" Halloween party.");
  startingPoint.appendChild(textNode20);




}

function createDecoratedElement(elementType, innerText) {
  let decoratedElement = document.createElement(elementType);
  decoratedElement.innerText = innerText;
  decoratedElement.style.textDecoration = "underline";
  decoratedElement.style.color= "darkslateblue";
  return decoratedElement;
}
