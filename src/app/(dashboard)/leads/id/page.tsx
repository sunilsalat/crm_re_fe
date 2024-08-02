"use client"

import { SelectScrollable } from '@/_components/ui/SelectScrollable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/_components/ui/tabs';
import React from 'react'
import { BiSolidEdit } from "react-icons/bi";


const page = () => {

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];

    const handleSelectChange = (selectedValue: string) => {
    console.log("Selected value:", selectedValue);
    };
    
      
    return (
        <section className='bg-white rounded-md'>
            <div className='p-4'>
                <div>
                    <div className='flex items-center gap-4 border-b border-gray-200 pb-4'>
                        <p className='capitalize text-gray-900 text-xl'>Markande </p> <span><BiSolidEdit className='text-xl' /></span>
                    </div>

                    <div className='grid grid-cols-2 mt-6'>
                        <div className='grid grid-cols-4 '>
                            <div className='space-y-3'>
                                <div>
                                    <p className='capitalize text-gray-400 text-sm'>Recived on </p>
                                    <p className='capitalize text-gray-900 text-md'>Wed, Oct 4 2023 </p>
                                </div>

                                <div>
                                    <p className='capitalize text-gray-400 text-sm'>Last Contact on </p>
                                    <p className='capitalize text-gray-900 text-md'>Wed, Oct 4 2023 </p>
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <div>
                                    <p className='capitalize text-gray-400 text-sm'>Recived on </p>
                                    <p className='capitalize text-gray-900 text-md'>Wed, Oct 4 2023 </p>
                                </div>

                                <div>
                                    <p className='capitalize text-gray-400 text-sm'>Last Contact on </p>
                                    <p className='capitalize text-gray-900 text-md'>Wed, Oct 4 2023 </p>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <Tabs defaultValue="overview" className="space-y-4 w-full">
                                <TabsList className='w-full justify-start '>
                                    <TabsTrigger value="note">Note</TabsTrigger>
                                    <TabsTrigger value="call" >
                                    Call
                                    </TabsTrigger>
                                    <TabsTrigger value="site-visit">
                                    Site Visit
                                    </TabsTrigger>
                                    <TabsTrigger value="followup">
                                    Followup
                                    </TabsTrigger>
                                </TabsList>


                                <TabsContent value="note" className="space-y-4">
                                    <textarea name="note" className='border-2 focus:outline-gray-400 rounded-sm p-2 border-gray-300 w-full' id=""></textarea>
                                    <SelectScrollable options={options} onValueChange={handleSelectChange} placeholder="Select project" />

                                    <button className=''>Submit</button>
                                </TabsContent>

                                <TabsContent value="call" className="space-y-4">
                                    <textarea name="note" className='border-2 focus:outline-gray-400 rounded-sm p-2 border-gray-300 w-full' id=""></textarea>
                                </TabsContent>

                                <TabsContent value="site-visit" className="space-y-4">
                                    <textarea name="note" className='border-2 focus:outline-gray-400 rounded-sm p-2 border-gray-300 w-full' id=""></textarea>
                                </TabsContent>

                                <TabsContent value="followup" className="space-y-4">
                                    <textarea name="note" className='border-2 focus:outline-gray-400 rounded-sm p-2 border-gray-300 w-full' id=""></textarea>
                                </TabsContent>
                            </Tabs>

                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default page