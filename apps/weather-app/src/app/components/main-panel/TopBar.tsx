interface TopBarProps {
  setIsFaranheitHandler: Function;
  isFaranheit: boolean;
}

export default function TopBar({
  setIsFaranheitHandler,
  isFaranheit,
}: TopBarProps) {
  return (
    <div className="flex h-[50px] justify-between items-center">
      <div className="text-white lg:text-[36px] text-[28px]">Day Overview</div>
      <div className="flex gap-2 text-[23px]">
        <button
          className={`flex ${
            isFaranheit ? 'bg-[#585676] text-white' : 'bg-white text-black'
          }
          rounded-full w-[50px] h-[50px] items-center justify-center hover:cursor-pointer select-none focus:outline-[#585676]`}
          onClick={() => setIsFaranheitHandler(false)}
          title="Celsius"
        >
          °C
        </button>
        <button
          className={`flex ${
            isFaranheit ? 'bg-white text-black' : 'bg-[#585676] text-white'
          } 
          rounded-full w-[50px] h-[50px] items-center justify-center hover:cursor-pointer select-none focus:outline-[#585676]`}
          onClick={() => setIsFaranheitHandler(true)}
          title="Faranheit"
        >
          °F
        </button>
      </div>
    </div>
  );
}
