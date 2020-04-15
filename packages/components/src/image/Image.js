import React, { useRef } from 'react';
import Types from 'prop-types';
import { useHasIntersected } from '../common/hooks';

/**
 * Image component provides a wrapper for image tag. Optional lazy loading functionalities can also be enabled passing prop loading = "lazy.
 * Once element intersects viewport image loads.
 *
 * @param {string} [alt=""] - string that contains the alt text. Required.
 * @param {string} [src=""] - string that contains the src text. Required.
 * @param {string} [id=""] - string that contains the id text.
 * @param {function} [onLoad=()=>{}] - function that contains load callback. Doesn't fire on SSR https://github.com/facebook/react/issues/15446
 * @param {function} [onError=()=>{}] - function that contains error callback. Doesn't fire on SSR https://github.com/facebook/react/issues/15446
 * @param {boolean} [loading="lazy"] - This attribute follows the loading API attribute. If set to eager image will load immediately just like a normal image tag otherwise it will lazy load.
 *
 * @usage `<Image alt="alt" src="src" id="id1" onLoad={()=>{}} onError={())=>{}} loading="lazy" />`
 * */

export const EmptyTransparentImage =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

const Image = ({ id, src, alt, onLoad, onError, className, loading }) => {
  const elRef = useRef();
  const [hasIntersected] = useHasIntersected({ elRef, loading });
  let imageSrc = src;
  let imageOnLoad = onLoad;

  if (loading === 'lazy' && !hasIntersected) {
    imageSrc = EmptyTransparentImage;
    imageOnLoad = null;
  }

  return (
    <img
      id={id}
      alt={alt}
      src={imageSrc}
      className={className}
      ref={elRef}
      onLoad={imageOnLoad}
      onError={onError}
    />
  );
};

Image.propTypes = {
  id: Types.string,
  src: Types.string.isRequired,
  alt: Types.string.isRequired,
  onLoad: Types.func,
  onError: Types.func,
  className: Types.string,
  loading: Types.oneOf(['lazy', 'eager']),
};

Image.defaultProps = {
  id: null,
  className: '',
  onLoad: () => {},
  onError: () => {},
  loading: 'eager',
};

export default Image;
