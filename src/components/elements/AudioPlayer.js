import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

const AudioPlayer = ({ audioSrc }) => {
  const { colors } = useContext(AppContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(null);
  const [volume, setVolume] = useState(0.5);
  const audioRef = React.createRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    if (newVolume === "0") {
      audioRef.current.muted = true;
    } else {
      audioRef.current.muted = false;
    }
  };

  const handleAudioEnd = () => {
    if (audioRef.current) {
      setIsPlaying(false);
      setCurrentTime(-0);
      audioRef.current.currentTime = 0;
    }
  };
  const getVolumeIcon = (volume) => {
    if (volume == 0) {
      return "mute.png";
    } else if (volume <= 0.4) {
      return "low-volume.png";
    } else if (volume <= 0.7) {
      return "medium-volume.png";
    } else {
      return "high-volume.png";
    }
  };

  const styles = {
    container: {
      width: "100%",
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      borderRadius: 10,
      padding: "0 30px",
    },
    playAndPauseButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid #94823D",
      background: colors.white,
      borderRadius: "50%",
      padding: "1%",
    },
    playAndPauseIcon: {
      width: 20,
      height: 20,
      filter:
        "brightness(0) saturate(100%) invert(56%) sepia(9%) saturate(2251%) hue-rotate(10deg) brightness(89%) contrast(87%)",
    },

    duration: {
      width: 60,
      margin: "0 10px",
      fontSize: "1.2vw",
      color: "#94823D",
    },
    timeLine: {
      direction: "ltr",
      width: "70%",
      border: "none",
      height: 2,
    },
    volumeControl: {
      direction: "ltr",
      width: "20%",
      height: 2,
    },
    volumeIcon: {
      width: 20,
      height: 20,
      margin: "0 15px",
      filter:
        "brightness(0) saturate(100%) invert(56%) sepia(9%) saturate(2251%) hue-rotate(10deg) brightness(89%) contrast(87%)",
    },
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.volumeControl}
        type="range"
        value={volume}
        min="0"
        max="1"
        step="0.01"
        onChange={handleVolumeChange}
      />

      <img
        style={styles.volumeIcon}
        src={`audioPlayer/${getVolumeIcon(volume)}`}
        alt="Volume Icon"
      />

      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnd}
      />
      <span style={styles.duration}>{formatTime(duration)}</span>
      <input
        style={styles.timeLine}
        type="range"
        value={currentTime}
        max={duration || 0}
        onChange={handleSeek}
      />
      <span style={styles.duration}>{formatTime(currentTime)}</span>

      <button style={styles.playAndPauseButton} onClick={togglePlay}>
        {isPlaying ? (
          <img
            style={styles.playAndPauseIcon}
            src="audioPlayer/pause.png"
            alt="Pause"
          />
        ) : (
          <img
            style={styles.playAndPauseIcon}
            src="audioPlayer/play.png"
            alt="Play"
          />
        )}
      </button>
    </div>
  );
};

const formatTime = (time) => {
  if (isNaN(time)) {
    return "00:00";
  }
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export default AudioPlayer;
