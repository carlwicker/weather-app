import TempBox from './TempBox';
import SunBox from './SunBox';
import BarBox from './BarBox';
import ForcastBox from './ForcastBox';

interface OverviewGridProps {
  data: any;
  isFaranheit: boolean;
  convertToCelsius: Function;
}

export default function OverviewGrid({
  data,
  isFaranheit,
  convertToCelsius,
}: OverviewGridProps) {
  return (
    <div className="flex flex-col xl:gap-10 gap-5 text-white mx-auto w-full">
      {/* Percent Bar Section */}
      <div className="flex xl:gap-10 gap-5 w-full xl:mt-[62px] mt-5">
        <BarBox
          label="Humidity"
          value={data?.currentConditions.humidity}
          barColor="#A9FF53"
        />
        <BarBox
          label="Cloud Cover"
          value={data?.currentConditions.cloudcover}
          barColor="#FAFF00"
        />
      </div>
      <div className="flex xl:gap-10 flex-col md:flex-row gap-5">
        {/* Min / Max Temp Section */}
        <div className="flex xl:gap-10 gap-5 w-full">
          <TempBox
            label={'Min Temp.'}
            value={data?.days[0].tempmin}
            convertToCelsius={convertToCelsius}
            isFaranheit={isFaranheit}
          />

          <TempBox
            label={'Max Temp.'}
            value={data?.days[0].tempmax}
            convertToCelsius={convertToCelsius}
            isFaranheit={isFaranheit}
          />
        </div>
        {/* Sunrise / Sunset Section */}
        <div className="flex xl:gap-10 gap-5 w-full">
          <SunBox label={'Sunrise'} value={data?.currentConditions.sunrise} />

          <SunBox label={'Sunset'} value={data?.currentConditions.sunset} />
        </div>
      </div>
      {/* Forcast Section */}
      <div className="text-white lg:text-[36px] text-[28px]">5 Day Forcast</div>
      <div className="flex gap-5 flex-col lg:flex-row">
        {data?.days.slice(1, 6).map((day: Object, index: number) => (
          <ForcastBox
            key={index}
            day={day}
            index={index}
            convertToCelsius={convertToCelsius}
            isFaranheit={isFaranheit}
          />
        ))}
      </div>
    </div>
  );
}
