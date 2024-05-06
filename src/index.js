function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Creating your poem..."],
    autoStart: true,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
