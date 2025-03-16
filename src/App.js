import React from 'react';
import { CTA, Brand, Navbar } from './components/components';
import { AboutGPT5, Blog, Footer, Features, Header, Possibility } from './containers/container'

const App = () => {
    return (
        <div className='App'>
            <div className='bg_gradient_clr'>
                <Header />
                <Navbar />
            </div>
            <Brand />
            <AboutGPT5 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />

        </div>
    )
}

export default App