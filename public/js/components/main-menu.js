export default function MainMenu() {
  let block = document.querySelector('header');

  if (block) {
    const hamburger = block.querySelector(".hamburger");
      
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("is-active");
    });
  }
}
  