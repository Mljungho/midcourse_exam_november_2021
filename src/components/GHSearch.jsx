import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

const GHSearch = () => {
  const [searchValue, setSearchValue] = useState();

  const dispatch = useDispatch();

  const getSearchResponse = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${searchValue}`
    );
    dispatch({ type: "SET_USER_FEED", payload: response.data.user });
  };

  return (
    <>
      <Input
        type="text"
        data-cy="input_search"
        placeholder="Input GH username"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button cy-data="search_btn" onClick={() => getSearchResponse}>
        Search
      </Button>
    </>
  );
};

export default GHSearch;