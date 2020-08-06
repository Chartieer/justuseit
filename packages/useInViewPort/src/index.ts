import { useEffect, useState, useRef } from 'react';
import 'intersection-observer';
import { getTargetElement, BasicTarget } from './dom';

type InViewport = boolean | undefined;

function isInViewPort(el: HTMLElement): boolean {
  if (!el) {
    return false;
  }

  const viewPortWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  const rect = el.getBoundingClientRect();

  if (rect) {
    const { top, bottom, left, right } = rect;
    return (
      bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0
    );
  }

  return false;
}

function useInViewport(): [InViewport, React.MutableRefObject<any | null>] {
  const ref = useRef(null);
  const [inViewPort, setInViewport] = useState<InViewport>(() => {
    const el = getTargetElement(ref);

    return isInViewPort(el as HTMLElement);
  });

  useEffect(() => {
    const el = getTargetElement(ref);
    if (!el) {
      return () => {};
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInViewport(true);
        } else {
          setInViewport(false);
        }
      }
    });

    observer.observe(el as HTMLElement);

    return () => {
      observer.disconnect();
    };
  }, [typeof ref === 'function' ? undefined : ref]);

  return [inViewPort, ref];
}

export default useInViewport;
