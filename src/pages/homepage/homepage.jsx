// imports
import React from 'react';
import Layout from './../../components/Layout/Layout';
import CharacterComponent from './../../components/character-component/Character-Component';
import Search from './../../components/search/Search';



export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rickMortyObj: [],
            rickMortyCards: []            
        }
        this.getData = this.getData.bind(this);
        this.handleSearchTerm = this.handleSearchTerm.bind(this);
    }

    componentDidMount() {
        const app = this;
        app.getData();
    }

    getData() {
        const app = this;
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => {
            return response.json()
        })
        .then(result => {
            app.setState({
                rickMortyObj: result.results
            });
        });
    }

    handleSearchTerm(searchTerm) {
        const app = this;        
        let characterObj = app.state.rickMortyObj;
        var sensitive = searchTerm.toLowerCase();
        
        //console.log(test)
        
        //console.log(characterQuery);
        //console.log(searchTerm);

        let characters = characterObj.filter((character) => {            
            return character.name.toLowerCase().indexOf(sensitive) !== -1;
           
        });

        app.setState({
            rickMortyQuery:characters,
            rickMortyCards: [],
            userInput:sensitive         
        },app.createCards());
    }

    createCards(){
        const app = this;
        let query = app.state.rickMortyQuery;
        let input = app.state.userInput;
        if(query == undefined){
            let rickMortyArray = app.state.rickMortyObj;       
            rickMortyArray.forEach((value, key) => {
                app.state.rickMortyCards.push(
                    <CharacterComponent image={value.image}
                        name={value.name}
                        species={value.species}
                        gender={value.gender}
                        status={value.status}
                        location={value.location.name}
                        origin={value.origin.name}
                        id={value.id}
                        key={key}
                    >
                    </CharacterComponent>
                );
            });
        }else{
            if(query.length>0){
                query.forEach((value, key) => {
                    app.state.rickMortyCards.push(
                        <CharacterComponent image={value.image}
                            name={value.name}
                            species={value.species}
                            gender={value.gender}
                            status={value.status}
                            location={value.location.name}
                            origin={value.origin.name}
                            id={value.id}
                            key={key}
                        >
                        </CharacterComponent>
                    );
                });
            }            
            if(query.length == 0){
                app.state.rickMortyCards.push(
                    <h1>No results for: {app.state.userInput}</h1>
                )
            } 
        }
        
                
    }
      

    render() {
        const app = this;
        app.createCards();
        return (
            <div className="[ row ]">
                <div className="[ col-sm-12 ]">
                    <h2 className="[ page__header ]">
                        Home Page
                    </h2>
                </div>
                <div className="[ col-sm-12 ]">
                    <Search onSearchTerm={app.handleSearchTerm}></Search>
                </div>
                <div className="[ col-sm-12 ]">
                    {app.state.rickMortyCards}
                </div>
            </div>
        );
    }
}
