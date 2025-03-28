import { Variants } from 'framer-motion';

export const transitions = {
  default: {
    type: 'spring',
    duration: 0.3,
    bounce: 0.25,
  },
  smooth: {
    type: 'tween',
    duration: 0.3,
    ease: 'easeInOut',
  },
  bounce: {
    type: 'spring',
    duration: 0.5,
    bounce: 0.5,
  },
} as const;

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  },
  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  },
  slideLeft: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  },
  slideRight: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
  },
} satisfies Record<string, Variants>;

export type AnimationName = keyof typeof animations;
export type TransitionName = keyof typeof transitions; 