interface TopBarProps {
  setIsFaranheitHandler: Function;
  isFaranheit: boolean;
}

export default function TopBar({
  setIsFaranheitHandler,
  isFaranheit,
}: TopBarProps) {
  return (
    <div className="flex w-full h-[50px] justify-between items-center">
      <div className="text-white text-[36px]">Day Overview</div>
      <div className="flex gap-2 text-[23px]">
        <div
          className={`flex ${
            isFaranheit ? 'bg-white' : 'bg-[#585676] hover:cursor-pointer'
          } 
          ${isFaranheit ? 'text-black' : 'text-white'}
          rounded-full w-[50px] h-[50px] items-center justify-center`}
          onClick={() => setIsFaranheitHandler(false)}
        >
          °C
        </div>
        <div
          className={`flex ${isFaranheit ? 'bg-[#585676]' : 'bg-white'} 
          ${isFaranheit ? 'text-white' : 'text-[#585676]'}
          rounded-full w-[50px] h-[50px] items-center justify-center hover:cursor-pointer`}
          onClick={() => setIsFaranheitHandler(true)}
        >
          °F
        </div>
      </div>
    </div>
  );
}
