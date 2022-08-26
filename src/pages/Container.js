import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Body from '../component/Body'

function Container() {
    return (
        <div className="pt-24 pb-20">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Container
