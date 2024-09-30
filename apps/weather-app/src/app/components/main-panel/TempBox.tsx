import { convertToCelsius } from '../../../utils/utils';

interface TempBoxProps {
  value: number;
  label: string;
  isFaranheit: boolean;
}

export default function TempBox({ value, label, isFaranheit }: TempBoxProps) {
  return (
    <div className="bg-[#1E213A] h-[155px] rounded-xl text-white text-center p-5 w-full">
      <div className="">{label}</div>
      <div className="mt-5 text-[36px]">
        {isFaranheit ? Math.round(value) : convertToCelsius(value)}
        <span>{isFaranheit ? '°F' : '°C'}</span>
      </div>
    </div>
  );
}
