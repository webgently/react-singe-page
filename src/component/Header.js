import React from 'react'

function Header() {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex w-2/3">
                    <div className="bg-green w-1/12 lg:h-16 md:h-16 sm:h-16 h-18"></div>
                    <div className="bg-gray flex justify-start items-center w-full mr-16">
                        <p className="header-title">
                            LUXURY PRIVATE VILLA{' '}
                            <span className="font-bold">FOR SALE</span>
                        </p>
                    </div>
                </div>
                <div className="logo-container">
                    <img
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                        className="logo"
                    />
                </div>
            </div>
            <p className="domain-name">propertyname.com</p>
        </>
    )
}

export default Header
