interface StatBarProps {
  value: number;
  color: string;
}

export default function StatBar({ value, color }: StatBarProps) {
  return (
    <div className="w-full">
      <div className="text-end">%</div>
      <div className="w-full bg-gray-200 rounded h-[20px]">
        <div
          style={{ width: `${value}%`, backgroundColor: `${color}` }}
          className={`h-full rounded`}
        ></div>
      </div>
      <div className="flex w-full justify-between -[15px]">
        <div>0</div>
        <div>100</div>
      </div>
    </div>
  );
}
