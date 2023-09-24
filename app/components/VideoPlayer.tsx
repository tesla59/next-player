"use client";
import { useRef, useState } from "react";
import styles from './VideoPlayer.module.css';

interface VideoArgs {
    Url: string
}

export default function VideoPlayer({ Url }: VideoArgs) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(1);
    const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);

        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };
    const handleSpeedChange = (newSpeed: number) => {
        setPlaybackSpeed(newSpeed);

        if (videoRef.current) {
            videoRef.current.playbackRate = newSpeed;
        }
    };
    return (
        <div className={styles.player}>
            <video width={1280} height={720} ref={videoRef} onClick={handlePlayPause}>
                <source src={Url} type="video/mp4"></source>
            </video>
            <div className={styles.btn_row}>
                <button className={styles.btn} onClick={handlePlayPause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <div>
                    <div className={styles.vol}>
                        <label htmlFor="volumeControl">Volume:</label>
                        <input
                            type="range"
                            id="volumeControl"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </div>
                    <div className={styles.speed}>
                        <label>Speed:</label>
                        <div>
                            <button className={styles.button} onClick={() => handleSpeedChange(0.5)}>0.5x</button>
                            <button className={styles.button} onClick={() => handleSpeedChange(0.75)}>0.75x</button>
                            <button className={styles.button} onClick={() => handleSpeedChange(1)}>1x</button>
                            <button className={styles.button} onClick={() => handleSpeedChange(1.25)}>1.25x</button>
                            <button className={styles.button} onClick={() => handleSpeedChange(1.5)}>1.5x</button>
                            <button className={styles.button} onClick={() => handleSpeedChange(2)}>2x</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
