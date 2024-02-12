//timer
var countDownDate = new Date().getTime() + (5 * 60 * 1000);
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
document.getElementById("stopButton").addEventListener("click", function() {
  clearInterval(x);
  document.getElementById("timer").innerHTML =minutes + "m " + seconds + "s ";
});
//timer

//add avatar
var imageUrls = [
  "images/a1.png",
  // "images/a2.png",
];
var container = document.getElementById("avatarContainer");

// Loop through the image URLs and create image elements
imageUrls.forEach(function(url) {
  var img = document.createElement("img");
  img.src = url;
  img.alt = "Avatar";
  img.width= 50;
  img.height= 70;
  img.padding= 15;
  img.classList.add("avatar");
  container.appendChild(img);

  // Add click event listener to handle avatar selection
  img.addEventListener("click", function() {
    // Remove "selected" class from all avatars
    var avatars = document.querySelectorAll(".avatar");
    avatars.forEach(function(avatar) {
      avatar.classList.remove("selected");
    });

    // Add "selected" class to the clicked avatar
    img.classList.add("selected");

    // You can perform any action here with the selected avatar
    console.log("Selected avatar:", img.src);
  });
});
var name = prompt("Please enter your name:");
var namePara = document.createElement("p");
namePara.textContent = name || "Anonymous";
container.appendChild(namePara);