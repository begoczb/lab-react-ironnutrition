import { Divider, Input } from 'antd';

// Iteration 5
function Search({ search, setSearch }) {
  //   console.log(search);
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search}
        type="text"
        onChange={(event) => setSearch(event.target.value)}
      />
    </>
  );
}

export default Search;
