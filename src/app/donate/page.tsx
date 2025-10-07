import Image from 'next/image'
import React from 'react'
import DonateCounters from './_components/DonateCounters'
import DonationForm from './_components/DonationForm'

const page = () => {
    return (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4 min-h-screen'>
                        <div className='flex flex-col justify-start items-center md:items-start md:col-span-1'>
                                <div className='p-4 text-center md:text-left md:max-w-md'>
                                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                                            Help us sustain
                                            <br />
                                            Our <span className='text-mulearn-trusty-blue'>Mission</span>
                                        </h1>
                                        <p className='mt-3 text-sm sm:text-base text-muted-foreground'>
                                            Foster an innovation culture, introduce new technologies, and develop skilled entrepreneurs.
                                        </p>

                                        <div className='mt-6 w-full flex justify-center md:justify-start'>
                                            <Image
                                                src="/assets/donate/heroImg.webp"
                                                alt="Donate"
                                                width={500}
                                                height={500}
                                                className='rounded-md w-full h-auto max-w-xs sm:max-w-sm md:max-w-md'
                                            />
                                        </div>

                                        {/* Animated counters (client component) */}
                                        <div className='mt-6'>
                                            <DonateCounters />
                                        </div>
                                </div>
                        </div>

                        <div className='col-span-1 md:col-span-2'>
                            <DonationForm />
                        </div>
                </div>
    )
}

export default page