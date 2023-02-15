import { useDispatch, useSelector } from "react-redux";
import { BsSearch, BsFillBackspaceFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

import { setSearchValue } from "../redux/filter/slice";

const Search = () => {
  const distpatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.searchValue);

  const inputRef = useRef();

  const focusStyle = "_focus";
  const focusStyleOff = "header__search-icon_onFocus";

  const [focus, setFocus] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const setClearIcon = () => {
    if (searchValue) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };

  useEffect(() => {
    setClearIcon();
  }, [searchValue]);

  const clearInput = () => {
    distpatch(setSearchValue(""));
    inputRef?.current?.focus();
  };

  return (
    <form action="#" className="header__form">
      <input
        ref={inputRef}
        onFocus={setClearIcon}
        value={searchValue}
        onSubmit={onSubmit}
        type="text"
        className="header__input"
        onChange={(e) => distpatch(setSearchValue(e.target.value))}
      />
      <button onClick={clearInput}>
        <BsFillBackspaceFill
          className={`header__clear-input-icon ${focus ? focusStyle : ""}`}
        />
      </button>
      <BsSearch
        className={`header__search-icon ${focus ? focusStyleOff : ""}`}
      />
    </form>
  );
};

export default Search;
