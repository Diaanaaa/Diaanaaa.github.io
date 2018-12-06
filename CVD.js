
function ok(){
var coll = document.getElementsByClassName("atvr");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var saturs = this.nextElementSibling;
    if (saturs.style.display === "block") {
      saturs.style.display = "none";
    } else {
      saturs.style.display = "block";
    }
  });
} 
}