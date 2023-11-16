import { useState } from 'react';

function SearchForm() {
  const [search, setSearch] = useState('');

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission behavior
    //TODO: Add search logic
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <input onChange={handleChange} type="text" />
      <button type="submit">Search</button>
    </form>

  );
}

export default SearchForm;
