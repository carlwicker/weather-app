import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface SearchProps {
  setNewLocation: Function;
}

export default function Search({ setNewLocation }: SearchProps) {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewLocation(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lettersAndSpacesOnly = value
      .replace(/[^a-zA-Z\s]/g, '')
      .replace(/\s+/g, ' ');
    setQuery(lettersAndSpacesOnly);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-5 items-center w-full">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="h-[50px]  px-5 text-black text-xl w-full"
        name="search"
      />
      <button
        type="submit"
        className="min-w-[45px] min-h-[45px] rounded-full bg-white flex justify-center items-center "
        disabled={!query}
      >
        <FaAngleRight size={'35px'} className="fill-[#111]" />
      </button>
    </form>
  );
}
