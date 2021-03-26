"use strict";

const sidePanel = document.getElementById("sidePanel");
const description = document.getElementById("description");

setTimeout(() => {
  const elements = document.querySelectorAll(`[class*="legend"]`);
  openPanel(elements);
}, 200);

const openPanel = (elements) => { 
  elements.forEach(element => {
    element.addEventListener("click", () => {
      const content = element.innerHTML;
      const trimmedContent = content
        .slice(3, content.length)
        .replace(/(^\s+|\s+$)/g, '');
        
      for (const entry of entries) {
        if (entry?.label?.includes(trimmedContent)) {
          sidePanel.classList.add('active');
          description.innerHTML = `
            <h2>${entry.title}</h2>
            <p>${entry.description}</p>
          `;
        }
      }
    });
  });
}

const closePanel = () => 
  sidePanel.classList.remove('active');
