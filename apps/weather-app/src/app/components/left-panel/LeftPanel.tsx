import Search from './Search';
import formatEpoch from '../../../utils/utils';

export default function LeftPanel({ data, newLocation }: any) {
  const formattedDate = formatEpoch(data?.currentConditions.datetimeEpoch);

  return (
    <div className="w-[555px] h-screen bg-[#1E213A] p-10 text-white flex flex-col items-center">
      <Search newLocation={newLocation} />

      <div className="pt-[150px] text-[64px] capitalize">{data?.address}</div>

      <div className="pt-[50px] text-[36px]">{formattedDate}</div>

      {data?.currentConditions.icon && (
        <img
          src={`img/weather/${data?.currentConditions.icon}.svg`}
          alt={data?.currentConditions.conditions}
          className="w-[233px] h-[140px]"
        />
      )}
      <div className="text-[60px]">{data?.days[0].temp}°F</div>

      <div className="text-[30px] capitalize">
        {data?.currentConditions.conditions}
      </div>
    </div>
  );
}
