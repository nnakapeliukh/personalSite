import React from "react";

export default function TextMask() {
  return (
    <svg style={{}} viewBox="0 0 100 100">
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="50%" fill="#fff" />
          <text textAnchor="middle" x="50" y="18" dy="1" fontSize="10">
            Your&apos;s is the Earth,
          </text>
          <text textAnchor="middle" x="50" y="30" dy="1" fontSize="7">
            and everything that&apos;s in it
          </text>
        </mask>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        mask="url(#mask)"
        fillOpacity="0.9"
      />
    </svg>
  );
}
