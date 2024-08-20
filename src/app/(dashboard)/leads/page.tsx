'use client';

import { LeadTable } from '@/_components/table/LeadTable';
import { Button } from '@/_components/ui/button';
import { AddLeadsFormData } from '@/app/types/types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosArrowDown } from 'react-icons/io';

const Page = () => {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AddLeadsFormData>();

  const [formData, setFormData] = useState({});
  

  const onSubmit = (values: any) => {
    console.log(values, 'values');
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlecontact_numberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    // setValue('contact_number', value.slice(0, 10)); // Limit to 10 digits
  };

  return (
    <section>

      <div className='flex justify-between items-center'>
        <h2 className='mb-4 text-xl font-semibold mt-4'> Add new lead </h2>
        <Button onClick={()=> router.push('/leads/add-lead')} className='bg-blue-500 hover:bg-blue-800'>+ Add Lead</Button>
      </div>

      <div className='rounded-[10px] bg-white p-6'>
        <LeadTable/>
      </div>
    </section>
  );
};

export default Page;
