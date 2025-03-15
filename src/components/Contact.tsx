import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

const Contact = () => {
    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:lmh.jeff@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

    return (
        <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-12 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
            <div className="flex flex-col space-y-7 items-center">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need.{' '}
                    <span className="decoration-[#06d6a0] underline">Let&apos;s Talk.</span>
                </h4>
                <div className="space-y-7">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#06d6a0] h-7 w-7 animate-pulse" />
                        <p>+852 62373810</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#06d6a0] h-7 w-7 animate-pulse" />
                        <p>lmh.jeff@gmail.com</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input {...register('name')} className="contactInput" type="text" placeholder="Name" />
                        <input {...register('email')} className="contactInput" type="email" placeholder="Email" />
                    </div>
                    <input {...register('subject')} className="contactInput" type="text" placeholder="Subject" />

                    <textarea {...register('message')} className="contactInput" placeholder="Message" />
                    <button className="bg-[#06d6a0] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact















