import { useState } from "react";
import factoryMacao from "@/assets/about-beira.jpg";
import factoryAlcochete from "@/assets/hero-charcutaria.jpg";

type Marker = { name: string; lat: number; lon: number; detail?: string; image: string; caption: string };

const MARKERS: Marker[] = [
  {
    name: "Mação",
    lat: 39.5527,
    lon: -7.9925,
    detail: "Fábrica · Beira Baixa",
    image: factoryMacao,
    caption: "Unidade de produção — Mação",
  },
  {
    name: "Alcochete",
    lat: 38.7549,
    lon: -8.9676,
    detail: "Centro logístico",
    image: factoryAlcochete,
    caption: "Centro logístico — Alcochete",
  },
];

// Bounding box for mainland Portugal
const BBOX = { minLon: -9.6, maxLon: -6.1, minLat: 36.9, maxLat: 42.2 };
const W = 360;
const H = 560;

function project(lat: number, lon: number) {
  const x = ((lon - BBOX.minLon) / (BBOX.maxLon - BBOX.minLon)) * W;
  const y = H - ((lat - BBOX.minLat) / (BBOX.maxLat - BBOX.minLat)) * H;
  return { x, y };
}

const PT_PATH =
  "M 84.6,27.4 L 94.3,20.2 L 103.9,15.6 L 109.2,13.8 L 131.4,9.0 L 137.2,6.6 L 142.7,7.0 L 143.6,9.3 L 146.7,13.8 L 150.2,16.9 L 151.2,19.2 L 142.6,28.8 L 141.5,32.1 L 145.9,38.4 L 146.7,40.2 L 148.9,41.0 L 154.9,40.8 L 165.5,36.8 L 172.7,33.4 L 175.2,34.8 L 196.1,32.9 L 201.1,34.4 L 204.4,36.1 L 214.7,38.5 L 225.9,38.7 L 239.8,35.5 L 245.9,32.2 L 247.0,28.6 L 247.3,25.9 L 249.1,24.1 L 252.3,23.1 L 257.2,24.9 L 264.3,26.3 L 281.3,26.9 L 284.6,24.9 L 290.3,25.5 L 297.9,28.0 L 306.7,27.2 L 311.1,30.3 L 312.9,34.4 L 313.4,43.4 L 312.8,52.4 L 314.5,55.7 L 320.4,56.6 L 330.0,56.5 L 338.6,58.9 L 345.3,63.2 L 347.5,67.6 L 348.4,70.6 L 345.2,72.3 L 340.5,78.7 L 328.8,87.1 L 312.1,94.7 L 299.3,104.1 L 290.5,115.4 L 279.5,120.2 L 276.1,122.8 L 274.8,125.8 L 282.1,139.6 L 284.3,150.3 L 286.1,163.3 L 284.9,167.0 L 284.3,181.4 L 282.6,185.6 L 283.1,189.0 L 285.8,192.7 L 287.0,196.2 L 281.9,200.7 L 272.7,205.9 L 265.9,210.4 L 264.1,214.7 L 264.6,217.4 L 276.0,226.4 L 278.1,230.1 L 276.6,239.1 L 270.0,253.8 L 263.7,262.7 L 262.6,263.6 L 255.3,266.1 L 220.7,266.2 L 212.3,268.2 L 213.5,270.0 L 221.6,281.5 L 230.1,287.6 L 232.9,289.0 L 236.0,302.4 L 249.7,323.8 L 263.0,326.8 L 267.6,332.1 L 266.8,339.7 L 262.7,347.9 L 254.5,356.4 L 244.8,362.4 L 238.5,368.3 L 238.0,375.2 L 236.0,383.9 L 232.9,390.8 L 232.1,395.4 L 256.5,424.6 L 270.0,423.2 L 271.8,423.9 L 269.4,430.9 L 265.1,439.0 L 260.0,440.6 L 248.4,443.1 L 237.4,453.7 L 228.5,466.3 L 221.8,472.5 L 215.6,487.6 L 216.4,494.1 L 219.4,504.2 L 225.7,530.5 L 216.7,531.7 L 181.6,548.8 L 170.8,548.9 L 150.5,541.3 L 114.8,538.9 L 103.1,536.6 L 88.5,541.6 L 77.3,541.4 L 68.4,547.7 L 61.9,546.0 L 69.3,531.9 L 80.8,503.9 L 80.4,486.8 L 83.1,472.0 L 80.0,457.3 L 74.2,448.1 L 82.1,424.3 L 81.2,412.1 L 73.9,396.6 L 95.8,398.9 L 89.1,392.8 L 82.4,389.0 L 75.9,389.9 L 70.5,389.7 L 51.8,395.7 L 42.5,397.5 L 39.8,396.4 L 40.8,386.8 L 36.0,374.4 L 43.4,371.1 L 52.1,370.2 L 59.5,364.9 L 64.1,358.9 L 61.7,348.4 L 68.1,338.3 L 83.1,329.9 L 75.3,331.1 L 66.4,336.4 L 52.4,355.6 L 47.7,365.3 L 35.8,368.5 L 25.0,370.0 L 19.5,369.0 L 12.9,366.6 L 12.4,359.4 L 12.9,353.7 L 17.3,342.3 L 19.1,326.3 L 25.4,311.9 L 25.0,308.1 L 23.2,302.4 L 28.8,296.8 L 35.9,293.1 L 46.5,280.8 L 61.3,251.4 L 78.4,220.2 L 77.0,216.4 L 73.4,213.5 L 74.8,205.1 L 85.1,168.5 L 89.3,163.7 L 94.2,152.9 L 95.2,135.6 L 97.1,123.7 L 96.7,117.7 L 95.2,110.5 L 88.6,96.7 L 81.7,67.6 L 81.2,57.9 L 86.9,53.0 L 77.5,52.3 L 73.3,46.0 L 74.2,38.9 L 84.6,27.4 Z";

