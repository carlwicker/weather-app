import { time } from 'console';

interface TempBoxProps {
  value: number;
  label: string;
  convertToCelsius: Function;
  isFaranheit: boolean;
}

export default function TempBox({
  value,
  label,
  convertToCelsius,
  isFaranheit,
}: TempBoxProps) {
  return (
    <div className="bg-[#1E213A] w-1/4 h-[155px] rounded-xl text-white text-center p-5">
      <div className="">{label}</div>
      <div className="mt-5 text-[36px]">
        {isFaranheit ? Math.round(value) : convertToCelsius(value)}
        <span>{isFaranheit ? '°F' : '°C'}</span>
      </div>
    </div>
  );
}
