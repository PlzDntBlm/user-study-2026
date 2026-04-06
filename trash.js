document.addEventListener("DOMContentLoaded", () => {
  const bins = document.querySelectorAll(".bin");
  const resultDisplay = document.getElementById("trash-result");

  const lootTable = [
    "🍕 a half-eaten pizza crust",
    "🍎 an apple core",
    "🐟 a fish skeleton",
    "🧦 a smelly sock",
    "💎 a shiny bottle cap",
    "🪲 a tasty bug",
    "📰 some old soggy newspaper",
    "🌭 an entire untouched hotdog!",
  ];

  bins.forEach((bin) => {
    bin.addEventListener("click", () => {
      const randomLoot =
        lootTable[Math.floor(Math.random() * lootTable.length)];
      resultDisplay.innerText = `You dug in and found... ${randomLoot}`;

      // Add a little shake animation
      bin.style.transform = "rotate(-15deg)";
      setTimeout(() => {
        bin.style.transform = "rotate(15deg)";
      }, 100);
      setTimeout(() => {
        bin.style.transform = "rotate(0)";
      }, 200);
    });
  });
});
