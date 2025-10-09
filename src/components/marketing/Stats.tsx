import { FC } from "react";

interface Stat {
  label: string;
  value: string;
}
const stats: Stat[] = [
  { value: "200+", label: "Expert Network" },
  { value: "24h", label: "Match Guarantee" },
  { value: "100%", label: "Vetted Profiles" },
  { value: "25+", label: "Industries Covered" },
];

export const Stats: FC = () => (
  <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
    {stats.map(({ value, label }) => (
      <div key={label}>
        <p className="text-3xl font-semibold tracking-tight">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    ))}
  </div>
);
