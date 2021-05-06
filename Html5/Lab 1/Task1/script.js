var video = document.getElementById("video");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var stopButton = document.getElementById("stop");
var duration;
video.controls = false;
document.getElementById("pause").style.display = "none";
video.onloadeddata = function() {
    duration = document.getElementById("durationbar").max = video.duration;
    playButton.addEventListener("click", play);
    pauseButton.addEventListener("click", pause);
    stopButton.addEventListener("click", stop);

    function stop() {
        pause();
        video.currentTime = 0;
    }

    function play() {
        if (video.paused || video.ended) {
            video.play();
            playButton.style.display = "none";
            document.getElementById("pause").style.display = "inline-block";
        }
    }

    function pause() {
        video.pause();
        pauseButton.style.display = "none";
        playButton.style.display = "inline-block";
    }
    document.getElementById("forward10").addEventListener("click", function() {
        video.currentTime += 10;
    });
    document.getElementById("backward10").addEventListener("click", function() {
        video.currentTime -= 5;
    });
    document.getElementById("forward5").addEventListener("click", function() {
        video.currentTime += 5;
    });
    document.getElementById("backward5").addEventListener("click", function() {
        video.currentTime -= 5;
    });
    document.getElementById("volume").addEventListener("change", function() {
        video.volume = this.value / 100;
    });
    document.getElementById("mute").addEventListener("click", function() {
        if (this.value === "mute") {
            video.volume = 0;
            this.value = "unmute";
            document.getElementById("volume").value = 0;
        } else {
            video.volume = 20 / 100;
            this.value = "mute";
            document.getElementById("volume").value = 20;
        }
    });
    document
        .getElementById("durationbar")
        .addEventListener("change", function() {
            video.currentTime = this.value;
        });
    video.addEventListener("timeupdate", function() {
        document.getElementById("durationbar").value = this.currentTime;
        document.getElementById("durationtime").innerText = `${(
      this.currentTime / 60
    ).toFixed(2)}/${(duration / 60).toFixed(2)}`;
    });
    document
        .getElementById("playbackrate")
        .addEventListener("change", function() {
            video.playbackRate = this.value;
            document.getElementById("playbackratelabel").innerText = `${this.value}x`;
        });
};

//playback rate range bar
//duration time