import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = ({ onCreate }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        onCreate(data);
        // You can also reset the form if needed
        // reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                        value: 4,
                        message: "First name should be at least 4 characters",
                    },
                    maxLength: {
                        value: 15,
                        message: "First name should not exceed 15 characters",
                    },
                })}
                type="text"
                placeholder="First Name"
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <input
                {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                        value: 4,
                        message: "Last name should be at least 4 characters",
                    },
                    maxLength: {
                        value: 15,
                        message: "Last name should not exceed 15 characters",
                    },
                })}
                type="text"
                placeholder="Last Name"
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
            <input
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: "Invalid email address"
                    }
                })}
                type="email"
                placeholder="Email"
            />
            {errors.email && <p>{errors.email.message}</p>}
            <button type="submit">Generar orden</button>
        </form>
    );
};

export default ContactForm;
