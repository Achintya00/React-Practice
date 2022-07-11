const btn = document.querySelector(".burger");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!btn.classList.contains("open")) {
    btn.classList.add("open");
  } else {
    btn.classList.remove("open");
  }
  console.log("Button clicked");
});
