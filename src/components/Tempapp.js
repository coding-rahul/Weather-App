import React, { useEffect, useState } from "react";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3577666feeac5cb3d7b5380ee8e8455b`;

            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        };
        fetchApi();
    }, [search])

    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="card main p-3 ">
                    <div>
                        <input
                            type="search"
                            value={search}
                            className="inputFeild mb-4 rounded-pill mt-4"
                            onChange={(event) => { setSearch(event.target.value) }} />
                    </div>
                    {!city ? (
                        <div className="errorMsg">
                            <h3> No Data Found ... </h3>
                        </div>
                    ) : (

                        <div>
                            <h2 className=" mb-4">
                                <i className="fas fa-street-view img"> </i> <span className="fs">{search}</span>
                            </h2>
                            <h1 className=" mb-4">
                                {city.temp}°Cel
                            </h1>
                            <h3 className=" fs-5 fw-lighter mb-5"> Min : {city.temp_min}°Cel | Max : {city.temp_min}°Cel </h3>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Tempapp;