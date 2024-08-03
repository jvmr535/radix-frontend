"use client";

import { ISensorPeriodAverageResponse } from "@/types/interfaces";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from "recharts";

type BarChartProps = {
  data: ISensorPeriodAverageResponse[];
};

export default function BarChart({ data }: BarChartProps): JSX.Element {
  return (
    <ResponsiveContainer width="50%" height={450}>
      <RechartsBarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="period"
          label={{
            position: "insideBottom",
            offset: -5,
            fill: "hsl(var(--primary))",
          }}
        />
        <YAxis
          dataKey="value"
          label={{
            value: "Valor",
            angle: -90,
            position: "insideLeft",
            fill: "hsl(var(--primary))",
            style: { fontWeight: "bold", padding: 10 },
          }}
        />
        <Tooltip />
        <Bar dataKey="value" barSize={50} fill="#2A1844">
          <LabelList
            dataKey="value"
            position="top"
            style={{ fill: "hsl(var(--primary))" }}
          />
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
