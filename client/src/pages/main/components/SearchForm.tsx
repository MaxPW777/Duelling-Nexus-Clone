import { useRef, useState } from 'react';

interface SearchFormProps {
  setSearch: (setSearch: string) => void;
}

function SearchForm({ setSearch }: SearchFormProps) {
  
  const searchValue = useRef<HTMLInputElement>(null);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(searchValue.current!.value);
    setSearch(searchValue.current!.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <input ref={searchValue} type="text" />
      <button type="submit">Search</button>
    </form>

  );
}

export default SearchForm;
