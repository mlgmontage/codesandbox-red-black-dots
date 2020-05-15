import "./styles.css";
const root = document.getElementById("app");

const amount = 126;

for (let i = 0; i < amount; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.classList.add("black");

  dot.addEventListener("click", () => {
    dot.classList.remove("black");
    dot.classList.add("red");
  });

  root.appendChild(dot);
}
