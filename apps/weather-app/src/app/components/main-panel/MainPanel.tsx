import TopBar from './TopBar';

export default function MainPanel({
  setIsFaranheitHandler,
  isFaranheit,
  data,
}: {
  setIsFaranheitHandler: Function;
  isFaranheit: boolean;
  data: any;
}) {
  return (
    <div className="p-10 w-full">
      <div
        className="max-w-[1020px] mx-auto h-[200px]
      "
      >
        <TopBar
          setIsFaranheitHandler={setIsFaranheitHandler}
          isFaranheit={isFaranheit}
        />
      </div>
    </div>
  );
}
