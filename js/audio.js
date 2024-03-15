  document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video1");
    video.volume = 0.1; // 设置音量为0.1（10%）
    
    video.addEventListener("ended", function() {
      video.currentTime = 0;
      video.play();
    });
  });