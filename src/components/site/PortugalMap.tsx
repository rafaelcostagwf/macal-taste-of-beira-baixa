import { useState } from "react";

type Marker = { name: string; lat: number; lon: number; detail?: string };

const MARKERS: Marker[] = [
  { name: "Mação", lat: 39.5527, lon: -7.9925, detail: "Fábrica · Beira Baixa" },
  { name: "Alcochete", lat: 38.7549, lon: -8.9676, detail: "Centro logístico" },
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

// Simplified Portugal mainland silhouette (stylised, hand-tuned)
const PT_PATH =
  "M 178 12 L 215 18 L 240 32 L 252 58 L 248 92 L 268 118 L 290 142 L 302 178 L 296 212 L 280 238 L 286 268 L 304 296 L 312 332 L 298 366 L 280 398 L 256 426 L 232 452 L 220 484 L 198 512 L 168 538 L 138 548 L 118 538 L 108 510 L 122 478 L 132 446 L 122 416 L 100 392 L 84 360 L 78 326 L 92 294 L 108 268 L 96 240 L 78 214 L 70 182 L 84 152 L 102 122 L 118 92 L 132 62 L 152 34 Z";

export function PortugalMap() {
  const [active, setActive] = useState<string | null>(null);

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

        {/* Lisboa reference dot */}
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
          const isActive = active === m.name;
          return (
            <g
              key={m.name}
              transform={`translate(${p.x}, ${p.y})`}
              className="cursor-pointer"
              onMouseEnter={() => setActive(m.name)}
              onMouseLeave={() => setActive(null)}
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
              <g transform={`translate(14, ${isActive ? -10 : -6})`} className="transition-all">
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
      </svg>

      <div className="mt-6 grid sm:grid-cols-2 gap-3">
        {MARKERS.map((m) => (
          <div
            key={m.name}
            onMouseEnter={() => setActive(m.name)}
            onMouseLeave={() => setActive(null)}
            className={`rounded-lg border p-4 transition ${
              active === m.name ? "border-[#dc2626] bg-[#dc2626]/5" : "border-border bg-card"
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
