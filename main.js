let accor = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accor.length; i++) {
    accor[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
  });
}
