import Search from './Search';
import formatEpoch from '../../../utils/utils';

interface LeftPanelProps {
  setNewLocation: Function;
  isFaranheit: boolean;
  data: any;
  convertToCelsius: Function;
}

export default function LeftPanel({
  setNewLocation,
  isFaranheit,
  data,
  convertToCelsius,
}: LeftPanelProps) {
  const formattedDate = formatEpoch(data?.currentConditions.datetimeEpoch);

  return (
    <div className="w-[555px] min-w-fit bg-[#1E213A] p-10 text-white flex flex-col items-center">
      <Search setNewLocation={setNewLocation} />

      {data !== null && (
        <>
          <div className="pt-[150px] text-[64px] capitalize">
            {data?.address}
          </div>

          <div className="pt-[50px] text-[36px]">{formattedDate}</div>

          {data?.currentConditions.icon && (
            <img
              src={`img/weather/${data?.currentConditions.icon}.svg`}
              alt={data?.currentConditions.conditions}
              className="w-[233px] h-[233px]"
            />
          )}
          <div>
            <div className="text-[60px]">
              {isFaranheit
                ? Math.round(data?.currentConditions.temp ?? 0)
                : convertToCelsius(data?.currentConditions.temp)}
              <span className="text-[28px]">{isFaranheit ? '°F' : '°C'}</span>
            </div>
          </div>

          <div className="text-[30px] capitalize">
            {data?.currentConditions.conditions}
          </div>
        </>
      )}
    </div>
  );
}
