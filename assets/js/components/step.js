  class Step {
    constructor(status, title, name) {
      this.status = status;
      this.title = title;
      this.name = name;
    }

    createStepElement() {
      const li = document.createElement("li");
      li.className = this.status;

      const dl = document.createElement("dl");

      const dt = document.createElement("dt");
      const icon = document.createElement("i");
      icon.className = "step-img";
      dt.appendChild(icon);

      const ddTitle = document.createElement("dd");
      ddTitle.className = "txt";
      ddTitle.textContent = this.title;

      const ddName = document.createElement("dd");
      ddName.className = "txt";
      ddName.textContent = this.name;

      dl.appendChild(dt);
      dl.appendChild(ddTitle);
      dl.appendChild(ddName);
      li.appendChild(dl);

      return li;
    }
  }

  class StepContainer {
    constructor(stepData) {
      this.steps = stepData.map((data) => new Step(data.status, data.title, data.name));
    }

    render() {
      const stepList = document.createElement("ul");
      stepList.className = "step-list";

      this.steps.forEach((step) => {
        stepList.appendChild(step.createStepElement());
      });

      const stepContainer = document.getElementById("step-container");
      stepContainer.appendChild(stepList);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const stepData = JSON.parse(document.getElementById("step-container").getAttribute("data-step"));
    const stepContainer = new StepContainer(stepData);
    stepContainer.render();
  });