// app/components/Icon.js
"use client";

const paths = {
  key: (
    <>
      <circle cx="8" cy="8" r="5" />
      <path d="M11.5 11.5 21 21M16 16l3-3M19 19l2-2" />
    </>
  ),
  wifi: (
    <>
      <path d="M2 8.5a16 16 0 0 1 20 0" />
      <path d="M5 12a11 11 0 0 1 14 0" />
      <path d="M8.5 15.5a6 6 0 0 1 7 0" />
      <circle cx="12" cy="19" r="0.6" />
    </>
  ),
  flame: (
    <path d="M12 3c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.5.6-2.5 1.3-3.3C9 9 9.5 11 11 11c1.2 0 1.4-1.7.4-3.3C10.5 6 12 4 12 3Z" />
  ),
  thermometer: (
    <>
      <path d="M12 3.5a2 2 0 0 1 2 2v8.2a4 4 0 1 1-4 0V5.5a2 2 0 0 1 2-2Z" />
      <path d="M12 14V8" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  door: (
    <>
      <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
      <path d="M4 21h16" />
      <circle cx="14.5" cy="12" r="0.7" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M4 19a2 2 0 0 1 2-2h13" />
    </>
  ),
};

export default function Icon({ name, className = "gc-icon" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || paths.book}
    </svg>
  );
}
