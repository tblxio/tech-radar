"use strict";

const sidePanel = (entries) => {
  const sidePanel = document.getElementById("side-panel");
  const description = document.getElementById("description");
  const overlay = document.getElementById("overlay");
  const elements = document.querySelectorAll(`[class*="legend"]`)
  const blips = document.querySelectorAll(`[class*="blip"]`)
  const closeBtnArray = document.getElementsByClassName("side-panel-close");
  
  (open => {
    elements.forEach((element) => {
      const content = element.innerHTML;
      const trimmedNumber = /\d+/.exec(content).toString();
      const trimmedName = content
        .slice(3, content.length)
        .replace(/(^\s+|\s+$)/g, "");

      for (const entry of entries) {
        const panel = () => {
          overlay.classList.add("active");
          sidePanel.classList.add("active");
          description.innerHTML = `
            <h2>${entry.title}</h2>
            <p>${entry.description}</p>
          `;
        };

        element.addEventListener("click", () => {
          if (entry?.label?.includes(trimmedName)) {
            panel();
          }
        });

        blips.forEach((blip) => {
          const bilpNumber = blip.querySelector("text").innerHTML;
          blip.addEventListener("click", () => {
            if (
              trimmedNumber?.includes(bilpNumber) &&
              entry?.label?.includes(trimmedName)
            ) {
              panel();
            }
          });
        });
      }
    });
  })();

  (close => {
    [].forEach.call(closeBtnArray, (el) => {
      el.addEventListener("click", () => {
        overlay.classList.remove("active");
        sidePanel.classList.remove("active");
      });
    });
  })();
};
