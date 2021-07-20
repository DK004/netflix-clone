import React from 'react';
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* navbar */}
            <Nav /> 

            {/* banner */}
            <Banner/>

            {/* Row */}
            <Row
            title="NETFLIX ORIGINALS"
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow
            />

<Row
            title="Trending Now"
            fetchUrl = {requests.fetchTopRated}
            />

<Row
            title="Action Movies"
            fetchUrl = {requests.fetchActionMovies}
            />

<Row
            title="Comedy Movies"
            fetchUrl = {requests.fetchComedyMovies}
            />

<Row
            title="Horror Movies"
            fetchUrl = {requests.fetchHorrorMovies}
            isLargeRow
            />

            
<Row
            title="Romace Movies"
            fetchUrl = {requests.fetchRomanceMovies}
            isLargeRow
            />

            
{/* <Row
            title="Documentries"
            fetchUrl = {requests.fetchDocumentries}
            isLargeRow
            /> */}
        
        </div>
    )
}

export default HomeScreen;
