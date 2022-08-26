import React from 'react'

function Footer() {
    return (
        <div className="lg:px-24 md:px-20 sm:px-10 px-6">
            <div className="lg:flex md:flex justify-between text-center">
                <div className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold">
                    GET&nbsp;IN&nbsp;TOUCH
                </div>
                <div className="contact-line"></div>
            </div>
            <div className="contact-info">
                <div className="lg:w-1/3 md:w-1/2 lg:py-4 md:py-4 py-10">
                    <p>
                        <span className="font-bold">M</span> : 001 567 890 123
                    </p>
                    <p>
                        <span className="font-bold">E</span> :
                        info@propertyname.com
                    </p>
                </div>
                <div className="lg:w-1/3 md:w-1/2 lg:py-4 md:py-4 py-0">
                    <p>Address, City - State</p>
                    <p>Zip, Country</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
