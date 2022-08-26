import React from 'react'

function Body() {
    return (
        <div className="mt-10">
            <div className="body-top flex justify-end">
                <div className="lg:w-1/2 bg-green opacity-80 text-white">
                    <div className="flex justify-center">
                        <div className="body-top-text">
                            <p className="py-2">Private</p>
                            <p className="py-2">Villa Name</p>
                            <p className="py-2">FOR SALE</p>
                        </div>
                    </div>
                    <div className="body-boder border-t-2 border-white"></div>
                    <div className="px-28 py-12">
                        <p className="lg:text-3xl md:2xl xl text-left">
                            <span className="font-bold">ONLY</span> FOR
                        </p>
                        <p className="body-top-price">$499,999</p>
                    </div>
                </div>
            </div>
            <div className="lg:px-24 md:px-20 sm:px-10 px-6 py-10">
                <div className="lg:flex md:flex justify-between text-center">
                    <p className="describe-title">OVERVIEW</p>
                    <div className="describe-line1"></div>
                </div>
                <div className="lg:flex md:flex sm:flex justify-between pt-10">
                    <div className="lg:pr-4 md:pr-4 sm:pr-4">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                            className="rounded"
                        />
                    </div>
                    <div className="lg:pr-2 md:pr-2 sm:pr-2 lg:pt-0 md:pt-0 sm:pt-0 pt-2">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                            className="rounded"
                        />
                    </div>
                    <div className="lg:pl-4 md:pl-4 sm:pl-4 lg:pt-0 md:pt-0 sm:pt-0 pt-2">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                            className="rounded"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray lg:px-24 md:px-20 sm:px-10 px-6 pt-10">
                <div className="lg:flex md:flex justify-between text-center">
                    <div className="describe-title">
                        ABOUT&nbsp;THE&nbsp;PROPERTY
                    </div>
                    <div className="describe-line23"></div>
                </div>
                <p className="text-lg lg:px-24 md:px-20 sm:px-10 px-6 py-10">
                    This condo is located at 10310 S Ocean Dr #704, Fort Pierce,
                    FL 10310 S Ocean Dr #704 is in Fort Pierce, FL and in ZIP
                    code 34957. This property has 2 bedrooms, 2 bathrooms,
                    2bathrooms and approximately 1,021 sqft of floor space. This
                    property has a lot size of 1,000 sqft and was built in 1979.
                </p>
            </div>
            <div className="lg:px-24 md:px-20 sm:px-10 px-6 py-10">
                <div className="lg:flex md:flex justify-between text-center">
                    <div className="describe-title">PROPERTY&nbsp;BENEFITS</div>
                    <div className="describe-line23"></div>
                </div>
                <div className="lg:flex md:flex sm:flex justify-between py-10">
                    <div className="lg:w-1/3 md:w-1/3 sm:w-1/3 lg:pr-24">
                        <div className="flex justify-end">
                            <img
                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                                className="h-32 w-auto"
                            />
                        </div>
                        <div className="pt-2">
                            <p className="font-bold">LOCATION</p>
                            <p>Parking, View, HOA, Cooling.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/3 sm:w-1/3 lg:px-12">
                        <div className="flex justify-end">
                            <img
                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                                className="h-32 w-auto"
                            />
                        </div>
                        <div className="pt-2">
                            <p className="font-bold">CONDITION</p>
                            <p>Year built 1980</p>
                            <p>Annual tax amount: $3,722.</p>
                            <p>$360.4k ^ Since last sold in 1987</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/3 sm:w-1/3 lg:pl-24">
                        <div className="flex justify-end">
                            <img
                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                                className="h-32 w-auto"
                            />
                        </div>
                        <div className="pt-2">
                            <p className="font-bold">CONDITION</p>
                            <p>Year built 1980</p>
                            <p>Annual tax amount: $3,722.</p>
                            <p>$360.4k ^ Since last sold in 1987</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
