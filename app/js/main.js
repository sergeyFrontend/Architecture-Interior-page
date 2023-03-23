const postItems = document.querySelectorAll(".posts__item");

postItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("posts__item--active");
  });
});
