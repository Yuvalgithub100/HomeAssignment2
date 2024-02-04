const OpenMenuButton = document.querySelector("#navbar_mobile button");
OpenMenuButton.addEventListener("click", function () {
  const menu = document.querySelector(".floating_menu");
  console.log(menu);
  menu.style.transform = "translateX(0)";
  OpenMenuButton.style.display = "none";
});

const CloseMenuButton = document.querySelector("#close-menu");
CloseMenuButton.addEventListener("click", () => {
  const menu = document.querySelector(".floating_menu");
  console.log(menu);
  menu.style.transform = "translateX(-130%)";
});
