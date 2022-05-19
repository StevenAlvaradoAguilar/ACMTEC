import React,{useState} from "react";

function SearchBar({placeholder}) {
    return(
        <div className="search">
            <button style={{background: "gray"} }></button>
            <input type="text" placeholder={placeholder} />                       
        </div>
    );
};
export default SearchBar 