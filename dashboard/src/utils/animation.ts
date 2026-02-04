const ANIMATION_THRESHOLD = 100;

export function getAnimationConfig(recordCount: number) {
  const shouldDisableAnimation = recordCount > ANIMATION_THRESHOLD;
  return {
    animation: !shouldDisableAnimation,
  };
}
