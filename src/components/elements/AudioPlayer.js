import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";

const AudioPlayer = ({ audioSrc }) => {
  const { colors, isMobile } = useContext(AppContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(null);
  const [volume, setVolume] = useState(0.5);
  const audioRef = React.createRef();

  useEffect(() => {
    const handleResize = () => {
      setIsPlaying(false); // Reset play state on resize (if needed)
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    audioRef.current.muted = newVolume === "0";
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    audioRef.current.currentTime = 0;
  };

  const getVolumeIcon = (volume) => {
    if (volume === 0) {
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
      height: isMobile ? 90 : 60,
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      borderRadius: 10,
      padding: isMobile ? "10px" : "0 20px",
    },
    timelineContainer: {
      display: "flex",
      flexDirection: isMobile ? "row" : "",
      alignItems: "center",
      justifyContent: isMobile ? "center" : "space-between",
      marginBottom: isMobile ? "10px" : 0,
      width: "100%",
    },
    controlsContainer: {
      display: "flex",
      flexDirection: isMobile ? "row-reverse" : "",
      alignItems: "center",
      justifyContent: "space-between",
      width: isMobile ? "100%" : "30%",
    },
    playButtonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: isMobile ? "0 0 0 10px" : 0,
    },
    playAndPauseButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid #94823D",
      background: colors.white,
      borderRadius: "50%",
      padding: isMobile ? "20%" : "1%",
    },
    playAndPauseIcon: {
      width: 20,
      height: 20,
      filter:
        "brightness(0) saturate(100%) invert(56%) sepia(9%) saturate(2251%) hue-rotate(10deg) brightness(89%) contrast(87%)",
    },
    volumeControl: {
      direction: "rtl",
      display: "flex",
      alignItems: "center",
      width: "40%",
      height: 2,
      margin: isMobile ? "10px 0" : "0 15px",
    },
    Volumeinput: {
      direction: "ltr",
      width: isMobile? "100%" : "40%",
    },
    volumeIcon: {
      width: 20,
      margin: "0 9px 0 0",
      height: 20,
      filter:
        "brightness(0) saturate(100%) invert(56%) sepia(9%) saturate(2251%) hue-rotate(10deg) brightness(89%) contrast(87%)",
    },
    timeLine: {
      direction: "ltr",
      width: "90%",
      border: "none",
      height: 2,
      margin: isMobile ? "10px 0" : 0,
    },
    duration: {
      width: 60,
      margin: isMobile ? "0 0 5px 0" : "0 10px",
      fontSize: isMobile ? "14px" : "1.2vw",
      color: "#94823D",
      textAlign: isMobile ? "center" : "left",
    },
  };

  return (
    <div style={styles.container}>
      {isMobile ? (
        <>
          <div style={styles.timelineContainer}>
            <span style={styles.duration}>{formatTime(duration)}</span>
            <input
              style={styles.timeLine}
              type="range"
              value={currentTime}
              max={duration || 0}
              onChange={handleSeek}
            />
            <span style={styles.duration}>{formatTime(currentTime)}</span>
          </div>
          <div style={styles.controlsContainer}>
            <div style={styles.playButtonContainer}>
              <button style={styles.playAndPauseButton} onClick={togglePlay}>
                {isPlaying ? (
                  <img
                    style={styles.playAndPauseIcon}
                    src="/audioPlayer/pause.png"
                    alt="Pause"
                  />
                ) : (
                  <img
                    style={styles.playAndPauseIcon}
                    src="/audioPlayer/play.png"
                    alt="Play"
                  />
                )}
              </button>
            </div>
            <div style={styles.volumeControl}>
              <input
                style={styles.Volumeinput}
                type="range"
                value={volume}
                min="0"
                max="1"
                step="0.01"
                onChange={handleVolumeChange}
              />
              <img
                style={styles.volumeIcon}
                src={`/audioPlayer/${getVolumeIcon(volume)}`}
                alt="Volume Icon"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div style={styles.volumeControl}>
            <input
              style={styles.Volumeinput}
              type="range"
              value={volume}
              min="0"
              max="1"
              step="0.01"
              onChange={handleVolumeChange}
            />
            <img
              style={styles.volumeIcon}
              src={`/audioPlayer/${getVolumeIcon(volume)}`}
              alt="Volume Icon"
            />
          </div>

          <div style={styles.timelineContainer}>
            <span style={styles.duration}>{formatTime(duration)}</span>
            <input
              style={styles.timeLine}
              type="range"
              value={currentTime}
              max={duration || 0}
              onChange={handleSeek}
            />
            <span style={styles.duration}>{formatTime(currentTime)}</span>
          </div>
          <button style={styles.playAndPauseButton} onClick={togglePlay}>
            {isPlaying ? (
              <img
                style={styles.playAndPauseIcon}
                src="/audioPlayer/pause.png"
                alt="Pause"
              />
            ) : (
              <img
                style={styles.playAndPauseIcon}
                src="/audioPlayer/play.png"
                alt="Play"
              />
            )}
          </button>
        </>
      )}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnd}
      />
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
