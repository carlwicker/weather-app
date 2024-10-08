interface SunBoxProps {
  value: string;
  label: string;
}

export default function SunBox({ value, label }: SunBoxProps) {
  const formattedValue = value?.split(':').slice(0, 2).join(':');

  return (
    <div className="bg-[#1E213A] h-[155px] rounded-xl text-white text-center p-5 w-full">
      <div className="">{label}</div>
      <div className="mt-5 text-[36px]">{formattedValue}</div>
    </div>
  );
}
