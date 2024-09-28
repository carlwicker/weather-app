import OverviewGrid from './OverviewGrid';
import TopBar from './TopBar';

interface MainPanelProps {
  setIsFaranheitHandler: Function;
  isFaranheit: boolean;
  data: any;
  convertToCelsius: Function;
}

export default function MainPanel({
  setIsFaranheitHandler,
  isFaranheit,
  data,
  convertToCelsius,
}: MainPanelProps) {
  return (
    <div className="p-10 w-[1024px] mx-auto">
      <TopBar
        setIsFaranheitHandler={setIsFaranheitHandler}
        isFaranheit={isFaranheit}
      />
      <OverviewGrid
        data={data}
        convertToCelsius={convertToCelsius}
        isFaranheit={isFaranheit}
      />
    </div>
  );
}
