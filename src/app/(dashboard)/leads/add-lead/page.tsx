'use client';

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
    <h2 onClick={()=> router.back()} className='mb-4 text-lg text-blue-500 font-semibold mt-4 cursor-pointer'> {`<- back`}  </h2>

      <h2 className='mb-4 text-xl font-semibold mt-4'> Add new lead </h2>

      <div className='rounded-[10px] bg-white p-6'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col"
        >
          <div className="mb-6">
            <h2 className="mb-4 text-lg">Lead type</h2>

            <div className="flex space-x-4">
              <input
                type="radio"
                {...register('lead_type', { required: true })}
                value="1"
              />
              <label htmlFor="homeType">hot</label>
              <input
                type="radio"
                {...register('lead_type', { required: true })}
                value="2"
              />
              <label htmlFor="businessType">cold</label>
            </div>
            {errors.lead_type && errors.lead_type.type === 'required' && (
              <span className="mt-2 block text-red-500 ">* This is required</span>
            )}
          </div>

          <div className="mb-6 space-y-6">
            <h2 className="mb-4 text-lg">Personal details</h2>

            <div className='relative w-full'>
              <select className={`${getValues('requirement') ? 'border-magenta' : 'border-gray-300'} w-full text-black  focus:outline-none appearance-none px-6 py-3 bg-white border border-gray-200 rounded-sm`} {...register('requirement', { required: true, onChange: handleChange })}>
                <option className='pt-4' value="">Requirement</option >
                <option value='1_bhk'>1 Bhk</option>
                <option value='2_bhk'>2 Bhk</option>
                <option value='3_bhk'>3 Bhk</option>
                <option value='4_bhk'>4 Bhk</option>
                <option value='5_bhk'>5 Bhk</option>
                <option value='panthouse'>Panthouse</option>
                <option value='duplex'>Duplex</option>
                <option value='triplex'>Triplex</option>
              </select>
              <IoIosArrowDown className='absolute top-[35%] right-6 text-xl text-gray-500' />
            </div>

            {/* {errors.title && errors.title.type === "required" && (
              <span className='text-red-500 mt-2 block '>* This is required</span>
            )} */}

            <div className="flex w-full space-x-6">
              <div className="w-full">
                <input
                  {...register('first_name', {
                    required: true,
                    onChange: handleChange,
                  })}
                  placeholder="First Name"
                  className={`${getValues('first_name') ? 'border-magenta' : 'border-gray-300'} ${errors.first_name ? 'border-red-500' : 'border-gray-300'} w-full rounded-sm border px-4 py-3 text-md`}
                />
                {errors.first_name && errors.first_name.type === 'required' && (
                  <span className="mt-2 block text-red-500 ">
                    * This is required
                  </span>
                )}
              </div>

              <div className="w-full">
                <input
                  {...register('last_name', {
                    required: true,
                    onChange: handleChange,
                  })}
                  placeholder="Last Name"
                  className={`${getValues('last_name') ? 'border-magenta' : 'border-gray-300'} ${errors.last_name ? 'border-red-500' : 'border-gray-300'} w-full rounded-sm border px-4 py-3 text-md`}
                />
                {errors.last_name && errors.last_name.type === 'required' && (
                  <span className="mt-2 block text-red-500 ">
                    * This is required
                  </span>
                )}
              </div>
            </div>

            <div>
              {/* validate: validatecontact_number, */}
              <input
                type="number"
                onChangeCapture={handlecontact_numberChange}
                {...register('contact_number', {
                  required: true,
                  onChange: handleChange,
                })}
                placeholder="Contact Number"
                className={`${getValues('contact_number') ? 'border-magenta' : 'border-gray-300'} w-full rounded-sm border px-4 py-3 text-md ${errors.contact_number ? 'border-red-500' : 'border-gray-300'}`}
              />

              {errors.contact_number &&
                errors.contact_number.type === 'required' && (
                  <span className="mt-2 block text-red-500 ">
                    * This is required
                  </span>
                )}
            </div>

            <div>
              <input
                type="email"
                {...register('email_id', {
                  required: true,
                  onChange: handleChange,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email Address"
                className={`${getValues('email_id') ? 'border-magenta' : 'border-gray-300'} w-full rounded-sm border px-4 py-3 text-md ${errors.email_id ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email_id && errors.email_id.type === 'required' && (
                <span className="mt-2 block text-red-500 ">
                  * This is required
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 ml-auto mt-3 block min-w-36 rounded-md py-3 font-semibold text-white"
          >
            {/* {leadPending ?
          <div
              className={`inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-white border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
              role="status">
          </div>

          : 'Submit'} */}
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
