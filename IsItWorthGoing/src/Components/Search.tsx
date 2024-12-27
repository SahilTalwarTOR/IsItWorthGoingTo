function Search() {
    return (
        <div id="searchBox" className="grid grid-cols-2 grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 gap-2 place-items-center bg-batman w-[89%] h-28 md:w-[35%] md:h-[42%] rounded-lg rounded-border animate__animated animate__fadeInDown animate__delay-1s">
            <input type="search" className="d-block relative rounded-lg rounded-border w-[96%] h-10 md:w-[96%] md:h-[80%] mt-3 md:mt-5 p-2 bg-batman border border-slate-600 text-white placeholder-grey-600 col-start-1 col-end-3 font-inter"
            placeholder="Search a location!" aria-label="Search" id="searchInput" aria-describedby="Search"/>
            <button type="button" className="font-inter relative text-white font-medium rounded-border rounded-lg text-sm bg-batman border border-slate-600 w-[100%] h-[75%] md:w-[100%] left-2 md:h-[65%] md:left-3.5">Search</button>
            <button type="button" className="font-inter text-white font-medium rounded-lg text-sm bg-batman border border-slate-600 w-[90%] h-[75%]  md:w-[90%] md:h-[65%]">Github</button>            
        </div>
    );
}

export default Search;