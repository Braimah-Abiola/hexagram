import React from 'react';

const TikTokVideo = ({ videoSrc }) => {
  return (
    <div style={{ borderRadius: '10px' }}>
      <video
        style={{ borderRadius: '10px' }}
        src={videoSrc}
        muted
        width="1080"
        height="1920"
        autoPlay
        loop
      />
    </div>
  );
};

export default TikTokVideo;