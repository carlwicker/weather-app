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
    <div className="flex flex-col lg:h-[320px] h-fit bg-[#1E213A] p-3 rounded-xl text-center lg:w-1/5 w-full">
      <div className="text-[24px] lg:min-h-[60px] leading-[26px]">
        {index == 0 ? 'Tomorrow' : formattedDate}
      </div>
      <img
        src={`img/weather/${day.icon}.svg`}
        alt={day.conditions}
        className="w-[144px] min-h-[144px] mx-auto min-w-[120px]"
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
