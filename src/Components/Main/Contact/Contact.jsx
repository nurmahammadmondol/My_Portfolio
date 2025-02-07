import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="bg-base-100 rounded-md p-5 md:p-10 lg:p-16">
      <h2 className="text-2xl font-semibold border-b-2 border-black p-1 mb-10 lg:mb-14">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            {...register('email', {
              required: 'Email is required',
              // pattern: {
              //   value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              //   message: 'Please enter a valid email',
              // },
            })}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message here."
            {...register('message', { required: 'Message is required' })}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 btn btn-accent text-white rounded-md  focus:outline-none focus:ring-2 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
