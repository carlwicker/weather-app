import formatEpoch from '../../../utils/utils';

interface ForcastBoxProps {
  day: any;
  index: number;
  convertToCelsius: Function;
  isFaranheit: boolean;
}

export default function ForcastBox({
  day,
  index,
  convertToCelsius,
  isFaranheit,
}: ForcastBoxProps) {
  const formattedDate = formatEpoch(day.datetimeEpoch);

  return (
    <div className="flex flex-col h-[320px] bg-[#1E213A] p-3 rounded-xl text-center w-1/5">
      <div className="text-[24px]">
        {index == 0 ? 'Tomorrow' : formattedDate}
      </div>
      <img
        src={`img/weather/${day.icon}.svg`}
        alt={day.conditions}
        className="w-[144px] h-[144px] mx-auto"
      />
      <div className="text-wrap">{day.conditions}</div>
      <div className="flex justify-between h-full items-end ">
        <div>
          {isFaranheit ? day.tempmax : convertToCelsius(day.tempmax)}
          <span>{isFaranheit ? '°F' : '°C'}</span>
        </div>
        <div className="opacity-70">
          {isFaranheit ? day.tempmin : convertToCelsius(day.tempmin)}
          <span>{isFaranheit ? '°F' : '°C'}</span>
        </div>
      </div>
    </div>
  );
}
