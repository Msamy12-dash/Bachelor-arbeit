"use client";

import { useCursors } from "./CursorProvider";
import OtherCursor from "./OtherCursors";

export default function Cursors() {
  const { others } = useCursors();

  return (
    <div
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {Object.keys(others).map((id) => (
        <div key={`cursor-${id}`}>
          <OtherCursor id={id} />
        </div>
      ))}
      {/*
        <!-- set overflow-hidden on body to prevent scrolling,
        otherwise reflecting the touch cursor is out of place. -->
        <MyCursor />
        */}
    </div>
  );
}