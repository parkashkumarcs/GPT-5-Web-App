import React from 'react';
import { Article, CTA, Brand, Feature, Navbar } from './components/AllComponents'

const App = () => {
    return (
        <>
            <div>
                <h1>Let's Check it run properly our Application</h1>

            </div>
            <Article/>
            <Brand/>
            <CTA/>
            <Feature/>
            <Navbar/>
        </>
    )
}

export default App