import "./Song.css";
import fadeIntoYou from "../../../Assets/Audio/fade-into-you.mp3";
import { useRef, useState } from "react";

export function Song(): JSX.Element {

    const [playPauseIcon, setPlayPauseIcon] = useState<string>("🎶");

    // Wrapper around the audio element allowing access to it:
    const audioRef = useRef<HTMLAudioElement>();

    function play() {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setPlayPauseIcon("⏸");
        }
        else {
            audioRef.current.pause();
            setPlayPauseIcon("🎶");
        }
    }

    function stop() {
        audioRef.current.load();
    }

    return (
        <div className="Song">

            <audio src={fadeIntoYou} ref={audioRef} />

            <button onClick={play}>{playPauseIcon}</button>
            <button onClick={stop}>⏹</button>

        </div>
    );
}
