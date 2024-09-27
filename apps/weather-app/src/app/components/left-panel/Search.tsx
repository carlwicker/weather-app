import { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface SearchProps {
  newLocation: (location: string) => void;
}

export default function Search({ newLocation }: SearchProps) {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    newLocation(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-5 items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
        placeholder="Search..."
        className="h-[50px] w-[401px] px-5 text-black text-xl"
        name="search"
      />
      <button
        type="submit"
        className="w-[45px] h-[45px] rounded-full bg-white flex justify-center items-center "
        disabled={!query}
      >
        <FaAngleRight size={'35px'} className="fill-[#111]" />
      </button>
    </form>
  );
}
