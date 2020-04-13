console.log("Hello World!");

document.querySelector("p").addEventListener("click", function() {
  this.innerText = `${this.innerText} ${this.innerText}`;
});
