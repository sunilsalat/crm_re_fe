'use client';

import { leadType } from '@/app/types/asyncActions';
import { AddLeadsFormData } from '@/app/types/types';
import { useAppDispatch } from '@/hook';
import { createLead } from '@/redux/features/lead/leadAsyncActions';
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

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({});

  const onSubmit = (values: any) => {
    console.log(values, 'values');

    dispatch(createLead(values)).then((e) => {
      if (e.type === `${leadType}/fulfilled`) {
        // router.push('/leads');
      }
    });
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
          {/* <div className="mb-6">
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
          </div> */}

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
                  {...register('name', {
                    required: true,
                    onChange: handleChange,
                  })}
                  placeholder="Full Name"
                  className={`${getValues('name') ? 'border-magenta' : 'border-gray-300'} ${errors.name ? 'border-red-500' : 'border-gray-300'} w-full rounded-sm border px-4 py-3 text-md`}
                />
                {errors.name && errors.name.type === 'required' && (
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
                {...register('phone', {
                  required: true,
                  onChange: handleChange,
                })}
                placeholder="Contact Number"
                className={`${getValues('phone') ? 'border-magenta' : 'border-gray-300'} w-full rounded-sm border px-4 py-3 text-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              />

              {errors.phone &&
                errors.phone.type === 'required' && (
                  <span className="mt-2 block text-red-500 ">
                    * This is required
                  </span>
                )}
            </div>

            <div>
              <input
                type="email"
                {...register('email', {
                  required: true,
                  onChange: handleChange,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email Address"
                className={`${getValues('email') ? 'border-magenta' : 'border-gray-300'} w-full rounded-sm border px-4 py-3 text-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && errors.email.type === 'required' && (
                <span className="mt-2 block text-red-500 ">
                  * This is required
                </span>
              )}
            </div>
          </div>

          <div className="w-full">
              <input
                {...register('address', {
                  required: true,
                  onChange: handleChange,
                })}
                placeholder="Current Address"
                className={`${getValues('address') ? 'border-magenta' : 'border-gray-300'} ${errors.address ? 'border-red-500' : 'border-gray-300'} w-full rounded-sm border px-4 py-3 text-md`}
              />
              {errors.address && errors.address.type === 'required' && (
                <span className="mt-2 block text-red-500 ">
                  * This is required
                </span>
              )}
          </div>

          <div className="flex w-full space-x-6 mt-6">

          <div className="w-full">
              {/* validate: validatecontact_number, */}
              <input
                type="number"
                onChangeCapture={handlecontact_numberChange}
                {...register('budget', {
                  required: true,
                  onChange: handleChange,
                })}
                placeholder="Budget"
                className={`${getValues('budget') ? 'border-magenta' : 'border-gray-300'} w-full rounded-sm border px-4 py-3 text-md ${errors.budget ? 'border-red-500' : 'border-gray-300'}`}
              />

              {errors.budget &&
                errors.budget.type === 'required' && (
                  <span className="mt-2 block text-red-500 ">
                    * This is required
                  </span>
                )}
            </div>

              <div className="w-full">
                <input
                  {...register('source', {
                    required: true,
                    onChange: handleChange,
                  })}
                  placeholder="Source"
                  className={`${getValues('source') ? 'border-magenta' : 'border-gray-300'} ${errors.source ? 'border-red-500' : 'border-gray-300'} w-full rounded-sm border px-4 py-3 text-md`}
                />
                {errors.source && errors.source.type === 'required' && (
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
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
