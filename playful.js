// playful.js
// Adds interactive raccoon-themed playfulness across the website.

document.addEventListener("DOMContentLoaded", () => {
  // 1. Create a trailing raccoon cursor
  const cursorRaccoon = document.createElement("div");
  cursorRaccoon.innerHTML = "🦝";
  cursorRaccoon.style.position = "fixed";
  cursorRaccoon.style.fontSize = "2rem";
  cursorRaccoon.style.pointerEvents = "none";
  cursorRaccoon.style.zIndex = "9999";
  cursorRaccoon.style.transition = "transform 0.1s";
  document.body.appendChild(cursorRaccoon);

  document.addEventListener("mousemove", (e) => {
    cursorRaccoon.style.left = e.clientX + 10 + "px";
    cursorRaccoon.style.top = e.clientY + 10 + "px";
  });

  // 2. Add random text on clicks
  const facts = ["give cat food", "trash", "h", "scrach", "where is the bin"];

  document.body.addEventListener("click", (e) => {
    // Create a temporary speech bubble
    const bubble = document.createElement("div");
    bubble.innerText = facts[Math.floor(Math.random() * facts.length)];
    bubble.style.position = "absolute";
    bubble.style.left = e.pageX + "px";
    bubble.style.top = e.pageY - 30 + "px";
    bubble.style.backgroundColor = "white";
    bubble.style.color = "black";
    bubble.style.padding = "5px 10px";
    bubble.style.borderRadius = "10px";
    bubble.style.fontWeight = "bold";
    bubble.style.pointerEvents = "none";
    bubble.style.animation = "floatUp 1.5s ease-out forwards";

    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 1500);
  });

  // Add keyframes for the bubble animation if it doesn't exist
  if (!document.getElementById("playful-styles")) {
    const pStyle = document.createElement("style");
    pStyle.id = "playful-styles";
    pStyle.innerHTML = `
            @keyframes floatUp {
                0% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-50px); }
            }
        `;
    document.head.appendChild(pStyle);
  }
});
