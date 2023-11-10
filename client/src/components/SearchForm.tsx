import { useState, useRef, useEffect } from 'react';

function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  }, [search]); // This useEffect will run whenever the 'search' state changes

  function handleSearch() {
    setSearch(inputRef.current?.value || '');
  }

  return (
    <form className="SearchForm">
      <input ref={inputRef} type="text" />
      <button onClick={handleSearch}>Search</button>
    </form>
  );
}

export default SearchForm;
