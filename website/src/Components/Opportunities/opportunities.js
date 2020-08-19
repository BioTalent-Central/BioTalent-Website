import React from 'react';
import './opportunities.css';
import JoinUsOpp from './joinUsOpp.js'
import QuotesOpp from './quotesOpp'


function opportunities(){
    return (
        <section className="opportunities-section">
            <QuotesOpp />
            <JoinUsOpp />
        </section>
    )
}

export default opportunities;