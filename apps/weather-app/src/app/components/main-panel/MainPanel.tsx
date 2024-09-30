import OverviewGrid from './OverviewGrid';
import TopBar from './TopBar';

interface MainPanelProps {
  setIsFaranheitHandler: (isFaranheit: boolean) => Promise<void>;
  isFaranheit: boolean;
  data: any;
}

export default function MainPanel({
  setIsFaranheitHandler,
  isFaranheit,
  data,
}: MainPanelProps) {
  return (
    <div className="xl:p-10 p-5 bg-[#100E1D] mx-auto flex-col xl:max-w-[1024px] w-full">
      <TopBar
        setIsFaranheitHandler={setIsFaranheitHandler}
        isFaranheit={isFaranheit}
      />
      <OverviewGrid data={data} isFaranheit={isFaranheit} />
    </div>
  );
}
