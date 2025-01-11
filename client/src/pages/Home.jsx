import React, { useState } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import Resultbox from '../components/Resultbox';
import Advertisement from '../components/Advertisement';
import Searchbox from '../components/Searchbox';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQueryChange = (query) => {
      setSearchQuery(query);  
    };
   

    return (
        <div className='Home'>
            <Header onSearchQueryChange={handleSearchQueryChange} />
            <div className="combine">
                <div className="Filter">
                    <Filter />
                </div>
                <div className="Resultbox">
                    {searchQuery.trim() ? (
                        <Searchbox query={searchQuery} />
                    ) : (
                        <Resultbox />  
                    )}
                </div>
                <div className="Advertisement">
                    <Advertisement />
                </div>
            </div>

        </div>
    );
}
