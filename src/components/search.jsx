import { useState } from "react";
import { useDispatch } from "react-redux";

export const Search = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "SET_SEARCH", payload: query });
    }

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" 
            type="search" 
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">Search</button>
        </form>
    );
}