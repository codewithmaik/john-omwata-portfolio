import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";
import { loadFont as loadSerif } from "@remotion/google-fonts/PlayfairDisplay";
import type { ReactNode } from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const { fontFamily: monoFont } = loadMono();
const { fontFamily: serifFont } = loadSerif();

export const PROCESS_VIDEO_FPS = 30;
export const PROCESS_VIDEO_WIDTH = 900;
export const PROCESS_VIDEO_HEIGHT = 700;

const INTRO_LEN = 15;
const SCENE_LEN = 85;
const OUTRO_LEN = 45;
const SCENE_COUNT = 4;
const FADE_OUT_AT = SCENE_LEN - 12;

export const PROCESS_VIDEO_DURATION_IN_FRAMES =
  INTRO_LEN + SCENE_LEN * SCENE_COUNT + OUTRO_LEN;

const COLORS = {
  forestDeep: "#0f211a",
  sage: "#7fa672",
  sageLight: "#c9d9c7",
  lineDark: "rgba(255,255,255,0.12)",
  white: "#ffffff",
};

const scenes = [
  { number: "01", title: "Discover" },
  { number: "02", title: "Design" },
  { number: "03", title: "Build" },
  { number: "04", title: "Deploy & Support" },
];

function easeIn(local: number, start: number, len = 10) {
  return interpolate(local, [start, start + len], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function sceneOpacity(local: number) {
  return interpolate(local, [0, 10, FADE_OUT_AT, SCENE_LEN], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function sceneShift(local: number) {
  return interpolate(
    local,
    [0, 12, FADE_OUT_AT, SCENE_LEN],
    [14, 0, 0, -10],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
}

function StepLabel({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div
        style={{
          flexShrink: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1.5px solid ${COLORS.sage}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: monoFont,
          fontSize: 13,
          fontWeight: 600,
          color: COLORS.sage,
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontFamily: serifFont,
          fontSize: 25,
          fontWeight: 600,
          color: COLORS.white,
        }}
      >
        {title}
      </div>
    </div>
  );
}

function DiscoverScene({ local }: { local: number }) {
  const lines = [
    "Understand the business",
    "Map the audience",
    "Define what the site must do",
  ];
  const lineStart = 20;
  const lineGap = 13;

  return (
    <div style={{ marginTop: 40 }}>
      <div
        style={{
          border: `1px solid ${COLORS.lineDark}`,
          borderRadius: 8,
          padding: "24px 28px",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div
          style={{
            fontFamily: monoFont,
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            marginBottom: 20,
          }}
        >
          brief.txt
        </div>
        {lines.map((line, i) => {
          const start = lineStart + i * lineGap;
          const enter = easeIn(local, start, 10);
          const checked = easeIn(local, start + 12, 6);
          return (
            <div
              key={line}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                opacity: enter,
                transform: `translateX(${interpolate(enter, [0, 1], [-10, 0])}px)`,
                marginBottom: 14,
                fontFamily: monoFont,
                fontSize: 16,
                color: COLORS.sageLight,
              }}
            >
              <span
                style={{
                  color: COLORS.sage,
                  opacity: checked,
                  width: 14,
                  display: "inline-block",
                }}
              >
                ✓
              </span>
              <span>{line}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DesignScene({ local }: { local: number }) {
  const frameIn = easeIn(local, 14, 10);
  const heroIn = easeIn(local, 26, 10);
  const cardStart = 42;
  const cardGap = 7;
  const cards = [0, 1, 2].map((i) => easeIn(local, cardStart + i * cardGap, 10));

  return (
    <div style={{ marginTop: 40 }}>
      <div
        style={{
          opacity: frameIn,
          transform: `scale(${interpolate(frameIn, [0, 1], [0.96, 1])})`,
          border: `1px solid ${COLORS.lineDark}`,
          borderRadius: 8,
          padding: 20,
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        <div
          style={{
            opacity: heroIn,
            transform: `translateY(${interpolate(heroIn, [0, 1], [10, 0])}px)`,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: "60%",
              height: 12,
              borderRadius: 3,
              background: COLORS.sage,
              opacity: 0.85,
              marginBottom: 8,
            }}
          />
          <div
            style={{
              width: "40%",
              height: 8,
              borderRadius: 3,
              background: "rgba(255,255,255,0.25)",
              marginBottom: 12,
            }}
          />
          <div
            style={{
              width: 90,
              height: 22,
              borderRadius: 3,
              border: `1px solid ${COLORS.sage}`,
            }}
          />
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 64,
                borderRadius: 6,
                border: `1px solid ${COLORS.lineDark}`,
                opacity: c,
                transform: `translateY(${interpolate(c, [0, 1], [8, 0])}px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BuildScene({ local }: { local: number }) {
  const codeLines: { text: string; color: string }[][] = [
    [
      { text: "export function", color: COLORS.sage },
      { text: " Hero() {", color: COLORS.white },
    ],
    [{ text: "  return (", color: COLORS.white }],
    [
      { text: "    <section", color: COLORS.sageLight },
      { text: " className=", color: COLORS.white },
      { text: '"hero"', color: COLORS.sage },
      { text: ">", color: COLORS.sageLight },
    ],
    [
      { text: "      <h1>", color: COLORS.sageLight },
      { text: "Websites that load fast", color: COLORS.white },
      { text: "</h1>", color: COLORS.sageLight },
    ],
    [{ text: "    </section>", color: COLORS.sageLight }],
    [{ text: "  );", color: COLORS.white }],
    [{ text: "}", color: COLORS.white }],
  ];

  const lineStart = 14;
  const lineGap = 7;

  return (
    <div style={{ marginTop: 40 }}>
      <div
        style={{
          border: `1px solid ${COLORS.lineDark}`,
          borderRadius: 8,
          padding: "22px 26px",
          background: "rgba(255,255,255,0.02)",
          fontFamily: monoFont,
          fontSize: 15,
          lineHeight: 1.7,
        }}
      >
        {codeLines.map((tokens, i) => {
          const start = lineStart + i * lineGap;
          const enter = easeIn(local, start, 5);
          const isLastRevealing = local >= start && local < start + 5 && enter < 1;
          return (
            <div
              key={i}
              style={{ display: "flex", opacity: enter, whiteSpace: "pre" }}
            >
              <span
                style={{
                  width: 20,
                  color: "rgba(255,255,255,0.25)",
                  marginRight: 16,
                }}
              >
                {i + 1}
              </span>
              <span>
                {tokens.map((t, j) => (
                  <span key={j} style={{ color: t.color }}>
                    {t.text}
                  </span>
                ))}
                {isLastRevealing && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 15,
                      marginLeft: 2,
                      background: COLORS.sageLight,
                      opacity: Math.round(local / 4) % 2 === 0 ? 1 : 0,
                    }}
                  />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DeployScene({ local }: { local: number }) {
  const commands = [
    { cmd: "deploy --production", result: "done", start: 12 },
    { cmd: "connect domain", result: "linked", start: 28 },
  ];
  const liveStart = 52;
  const liveIn = easeIn(local, liveStart, 10);
  const pulse = interpolate(
    (local - liveStart) % 40,
    [0, 20, 40],
    [0.5, 1, 0.5],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div style={{ marginTop: 40 }}>
      <div
        style={{
          border: `1px solid ${COLORS.lineDark}`,
          borderRadius: 8,
          padding: "22px 26px",
          background: "rgba(255,255,255,0.02)",
          fontFamily: monoFont,
          fontSize: 15,
        }}
      >
        {commands.map((c) => {
          const typed = easeIn(local, c.start, 10);
          const done = easeIn(local, c.start + 12, 4);
          return (
            <div
              key={c.cmd}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
                opacity: typed > 0 ? 1 : 0,
              }}
            >
              <span style={{ color: COLORS.sage }}>$</span>
              <span style={{ color: COLORS.sageLight }}>{c.cmd}</span>
              <span style={{ marginLeft: "auto", color: COLORS.sage, opacity: done }}>
                ✓ {c.result}
              </span>
            </div>
          );
        })}

        <div
          style={{
            marginTop: 20,
            paddingTop: 18,
            borderTop: `1px solid ${COLORS.lineDark}`,
            display: "flex",
            alignItems: "center",
            gap: 10,
            opacity: liveIn,
            transform: `translateY(${interpolate(liveIn, [0, 1], [8, 0])}px)`,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: COLORS.sage,
              opacity: pulse,
            }}
          />
          <span style={{ color: COLORS.white, fontSize: 14 }}>Live at</span>
          <span style={{ color: COLORS.sage, fontSize: 14 }}>your-domain.com</span>
        </div>
      </div>
    </div>
  );
}

function Scene({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: (local: number) => ReactNode;
}) {
  const frame = useCurrentFrame();
  const opacity = sceneOpacity(frame);
  const shift = sceneShift(frame);

  return (
    <div style={{ opacity, transform: `translateY(${shift}px)` }}>
      <StepLabel number={number} title={title} />
      {children(frame)}
    </div>
  );
}

function ProgressDots({ active }: { active: number }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {scenes.map((_, i) => (
        <span
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: i === active ? COLORS.sage : "rgba(255,255,255,0.18)",
          }}
        />
      ))}
    </div>
  );
}

export function ProcessVideo() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const chromeOpacity = easeIn(frame, 0, 12);

  const activeScene = Math.min(
    Math.max(Math.floor((frame - INTRO_LEN) / SCENE_LEN), 0),
    SCENE_COUNT - 1,
  );

  const outroStart = INTRO_LEN + SCENE_LEN * SCENE_COUNT;
  const outroOpacity = easeIn(frame, outroStart, 20);

  const fadeOutStart = durationInFrames - 15;
  const fadeOut = interpolate(frame, [fadeOutStart, durationInFrames], [1, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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
            padding: "26px 40px",
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
          <span style={{ marginLeft: "auto" }}>
            <ProgressDots active={activeScene} />
          </span>
        </div>

        <div style={{ position: "relative", flex: 1, padding: "0 44px" }}>
          {scenes.map((s, i) => (
            <Sequence
              key={s.number}
              from={INTRO_LEN + i * SCENE_LEN}
              durationInFrames={SCENE_LEN}
              layout="none"
            >
              <Scene number={s.number} title={s.title}>
                {(local) => {
                  if (i === 0) return <DiscoverScene local={local} />;
                  if (i === 1) return <DesignScene local={local} />;
                  if (i === 2) return <BuildScene local={local} />;
                  return <DeployScene local={local} />;
                }}
              </Scene>
            </Sequence>
          ))}
        </div>

        <div
          style={{
            padding: "0 44px 40px",
            opacity: outroOpacity,
            transform: `translateY(${interpolate(outroOpacity, [0, 1], [10, 0])}px)`,
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
            One person, start to <span style={{ color: COLORS.sage }}>finish.</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
