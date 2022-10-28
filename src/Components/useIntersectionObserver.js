import {useEffect, useState} from 'react';

const useIntersectionObserver = (reference) => {
  const [visibleToViewer, setVisibleToViewer] = useState(false);

  // Set up logic on mount
  useEffect(() => {
    // Respond to item become visible to viewer
    // itemsObserved is an array of items being observed
    const handleIntersect = (itemsObserved, observer) => {
      if (itemsObserved[0].isIntersecting) {
        setVisibleToViewer(true);
        observer.unobserve(itemsObserved[0].target);  // stop observing after item becomes visible to viewer
        observer.disconnect();
      }
    }

    // Create observer to observe items to check if they are visible to viewer
    const observer = new IntersectionObserver(handleIntersect);

    // If there is a ref value, start observing it with observer
    if (reference) {
      observer.observe(reference.current);
    }

    // Disconnect the observer if unmounting
    return () => observer.disconnect();

  }, [reference]);

  return visibleToViewer;
}

export default useIntersectionObserver;
