import { useEffect, useState } from "react";
import { KeyboardEvent } from "react";
import { Location } from "./Location";

function Search() {
    const [location, setLocation] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);
    const [apiResponse, setResponse] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [typing, setTyping] = useState<boolean>(false);
    const [showDrop, setDrop] = useState<boolean>(false);
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    let arr1: Location[] = [];


    const handleSearch = () => {
        console.log("Ready to search for " + location);
        var request = {
            method: 'GET',
        };
        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=${apiKey}`, request)
        .then(response => response.json())
        .then(result => populate(result))
        .catch(error => console.log('error', error));

    }



    
    const populate = (data) => {
        if(data.features.length <= 3) {
        for(var i = 0; i <= data.features.length; i++) {
            //createList(data.features[i].properties.city + ", " + data.features[i].properties.country + ", " + data.features[i].properties.state)
            const newLocation = new Location(data.features[i].properties.city, data.features[i].properties.state, data.features[i].properties.lat, data.features[i].properties.lon,data.features[i].properties.country);
            arr1.push(newLocation);
            createList(newLocation, i);
        }
    } else {
        for(var i = 0; i <= 3; i++) {
            const newLocation = new Location(data.features[i].properties.city, data.features[i].properties.state, data.features[i].properties.lat, data.features[i].properties.lon,data.features[i].properties.country);
            arr1.push(newLocation);
            createList(newLocation, i);
        }
    }
    }

    const createList = (locationObj : Location, num) => {
       /* const dropdownList = document.getElementById("appendObj");
        const listElement = `<li>
        <a id=${num} onclick={printTemp} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${locationObj.getCity() + ", " + locationObj.getState() + ", " + locationObj.getCountry()}</a>
        </li>`
        // This above isn't actually working how I want it to, we have to individually rebuilt this listElement and set the .onClick's etc on our own. Revisit this
        dropdownList.innerHTML += listElement;
        */

    const dropdownList = document.getElementById("appendObj");
    const listElement = document.createElement("li");
    const linkElement = document.createElement("a");

    linkElement.id = `${num}`;
    linkElement.className = "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white";
    linkElement.textContent = `${locationObj.getCity()}, ${locationObj.getState()}, ${locationObj.getCountry()}`;
    linkElement.href = "#";
    linkElement.onclick = (event) => printTemp(event); // Attach handler

    listElement.appendChild(linkElement);
    dropdownList.appendChild(listElement);
    }

    const printTemp = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const getId = parseInt(event.currentTarget.id);
        console.log("Accessing " + arr1[getId].getCity());
        console.log(arr1[getId].getTemperature());
    }


    useEffect(() => {
        const timeout = setTimeout(() => {
            if(location) {
                setDrop(true);
                handleSearch();
            } else {
                setDrop(false);
            }
        }, 1000);

        return () => {
            clearTimeout(timeout);
            setDrop(false);
        };
    }, [location]);

    return (
        <div id="searchBox" className="grid grid-cols-2 grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 gap-2 place-items-center bg-batman w-[89%] h-28 md:w-[35%] md:h-[42%] rounded-lg rounded-border animate__animated animate__fadeInDown animate__delay-1s">
            <input type="search" id="searchMe" data-dropdown-toggle="dropdownUsers" data-dropdown-placement="bottom" className="d-block relative rounded-lg rounded-border w-[96%] h-10 md:w-[96%] md:h-[80%] mt-3 md:mt-5 p-2 bg-batman border border-slate-600 text-white placeholder-grey-600 col-start-1 col-end-3 font-inter"
            placeholder="Search a location!" aria-label="Search" onChange={e => setLocation(e.target.value)} aria-describedby="Search"/>
            <button type="button" className="font-inter relative text-white font-medium rounded-border rounded-lg text-sm bg-batman border border-slate-600 w-[100%] h-[75%] md:w-[100%] left-2 md:h-[65%] md:left-3.5">Search</button>
            <button type="button" className="font-inter text-white font-medium rounded-lg text-sm bg-batman border border-slate-600 w-[90%] h-[75%]  md:w-[90%] md:h-[65%]">Github</button>           
            {showDrop && (
                <div className="absolute top-full mt-2 z-10 bg-batman divide-y divide-gray-100 rounded-lg shadow w-[100%] bg-batman animate__animated animate__fadeIn">
                    <ul id="appendObj" className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    </ul>
                </div>
            )}
        </div>
        
    );
}

export default Search;