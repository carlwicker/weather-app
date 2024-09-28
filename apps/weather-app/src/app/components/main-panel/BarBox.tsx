import StatBar from './StatBar';

export default function BarBox({ value, label, barColor }: any) {
  return (
    <div className="bg-[#1E213A] w-1/2 h-[200px] rounded-xl text-center p-5">
      <div>{label}</div>
      <div className="text-[36px]">{Math.round(value)}%</div>
      <StatBar value={Math.round(value)} color={barColor} />
    </div>
  );
}
