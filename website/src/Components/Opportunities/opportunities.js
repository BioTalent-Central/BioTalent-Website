import React from 'react';
import './opportunities.css';
import JoinUsOpp from './joinUsOpp.js'
import QuotesOpp from './quotesOpp'


function opportunities(){
    return (
        <section className="opportunities-section">
            <JoinUsOpp />
            <QuotesOpp />
        </section>
    )
}

export default opportunities;