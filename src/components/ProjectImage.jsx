import React, { useEffect, useState } from 'react';

const PHOTO_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

/**
 * Shows project image. Uses a photo in public/projects/ if present, otherwise fallback.
 */
function ProjectImage({ slug, fallback, alt, title }) {
  const [src, setSrc] = useState(fallback);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let extIndex = 0;

    const tryPhoto = () => {
      if (cancelled || extIndex >= PHOTO_EXTENSIONS.length) return;

      const test = new Image();
      const url = `/projects/${slug}.${PHOTO_EXTENSIONS[extIndex]}`;

      test.onload = () => {
        if (!cancelled) setSrc(url);
      };
      test.onerror = () => {
        extIndex += 1;
        tryPhoto();
      };
      test.src = url;
    };

    tryPhoto();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const handleError = () => setShowPlaceholder(true);

  if (showPlaceholder) {
    return (
      <div className="project-card-img-wrap">
        <div className="project-card-img project-card-img--placeholder" aria-hidden="true">
          <span>{title}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card-img-wrap">
      <img
        src={src}
        alt={alt}
        className="project-card-img"
        loading="lazy"
        onError={handleError}
      />
    </div>
  );
}

export default ProjectImage;
