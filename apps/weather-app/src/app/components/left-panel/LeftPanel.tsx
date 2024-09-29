import Search from './Search';
import formatEpoch from '../../../utils/utils';

interface LeftPanelProps {
  setNewLocation: Function;
  isFaranheit: boolean;
  data: any;
  convertToCelsius: Function;
  error: boolean;
  setError: Function;
}

export default function LeftPanel({
  setNewLocation,
  isFaranheit,
  data,
  convertToCelsius,
  error,
  setError,
}: LeftPanelProps) {
  const formattedDate = formatEpoch(data?.currentConditions.datetimeEpoch);

  return (
    <div className="xl:max-w-[555px] w-full min-w-screen bg-[#1E213A] p-10 text-white flex flex-col items-center">
      <Search
        setNewLocation={setNewLocation}
        error={error}
        setError={setError}
      />

      {data && (
        <>
          <div className="xl:pt-[150px] pt-[50px] lg:text-[64px] text-[32px] capitalize text-center leading-[32px] lg:leading-[64px]">
            {data?.address}
          </div>

          <div className="lg:pt-[50px] pt-[25px] lg:text-[36px] text-[24px] text-center">
            {formattedDate}
          </div>

          {data?.currentConditions.icon && (
            <img
              src={`img/weather/${data?.currentConditions.icon}.svg`}
              alt={data?.currentConditions.conditions}
              className="lg:w-[233px] lg:h-[233px] h-[150px] w-[150px]"
              role="presentation"
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

          <div className="lg:text-[30px] text-[18px] capitalize">
            {data?.currentConditions.conditions}
          </div>
        </>
      )}
    </div>
  );
}
