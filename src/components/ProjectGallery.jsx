import React, { useEffect, useRef, useState } from 'react';

/**
 * Image carousel for projects with multiple screenshots.
 */
function ProjectGallery({
  images,
  alt,
  containIndexes = [],
  scrollIndexes = [],
  fitAll = false
}) {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);
  const total = images.length;
  const isScrollable = scrollIndexes.includes(index);
  const fitContain = !isScrollable && (fitAll || containIndexes.includes(index));

  const goTo = (next) => {
    setIndex((i) => (i + next + total) % total);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [index]);

  const wrapClass = [
    'project-card-img-wrap',
    'project-gallery',
    fitContain && 'project-gallery--contain',
    fitAll && 'project-gallery--contain-full',
    isScrollable && 'project-gallery--scroll'
  ]
    .filter(Boolean)
    .join(' ');

  const imgClass = [
    'project-card-img',
    fitContain && 'project-card-img--fit-contain',
    isScrollable && 'project-card-img--scroll'
  ]
    .filter(Boolean)
    .join(' ');

  const image = (
    <img
      src={images[index]}
      alt={`${alt} – screenshot ${index + 1}`}
      className={imgClass}
      loading="lazy"
      draggable={false}
    />
  );

  return (
    <div className={wrapClass}>
      {isScrollable ? (
        <div ref={scrollRef} className="project-gallery-scroll-inner">
          {image}
        </div>
      ) : (
        image
      )}
      {isScrollable && (
        <span className="project-gallery-scroll-hint" aria-hidden="true">
          Scroll ↓
        </span>
      )}
      {total > 1 && (
        <>
          <button
            type="button"
            className="project-gallery-btn project-gallery-btn--prev"
            onClick={() => goTo(-1)}
            aria-label="Previous screenshot"
          >
            ‹
          </button>
          <button
            type="button"
            className="project-gallery-btn project-gallery-btn--next"
            onClick={() => goTo(1)}
            aria-label="Next screenshot"
          >
            ›
          </button>
          <div className="project-gallery-dots" role="tablist" aria-label="Screenshots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Screenshot ${i + 1}`}
                className={`project-gallery-dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectGallery;
