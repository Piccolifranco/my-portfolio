"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormData, sendEmail } from "@/utils/send-email";
import { ClipLoader } from "react-spinners";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ContactFormData>();
  const [loading, setLoading] = useState(false);
  const setLoadingFalse = () => {
    setLoading(false);
  };
  const setLoadingTrue = () => {
    setLoading(true);
  };
  function onSubmit(data: ContactFormData) {
    sendEmail(data, setLoadingTrue, setLoadingFalse);
  }

  return (
    <form className="w-3/5 mx-auto pb-20" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium ">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="mb-3 block text-base font-medium ">
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="mb-3 block text-base font-medium ">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("phone", { required: false })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-3 block text-base font-medium ">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("body", { required: true })}
        ></textarea>
      </div>
      <div>
        <button
          disabled={!isValid}
          className="hover:shadow-form w-full dark:disabled:bg-gray-600 disabled:bg-gray-400 rounded-md dark:bg-amber-600 bg-amber-700 py-3 px-8 text-base font-semibold  outline-none"
        >
          {loading ? (
            <ClipLoader
              loading={true}
              size={16}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default Contact;
