import React, { useEffect, useRef } from "react";

const SIZE = 12;
const RING_SIZE = 28;
const RING_RELATIVES = 12;

const CustomCursor = () => {
  const rootRef = useRef(null);
  const stateRef = useRef({
    x: -100,
    y: -100,
    tx: -100,
    ty: -100,
    rafId: 0,
    visible: false,
  });

  // Only render for precise pointers (mouse/trackpad); touch devices keep the native cursor.
  const canRender =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!canRender) return;
    const el = rootRef.current;
    if (!el) return;

    const root = document.documentElement;
    const s = stateRef.current;

    // Give the ring a valid initial offset so it never renders with NaN transforms.
    if (s.rx == null) {
      s.rx = s.tx;
      s.ry = s.ty;
    }

    root.classList.add("custom-cursor");

    const apply = () => {
      if (!s.visible) {
        el.style.opacity = "0";
        return;
      }
      el.style.transform = `translate3d(${Math.round(s.x)}px, ${Math.round(s.y)}px, 0)`;
      el.style.opacity = "1";
    };

    const tick = () => {
      s.rafId = 0;

      // Dot: smooth follow with the primary easing.
      const dx = s.tx - s.x;
      const dy = s.ty - s.y;
      if (Math.hypot(dx, dy) > 0.5) {
        s.x += dx * 0.24;
        s.y += dy * 0.24;
      } else {
        s.x = s.tx;
        s.y = s.ty;
      }

      // Follower ring: lazier trail that lags behind the dot.
      const rdx = s.x - s.rx;
      const rdy = s.y - s.ry;
      if (Math.hypot(rdx, rdy) > 0.5) {
        s.rx += rdx * 0.12;
        s.ry += rdy * 0.12;
      } else {
        s.rx = s.x;
        s.ry = s.y;
      }

      apply();
      s.rafId = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!s.rafId) s.rafId = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      s.tx = e.clientX;
      s.ty = e.clientY;
      if (!s.visible) {
        s.visible = true;
        s.x = s.tx;
        s.y = s.ty;
        s.rx = s.tx;
        s.ry = s.ty;
        apply();
      }
      wake();
    };

    const onOver = (e) => {
      const target = e.target;
      const interactive =
        target && target.closest
          ? target.closest(
              'a, button, [role="button"], [role="link"], input, select, textarea, summary, label, [onclick]'
            )
          : null;
      el.classList.toggle("cursor-hover", Boolean(interactive));
    };

    const onLeave = () => {
      s.visible = false;
      apply();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      if (s.rafId) cancelAnimationFrame(s.rafId);
      root.classList.remove("custom-cursor");
    };
  }, [canRender]);

  if (!canRender) return null;  const ringRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    let ringRAF = 0;
    const scheduleRingUpdate = () => {
      if (!ringRAF) {
        ringRAF = requestAnimationFrame(() => {
          ringRAF = 0;
          const s = stateRef.current;
          ring.style.transform = `translate3d(${Math.round(s.rx - s.x)}px, ${Math.round(s.ry - s.y)}px, 0)`;
        });
      }
    };

    const origTick = tick;
    tick = () => {
      origTick();
      scheduleRingUpdate();
    };

    return () => {
      tick = origTick;
      if (ringRAF) cancelAnimationFrame(ringRAF);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="cursor-fx"
      style={{ width: SIZE, height: SIZE, marginLeft: -SIZE / 2, marginTop: -SIZE / 2 }}
    >
      {/* Subtle trailing ring for depth */}
      <div
        ref={ringRef}
        className="absolute cursor-ring rounded-full bg-[var(--color-cursor-light)]/15 shadow-[0_0_14px_var(--color-cursor-glow)]"
        style={{
          width: RING_SIZE,
          height: RING_SIZE,
          marginLeft: -RING_SIZE / 2,
          marginTop: -RING_SIZE / 2,
        }}
      />
      {/* Main dot */}
      <div className="cursor-dot h-full w-full rounded-full bg-[var(--color-cursor-light)] shadow-[0_0_10px_var(--color-cursor-glow)]" />
    </div>
  );
};

export default CustomCursor;
