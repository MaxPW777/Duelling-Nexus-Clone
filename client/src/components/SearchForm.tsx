import { useState, useRef } from 'react';

function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission behavior
    setSearch(inputRef.current?.value || '');
  }

  return (
      <form onSubmit={handleSearch}>
        <input ref={inputRef} type="text" />
        <button type="submit">Search</button>
      </form>
    
  );
}

export default SearchForm;
