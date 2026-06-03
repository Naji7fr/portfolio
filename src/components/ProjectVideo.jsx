import React from 'react';

/**
 * Embedded project demo video (screen recording).
 */
function ProjectVideo({ src, title }) {
  return (
    <div className="project-card-img-wrap project-video-wrap">
      <video
        className="project-card-video"
        src={src}
        controls
        playsInline
        preload="metadata"
        aria-label={`${title} demo video`}
      >
        Your browser does not support video playback.
      </video>
    </div>
  );
}

export default ProjectVideo;
