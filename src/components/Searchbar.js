import React from 'react';
import {Consumer} from './Context';

const Searchbar = () => {
    return (
        <Consumer>
        
        {
            context => {
                
                const toggleButtonAbility = (searchValue) => {
                    let searchButton = document.getElementById('searchbarButton');
                    if(searchValue !== '') {
                        searchButton.classList.remove('is-disabled')
                        searchButton.classList.add('is-success');
                    } else {
                        searchButton.classList.remove('is-success');
                        searchButton.classList.add('is-disabled')
                    }
                }


                const inputChanges = (e) => {
                    let searchValue = e.target.value;
                    toggleButtonAbility(searchValue);
                }

                const submitSearch = (e) => {
                    let searchButton = document.getElementById('searchbarButton');
                    let searchInput = document.getElementById('searchInput');
                    context.actions.handleTypingChange ? setTimeout(()=>{context.actions.handleTypingChange(searchInput.value)}, 500) : console.log('yo');
                    searchButton.classList.remove('is-success');

                }



                return (
                    <section id="searchbarMainSection" data-testid="searchBarSectionEl" className='showcase'>
                        <section className="nes-container with-title">
                        <h3 id="searchbarH3" className='title retroFont'>ENTER A TITLE</h3>
                        <form onSubmit={(e)=>{
                            e.preventDefault();
                            submitSearch();
                        }}>
                            <input id='searchInput'  data-testid="searchBarInputEl" onChange={inputChanges} className='nes-input retroFont is-dark'  type='text'>
                            </input>
                        </form>
                        <button data-testid="searchBarButtonEL" type="button" onClick={submitSearch} id="searchbarButton" className="nes-btn is-disabled">SEARCH</button>
                        </section>
                    </section>
                );
            }
        }
        
        </Consumer>
    )
}


export default Searchbar;