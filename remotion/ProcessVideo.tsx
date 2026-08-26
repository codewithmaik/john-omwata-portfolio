import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";
import { loadFont as loadSerif } from "@remotion/google-fonts/PlayfairDisplay";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const { fontFamily: monoFont } = loadMono();
const { fontFamily: serifFont } = loadSerif();

export const PROCESS_VIDEO_FPS = 30;
export const PROCESS_VIDEO_WIDTH = 900;
export const PROCESS_VIDEO_HEIGHT = 700;
export const PROCESS_VIDEO_DURATION_IN_FRAMES = 225;

const COLORS = {
  forestDeep: "#0f211a",
  sage: "#7fa672",
  sageLight: "#c9d9c7",
  lineDark: "rgba(255,255,255,0.12)",
  white: "#ffffff",
};

const steps = [
  { number: "01", title: "Discover" },
  { number: "02", title: "Design" },
  { number: "03", title: "Build" },
  { number: "04", title: "Deploy & Support" },
];

const STEP_SPACING = 45;
const STEP_START = 22;
const CHECK_OFFSET = 30;

function Step({
  index,
  number,
  title,
}: {
  index: number;
  number: string;
  title: string;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = STEP_START + index * STEP_SPACING;

  const enter = spring({
    frame: frame - start,
    fps,
    config: { damping: 200, stiffness: 180 },
  });

  const checkProgress = spring({
    frame: frame - (start + CHECK_OFFSET),
    fps,
    config: { damping: 200, stiffness: 220 },
  });

  const isLast = index === steps.length - 1;
  const lineHeight = interpolate(enter, [0, 1], [0, 64], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        gap: 22,
        opacity: enter,
        transform: `translateY(${interpolate(enter, [0, 1], [16, 0])}px)`,
        paddingBottom: isLast ? 0 : 44,
      }}
    >
      {!isLast && (
        <div
          style={{
            position: "absolute",
            top: 46,
            left: 21,
            width: 1,
            height: lineHeight,
            background: COLORS.lineDark,
          }}
        />
      )}

      <div
        style={{
          flexShrink: 0,
          width: 42,
          height: 42,
          borderRadius: "50%",
          border: `1.5px solid ${COLORS.sage}`,
          background: `rgba(127,166,114,${checkProgress * 1})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: monoFont,
          fontSize: 14,
          fontWeight: 600,
          color: checkProgress > 0.5 ? COLORS.forestDeep : COLORS.sage,
        }}
      >
        {checkProgress > 0.5 ? "✓" : number}
      </div>

      <div style={{ paddingTop: 6 }}>
        <div
          style={{
            fontFamily: serifFont,
            fontSize: 27,
            fontWeight: 600,
            color: COLORS.white,
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export function ProcessVideo() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const chromeOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const taglineStart = STEP_START + steps.length * STEP_SPACING + 6;
  const taglineOpacity = interpolate(
    frame,
    [taglineStart, taglineStart + 18],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const fadeOutStart = durationInFrames - 18;
  const fadeOut = interpolate(
    frame,
    [fadeOutStart, durationInFrames],
    [1, 0.92],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.forestDeep }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 85% -5%, rgba(127,166,114,0.18), transparent 60%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          opacity: fadeOut,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "30px 40px",
            borderBottom: `1px solid ${COLORS.lineDark}`,
            opacity: chromeOpacity,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.25)",
              }}
            />
          ))}
          <span
            style={{
              marginLeft: 10,
              fontFamily: monoFont,
              fontSize: 15,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.02em",
            }}
          >
            process — build.log
          </span>
        </div>

        <div
          style={{
            padding: "40px 44px 0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {steps.map((step, i) => (
            <Sequence key={step.number} from={0} layout="none">
              <Step index={i} number={step.number} title={step.title} />
            </Sequence>
          ))}
        </div>

        <div
          style={{
            padding: "0 44px 40px",
            marginTop: "auto",
            opacity: taglineOpacity,
            transform: `translateY(${interpolate(taglineOpacity, [0, 1], [10, 0])}px)`,
          }}
        >
          <div
            style={{
              borderTop: `1px solid ${COLORS.lineDark}`,
              paddingTop: 22,
              fontFamily: monoFont,
              fontSize: 15,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            One person, start to{" "}
            <span style={{ color: COLORS.sage }}>finish.</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
