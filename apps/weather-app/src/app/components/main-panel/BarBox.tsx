import StatBar from './StatBar';

interface BarBoxProps {
  value: number;
  label: string;
  barColor: string;
}

export default function BarBox({ value, label, barColor }: BarBoxProps) {
  return (
    <div className="bg-[#1E213A] w-1/2 h-[200px] rounded-xl text-center p-5">
      <div>{label}</div>
      <div className="text-[36px]">{Math.round(value)}%</div>
      <StatBar value={Math.round(value)} color={barColor} />
    </div>
  );
}
