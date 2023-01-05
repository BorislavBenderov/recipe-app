import { useEffect, useState } from "react";
import { fetchSearch } from "../../api";

export const Search = () => {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState([]);

    const onSearch = (e) => {
        e.preventDefault();

        fetchSearch(query)
            .then((data) => {
                setSearch(data);
            })
    }

    return (
        <div className="w-60 mx-auto mt-6">
            <form onSubmit={onSearch}>
                <label htmlFor="search" />
                <input
                    className='w-60 bg-black text-white'
                    type="text"
                    placeholder="Search recipes" id="search"
                    name="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
            </form>
        </div>
    );
}