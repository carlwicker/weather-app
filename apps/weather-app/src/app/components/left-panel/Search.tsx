import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface SearchProps {
  setNewLocation: Function;
  error: boolean;
  setError: Function;
}

export default function Search({
  setNewLocation,
  error,
  setError,
}: SearchProps) {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await setNewLocation(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lettersAndSpacesOnly = value
      .replace(/[^a-zA-Z\s]/g, '')
      .replace(/\s+/g, ' ');
    setQuery(lettersAndSpacesOnly);
    query.length > 0 && setError(false);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex gap-5 items-center"
        role="search"
      >
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="h-[50px] px-5 text-black text-xl w-full focus:outline-[#585676]"
          name="search"
          aria-label="Search Input"
          autoFocus
          autoComplete="on"
        />
        <button
          type="submit"
          className="min-w-[45px] min-h-[45px] rounded-full bg-white flex justify-center items-center focus:outline-[#585676]"
          disabled={!query}
          title="Search"
          aria-label="Search Submit"
          role="img"
        >
          <FaAngleRight
            size={'35px'}
            className="fill-[#111]"
            role="img"
            title="Search"
          />
        </button>
      </form>
      {error && (
        <div className="text-red-500 mt-2 w-full text-center">
          No information found for "{query}". Please try another location.
        </div>
      )}
    </div>
  );
}
