// select
let vidCon = document.querySelector('.video-container'),
    thumbnail = document.querySelector('.thumbnail'),
    video = document.querySelector('.sermon-hover-video');

vidCon.addEventListener("mouseenter", (e) => {
  showVideo();
  e.preventDefault();
});

vidCon.addEventListener("mouseleave", (e) => {
  hideVideo();
  e.preventDefault();
});

function showVideo(){
  thumbnail.classList.remove("d-block");
  thumbnail.classList.add("d-none");
  video.classList.remove("d-none");
  video.classList.add("d-block");
}
function hideVideo(){
  thumbnail.classList.remove("d-none");
  thumbnail.classList.add("d-block");
  video.classList.remove("d-block");
  video.classList.add("d-none");
}

