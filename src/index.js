function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-prompt");

  let apiKey = "b408eca3f1b0e9991o40ab2t82d3f596";
  let prompt = `User Instrucitons: Please generate a nature poem that pertains to ${instructionsInput.value} `;
  let context =
    "You are a nature poem expert and you love to write short poems. You are required to generate a four line poem about nature in basic HTML form and seperate each line with a <br />. Please include a title and underline it. Please make sure to follow the users instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Creating your poem about ${instructionsInput.value}...`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
