'use client';

import { LeadTable } from '@/_components/table/LeadTable';
import { Button } from '@/_components/ui/button';
import { useAppDispatch, useAppSelector } from '@/hook';
import { geteLeads } from '@/redux/features/lead/leadAsyncActions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {

  const router = useRouter()
  const dispatch = useAppDispatch()

  const {getAllLeadData} = useAppSelector(state=>state.lead)
  
  useEffect(() => {
    dispatch(geteLeads({}))
  }, [])

  return (
    <section>

      <div className='flex justify-between items-center'>
        <h2 className='mb-4 text-xl font-semibold mt-4'> Add new lead </h2>
        <Button onClick={()=> router.push('/leads/add-lead')} className='bg-blue-500 hover:bg-blue-800'>+ Add Lead</Button>
      </div>

      <div className='rounded-[10px] bg-white p-6'>
        <LeadTable tableData={getAllLeadData?.data?.data || []} />
      </div>
    </section>
  );
};

export default Page;
