import React,{useState} from "react";
import SearchIcon from '@material-ui/icons/Search';

function SearchBar({placeholder}) {
    return(
        <div className="search">
            <button style={{background: "gray"} }><SearchIcon/></button>
            <input type="text" placeholder={placeholder} />                       
        </div>
    );
};
export default SearchBar 