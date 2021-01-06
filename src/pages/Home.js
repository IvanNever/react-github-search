import React, { Fragment } from 'react';
import Card from '../components/Card';
import Search from '../components/Search';

const Home = () => {
    const cards = new Array(15)
        .fill('')
        .map((_, i) => i)
    
    return (
        <Fragment>
            <Search />
            <div className="row">
                {cards.map((card) => {
                    return (
                        <div key={card} className="col-sm-4 mb-4">
                            <Card />
                        </div>
                    )
                })}
            </div>

        </Fragment>
    );
};

export default Home;