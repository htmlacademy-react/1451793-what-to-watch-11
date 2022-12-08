import { ChangeEvent, useRef, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';

import { formatSecondsToTime } from '../../utils';

import { Films } from '../../types/films';
import Spinner from '../../components/spinner/spinner';

type Props = {
  films: Films;
};

const PlayerScreen = ({ films }: Props): JSX.Element => {
  const params = useParams();
  const currentFilm = films.find((film) => film.id === Number(params.id));

  const videoRef = useRef<HTMLVideoElement>(null);

  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const handlePlayBtnClick = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current?.currentTime / videoRef.current?.duration) * 100;
      setProgress(currentProgress);
      setTimeLeft(videoRef.current.duration - videoRef.current.currentTime);
    }
  };

  const handleVideoProgress = (evt: ChangeEvent<HTMLInputElement>) => {
    const progressValue = Number(evt.target.value);

    if (videoRef.current) {
      videoRef.current.currentTime = (videoRef.current.duration / 100) * progressValue;
      setProgress(progressValue);
    }
  };

  const handleExitBtnClick = () => {
    if (currentFilm) {
      const path = `/films/${currentFilm.id}`;

      navigate(path);
    }
  };

  return (
    <div className="player">
      <Helmet>
        <title>Что посмотреть. Проигрыватель</title>
      </Helmet>
      {isLoading && <Spinner />}

      <video
        onLoadStart={() => setIsLoading(true)}
        onCanPlayThrough={() => setIsLoading(false)}
        autoPlay
        src={currentFilm?.videoLink}
        className="player__video"
        poster={currentFilm?.backgroundImage}
        ref={videoRef}
        muted
        onClick={handlePlayBtnClick}
        onTimeUpdate={handleTimeUpdate}
        onDoubleClick={() => {
          videoRef.current?.requestFullscreen();
        }}
      >
      </video>

      <button type="button" className="player__exit" onClick={handleExitBtnClick}>
        Exit
      </button>


      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(evt) => handleVideoProgress(evt)}
              style={{ width: '100%' }}
            />
          </div>
          <div className="player__time-value">{formatSecondsToTime(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayBtnClick}>
            {isPlaying ? (
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
            ) : (
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
            )}
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm?.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => {
              videoRef.current?.requestFullscreen();
            }}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerScreen;
