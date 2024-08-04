"use client";

import { ISensorPeriodAverageResponse } from "@/types/interfaces";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

type BarChartProps = {
  data: ISensorPeriodAverageResponse[];
};

export default function BarChart({ data }: BarChartProps): JSX.Element {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="period"
          tick={{ fontSize: 10 }}
          label={{
            position: "insideBottom",
            offset: -5,
            fill: "hsl(var(--primary))",
            style: { fontSize: 14 },
          }}
        />
        <YAxis
          dataKey="value"
          tick={{ fontSize: 12 }}
          label={{
            value: "Média",
            angle: -90,
            position: "insideLeft",
            fill: "hsl(var(--primary))",
            style: { fontWeight: "bold", fontSize: 14 },
          }}
        />
        <Bar dataKey="value" barSize={100} fill="#2A1844">
          <LabelList
            dataKey="value"
            position="top"
            style={{ fill: "hsl(var(--primary))", fontSize: 12 }}
          />
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
