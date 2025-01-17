export const smoothScrollTo = (targetY: number) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 200; 
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);
    const easing = percentage * (2 - percentage);
    window.scrollTo(0, startY + distance * easing);

    if (percentage < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};
