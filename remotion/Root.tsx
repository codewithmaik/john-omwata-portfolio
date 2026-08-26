import { Composition } from "remotion";
import {
  PROCESS_VIDEO_DURATION_IN_FRAMES,
  PROCESS_VIDEO_FPS,
  PROCESS_VIDEO_HEIGHT,
  PROCESS_VIDEO_WIDTH,
  ProcessVideo,
} from "./ProcessVideo";

export function RemotionRoot() {
  return (
    <Composition
      id="ProcessVideo"
      component={ProcessVideo}
      durationInFrames={PROCESS_VIDEO_DURATION_IN_FRAMES}
      fps={PROCESS_VIDEO_FPS}
      width={PROCESS_VIDEO_WIDTH}
      height={PROCESS_VIDEO_HEIGHT}
    />
  );
}
