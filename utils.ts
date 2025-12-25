import { createDefine } from "fresh";
import { signal } from "@preact/signals";
// This specifies the type of "ctx.state" which is used to share
// data among middlewares, layouts and routes.
export interface State {
  shared: string;
}

export const define = createDefine<State>();

//p2
export function useTick(interval = 1000) {
  const tick = signal(Date.now());

  let timer: number;

  const start = () => {
    stop();
    tick.value = Date.now();
    timer = setInterval(() => {
      tick.value = Date.now();
    }, interval);
  };

  const stop = () => {
    if (timer) clearInterval(timer);
  };

  return { tick, start, stop };
}
