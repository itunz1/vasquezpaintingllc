"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'




function Contact() {

    const [errors, setErrors] = useState({});
    const [errores, setErrores] = useState({});

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });


    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value, });
        setErrors(validate({ ...state, [e.target.name]: e.target.value },));
        setErrores(validar({ ...state, [e.target.name]: e.target.value },));
    }

    function validate(state) {
        let errors = {};
        if (!state.name) {
            errors.name = "Name is required";
        } else if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g.test(state.name)) {
            errors.name = "Name cannot contain special characters";
        }
        if (!state.email) {
            errors.email = "Email is required"
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email)) {
            errors.email = "Invalid Email"
        }
        return errors;
    };

    function validar(state) {
        let errores = {};
        if (!state.name) {
            errores.name = "Se requiere nombre";
        } else if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g.test(state.name)) {
            errores.name = "Nombre no puede contener caracteres especiales";
        }
        if (!state.email) {
            errores.email = "Se requiere un correo"
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email)) {
            errores.email = "Correo invalido"
        }
        return errores;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Run checks
        if (!state.name) {
            toast.error('Name Field Empty 😅', {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 1500,
            });
            return;
        }
        if (!state.email) {
            toast.error('Email Field Empty 😅', {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 1500,
            });
            return;
        }
        return
    }

    return (
        <section className="pt-[4.8rem] pb-[9.6rem]">
            <ToastContainer limit={1} />
            <div className='max-w-[75rem] mx-auto py-0 md:pl-[2rem] flex flex-col-reverse md:grid md:grid-cols-6 pr-0 border-2 border-black border-solid shadow-md rounded-xl gap-5 relative'>
                <div className='pt-5 md:pt-[3rem] px-[1rem] pb-4 md:pb-[4rem] md:col-span-4'>
                    <h2 className='absolute text-white left-16 top-16 sm:left-32 md:static md:text-left heading-secondary md:text-black'>Contact Us</h2>
                    <p className='mb-[3rem] hidden md:block'>Get your house painting today, dont miss the oportunity to work with the bests in this area</p>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-[2rem]'>
                        <div className='relative flex gap-5'>
                            <div className='flex flex-col gap-2 w-[50%]'>
                                <label for="full-name">Full Name</label>
                                <input className='w-[100%] rounded-[10px] border-[1px] p-5 h-1'
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    onChange={handleChange}
                                />
                                <p className='absolute text-xs text-red-400 bottom-[-18px]'>{errors.name}</p>
                            </div>
                            <div className='flex flex-col gap-2 w-[50%]'>
                                <label for="email">Email address</label>
                                <input className='w-[100%] rounded-[10px] border-[1px] p-5 h-1' 
                                 type='email'
                                 name='email'
                                 value={state.email}
                                 onChange={handleChange}
                                 placeholder='example@any.com'
                                />
                                <p className='absolute bottom-[-18px] text-xs text-red-400'>{errors.email}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label for="full-name">Subject</label>
                            <input className='w-[100%] rounded-[10px] border-[1px] p-5 h-1' id="full-name" type="text" placeholder="Subject"/>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p>Message</p>
                            <textarea className='w-[100%] border-[1px] h-[150px]' />
                        </div>
                        <div className='flex justify-center'>
                            <button className='inline-block px-4 py-2 text-base text-white rounded-xl font-customm bg-yellow-app hover:bg-yellowLigth-app'>Submit</button>
                        </div>
                    </form>
                </div >
                <div className='w-[100%] h-[200px] rounded-t-[10px] md:w-auto md:h-auto contact-img md:bg-[url(/painting.jpg)] bg-cover md:rounded-r-[12px] md:col-span-2' role='img' aria-label='any'>

                </div>
            </div>
        </section>
    )
}

export default Contact