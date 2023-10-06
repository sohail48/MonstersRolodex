import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import '../src/App.css';

const App = () => {
    const [SearchField, SetSearchField] = useState('');
    const [monsters, SetMonsters] = useState([]);
    const [filteredMonster, SetFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => SetMonsters(users))
    }, []);

    useEffect(() => {
        const newfilteredMonster = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(SearchField);
        });

        SetFilteredMonsters(newfilteredMonster);
    }, [monsters, SearchField]);
    
    const onSearchChange = (event) => {
        const SearchFieldString = event.target.value.toLocaleLowerCase();
        SetSearchField(SearchFieldString);
    };

    return(
        <div className='App'>
            <h1 className='app-title'>Monsters Rolodex</h1>

            <SearchBox 
                className='Monsters-Search-Box'
                onChangeHandler={onSearchChange}
                placeholder='Search Monsters'
            />
            <CardList monsters={filteredMonster}/>
        </div>
    );
};

export default App;