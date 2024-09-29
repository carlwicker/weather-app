interface TopBarProps {
  setIsFaranheitHandler: Function;
  isFaranheit: boolean;
}

export default function TopBar({
  setIsFaranheitHandler,
  isFaranheit,
}: TopBarProps) {
  return (
    <div className="flex h-[50px] justify-between items-center w-full">
      <div className="text-white text-[36px]">Day Overview</div>
      <div className="flex gap-2 text-[23px]">
        <div
          className={`flex ${
            isFaranheit ? 'bg-[#585676] text-white' : 'bg-white text-black'
          }
          rounded-full w-[50px] h-[50px] items-center justify-center hover:cursor-pointer select-none`}
          onClick={() => setIsFaranheitHandler(false)}
        >
          °C
        </div>
        <div
          className={`flex ${
            isFaranheit ? 'bg-white text-black' : 'bg-[#585676] text-white'
          } 
          rounded-full w-[50px] h-[50px] items-center justify-center hover:cursor-pointer select-none`}
          onClick={() => setIsFaranheitHandler(true)}
        >
          °F
        </div>
      </div>
    </div>
  );
}