export function PortugalMap() {
  const [active, setActive] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);

  const open = pinned ?? active;
  const openMarker = MARKERS.find((m) => m.name === open) ?? null;

  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
        aria-label="Mapa de Portugal com localizações Macal"
      >
        <defs>
          <linearGradient id="ptFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.92 0.06 90)" />
            <stop offset="100%" stopColor="oklch(0.84 0.09 85)" />
          </linearGradient>
          <pattern id="ptGrain" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.4" fill="oklch(0.45 0.08 70 / 0.18)" />
          </pattern>
        </defs>

        <path d={PT_PATH} fill="url(#ptFill)" stroke="oklch(0.35 0.06 70)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d={PT_PATH} fill="url(#ptGrain)" />

        {(() => {
          const p = project(38.7223, -9.1393);
          return (
            <g>
              <circle cx={p.x} cy={p.y} r="3" fill="oklch(0.35 0.06 70)" opacity="0.5" />
              <text x={p.x - 8} y={p.y + 14} fontSize="10" fill="oklch(0.35 0.06 70)" opacity="0.7" textAnchor="end">
                Lisboa
              </text>
            </g>
          );
        })()}

        {MARKERS.map((m) => {
          const p = project(m.lat, m.lon);
          return (
            <g
              key={m.name}
              transform={`translate(${p.x}, ${p.y})`}
              className="cursor-pointer"
              onMouseEnter={() => setActive(m.name)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setPinned(pinned === m.name ? null : m.name)}
            >
              <circle r="14" fill="#dc2626" opacity="0.18">
                <animate attributeName="r" values="10;20;10" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <path
                d="M 0 -20 C -8 -20 -12 -14 -12 -8 C -12 -2 -6 4 0 14 C 6 4 12 -2 12 -8 C 12 -14 8 -20 0 -20 Z"
                fill="#dc2626"
                stroke="white"
                strokeWidth="1.5"
              />
              <circle cx="0" cy="-9" r="3.5" fill="white" />
              <g transform="translate(14, -6)">
                <rect
                  x="0"
                  y="-12"
                  rx="4"
                  ry="4"
                  width={m.name.length * 7 + 14}
                  height="20"
                  fill="white"
                  stroke="#dc2626"
                  strokeWidth="1"
                />
                <text x="7" y="2" fontSize="11" fontWeight="600" fill="#0f172a">
                  {m.name}
                </text>
              </g>
            </g>
          );
        })}

        {openMarker && (() => {
          const p = project(openMarker.lat, openMarker.lon);
          const cardW = 170;
          const cardH = 150;
          const flipX = p.x + cardW + 24 > W;
          const flipY = p.y - cardH - 24 < 0;
          const x = flipX ? p.x - cardW - 18 : p.x + 18;
          const y = flipY ? p.y + 18 : p.y - cardH - 18;
          return (
            <g style={{ pointerEvents: "none" }}>
              <foreignObject x={x} y={y} width={cardW} height={cardH}>
                <div
                  // @ts-expect-error xmlns on div for foreignObject
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="rounded-lg overflow-hidden border-2 border-[#dc2626] bg-white shadow-xl"
                  style={{ width: cardW, height: cardH }}
                >
                  <img src={openMarker.image} alt={openMarker.caption} className="w-full h-[100px] object-cover" />
                  <div className="px-2 py-1.5">
                    <div className="text-[11px] font-semibold text-[#0f172a] leading-tight">{openMarker.name}</div>
                    <div className="text-[9px] text-neutral-500 leading-tight mt-0.5">{openMarker.detail}</div>
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        })()}
      </svg>

      <div className="mt-6 grid sm:grid-cols-2 gap-3">
        {MARKERS.map((m) => (
          <div
            key={m.name}
            onMouseEnter={() => setActive(m.name)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setPinned(pinned === m.name ? null : m.name)}
            className={`cursor-pointer rounded-lg border p-4 transition ${
              (pinned ?? active) === m.name ? "border-[#dc2626] bg-[#dc2626]/5" : "border-border bg-card"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="inline-block size-2.5 rounded-full bg-[#dc2626]" />
              <div className="font-display text-lg">{m.name}</div>
            </div>
            {m.detail && <div className="mt-1 text-sm text-muted-foreground">{m.detail}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
