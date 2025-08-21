function themeToggle() {
  const themeBtn = document.querySelector(".themeBtn");
  const profile = document.querySelector("#profilepath");

  themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");


    if (document.documentElement.classList.contains("dark")) {
      profile.setAttribute("src", "./assets/cardAssets/Frame3.png"); 
    } else {
      profile.setAttribute("src", "./assets/f33.png");
    }
  });
}

themeToggle();
