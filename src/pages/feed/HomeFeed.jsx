import React, { useState, useEffect } from 'react';
import SearchForm from '../../components/searchForm/SearchForm.jsx';
import { getCard } from '../../components/factory/cardFactory.jsx';
import axios from 'axios';

const HomeFeed = () => {
    const [djangoResults, setDjangoResults] = useState([]);
    const [queryToSend, setQueryToSend] = useState();

    const setSearchQueryFromForm = (query) => {
        setQueryToSend(query);
    }

    useEffect( () => {

        if(queryToSend && queryToSend.length > 0) {
            axios.post("http://127.0.0.1:8000/feed/", {query: queryToSend})
            .then( res => {
                setDjangoResults(res.data)
            })
        }

        

    }, [queryToSend])

    return (
        <div>
            <SearchForm setSearchQueryFromForm={setSearchQueryFromForm}/>
            {(djangoResults.map( (result, index) => getCard(result, index)))}

            
        </div>
    );
}

export default HomeFeed;