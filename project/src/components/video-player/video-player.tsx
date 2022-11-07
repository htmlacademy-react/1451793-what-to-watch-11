import { useRef, useEffect } from 'react';

import { VIDEO_TIMEOUT } from '../../const';

import { Film } from '../../types/film';

type Props = {
  film: Film;
  width: string;
  height: string;
  isPlaying: boolean;
};

const VideoPlayer = ({ film, width, height, isPlaying }: Props): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, VIDEO_TIMEOUT);
    }

    return () => clearTimeout(timer);
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      width={width}
      height={height}
      poster={film.previewImage}
      muted
      preload="metadata"
    >
      <source src={film.previewVideoLink} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
