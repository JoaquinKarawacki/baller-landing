import { useEffect, useRef, useState } from "react";

type Line = { role: string; text: string };

type Props = {
  lines: Line[];
  /** ms entre cada línea (default 600) */
  lineDelay?: number;
  /** si true, espera a entrar en viewport para reproducir (default true) */
  startOnView?: boolean;
};

export default function ChatSnippet({
  lines,
  lineDelay = 600,
  startOnView = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(!startOnView); // si no esperamos, arranca ya

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [startOnView]);

  return (
    <div ref={ref} className={`demo-snippet ${playing ? "is-playing" : ""}`}>
      {lines.map((l, i) => (
        <div
          key={i}
          className="snippet-line anim"
          style={{ animationDelay: `${i * lineDelay}ms` }}
        >
          <span className="label">{l.role}:</span>
          <span className="text">{l.text}</span>
        </div>
      ))}
    </div>
  );
}
