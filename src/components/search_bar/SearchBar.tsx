import React, { SetStateAction } from "react";

type SearchBarProps = {
  handleSubmit: (event: React.SyntheticEvent<EventTarget>) => void;
  inputValue: string
  setInputValue: React.Dispatch<SetStateAction<string>>
}

function SearchBar({ handleSubmit, inputValue, setInputValue }: SearchBarProps) {
  return (
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="search any image"
            className="search-bar__input"
            value={inputValue}
            name="search"
            onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="search-bar__button" type="submit">Search</button>
      </form>
  );
}

export default SearchBar;
