import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
  const dom = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    };
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      };
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;

// 주의점 
// 스크롤 애니메이션을 적용하면서 IntersectionObserver의 threshold 값 때문에 이런 현상이 발생할 수 있습니다.
// IntersectionObserver는 타겟 요소가 뷰포트(viewport)에 들어왔는지 감시하는 역할을 합니다. 
// 그리고 threshold 옵션은 타겟 요소가 얼마나 뷰포트에 들어와야 callback 함수를 실행할지를 결정합니다. 현재 코드에서는 threshold 값을 0.7로 설정하였으므로, 
// 타겟 요소의 70%가 뷰포트에 들어와야 애니메이션이 실행됩니다.
// 해상도가 낮아지면서 뷰포트의 크기가 줄어들었을 때,
// 마지막 카드는 70% 이상 뷰포트에 들어오지 못하고 있을 수 있습니다. 그래서 마지막 카드의 애니메이션이 실행되지 않는 것입니다.
// 이 문제를 해결하기 위해서는 threshold 값을 줄이면 됩니다. 예를 들어, threshold 값을 0.1로 설정하면 타겟 요소의 10%만 뷰포트에 들어와도 애니메이션이 실행됩니다.

// ++
// 하지만 이 값은 상황에 따라 적절히 조절해야 합니다. 
// 너무 낮게 설정하면 사용자가 스크롤을 조금 움직였을 때
// 애니메이션이 미리 실행되어 버리는 문제가 발생할 수 있습니다.




