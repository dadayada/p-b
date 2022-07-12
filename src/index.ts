import { createEvent } from 'effector';
import { interval } from 'patronum';

export const start = createEvent();

interval({ start, timeout: 1000  })