import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data, gColor }) {
  return (
    <div className=' w-[200px]'>
      <ResponsiveContainer width='100%' aspect={2 / 1}>
        <AreaChart
          data={data}
          margin={{
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id='gColor' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor={gColor} stopOpacity={0.4} />
              <stop offset='100%' stopColor={gColor} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='1 1' opacity={0.1} vertical={false} />
          <XAxis dataKey='name' />
          {/* <YAxis axisLine={false} tickCount={2} tickLine={false} /> */}
          {/* <Tooltip cursor={{ stroke: "red", strokeWidth: 0.05 }} /> */}
          <Area
            type='plainline'
            dataKey='Total'
            stroke={gColor}
            fill='url(#gColor)'
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
