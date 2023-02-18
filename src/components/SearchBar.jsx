import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

  return (
  <Paper
    component='form'
    onSubmit={() => {}}
    sx={{
        borderRadius: 20,
        border: '1px soild #e3e3e3',
        pl: 2,
        mr: { sm: 5 },
        boxShadow: 'none'
    }}
    >
    <input 
        type="text"
        className="search-bar"
        placeholder="search...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
    <IconButton 
        type="submit"
        sx={{ color: 'red', p: '10px' }}>
        <Search/>
    </IconButton>
  </Paper>
  );
};

export default SearchBar;
