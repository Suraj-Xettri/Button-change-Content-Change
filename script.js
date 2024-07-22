const buttons = document.querySelectorAll("button");
const content = document.getElementById("content");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    switch (this.id) {
      case "decommissioning-btn":
        content.innerHTML = `
                        <h1 class="title">Decommissioning & Dismantling</h1>
                        <p class="paragraph">
                            Content for Decommissioning & Dismantling...
                        </p>
                    `;
        break;
      case "demolition-btn":
        content.innerHTML = `
                        <h1 class="title">Demolition</h1>
                        <p class="paragraph">
                            Content for Demolition...
                        </p>
                    `;
        break;
      case "decontamination-btn":
        content.innerHTML = `
                        <h1 class="title">Decontamination</h1>
                        <p class="paragraph">
                            Content for Decontamination...
                        </p>
                    `;
        break;
      case "salvage-service-btn":
        content.innerHTML = `
                        <h1 class="title">Salvage & Management of Surplus / Used Assets</h1>
                        <p class="paragraph">
                            Content for Salvage & Management of Surplus / Used Assets...
                        </p>
                    `;
        break;
      case "maintenance-btn":
        content.innerHTML = `
                        <h1 class="title">Management of Industrial and Schedule Waste</h1>
                        <p class="paragraph">
                            Content for Management of Industrial and Schedule Waste...
                        </p>
                    `;
        break;
      case "trading-btn":
        content.innerHTML = `
                        <h1 class="title">Trading of Ferrous & Non Ferrous Scrap Metal</h1>
                        <p class="paragraph">
                            Content for Trading of Ferrous & Non Ferrous Scrap Metal...
                        </p>
                    `;
        break;
    }
  });
});
