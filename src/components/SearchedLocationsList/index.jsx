// import React from 'react';

import LocationOption from "components/LocationOption";
import useGlobalStore from "../../store/globalStore";

export default function SearchedLocationsList() {
    const searchedLocationData = useGlobalStore(
        (state) => state.searchedLocationData
    );

    return (
        <div className="searched-location-list">
            {searchedLocationData.map((location, index) => (
                <LocationOption key={index} locationData={location} />
            ))}
        </div>
    );
}
