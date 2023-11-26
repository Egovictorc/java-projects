import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import "yup-phone-lite";
// form
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from "notistack";


import type { API_ERROR, StaffProps } from '../../../types';

// components
import FormProvider, { RHFPasswordField, RHFTextField } from "../../components/hook-form"
import { addStaff } from '@/lib/handlers';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';


const NewStaffForm = () => {
    const queryClient = useQueryClient();
    // Mutations
    const { mutate, isSuccess, isError, error } = useMutation({
        mutationFn: (formData: StaffProps) => addStaff(formData),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['students'] })
        },
    })


    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("First Name is required"),
        lastName: Yup.string()
            .required("Last Name is required"),
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
        salary: Yup.number()
        .min(30000, "Salary must be above 30000")
            .required("Salary is required"),
        phoneNumber: Yup.string()
            .phone()
            .required("Phone number is required"),
        department: Yup.string()
            .min(3, "Departments must be at least 3 characters")
            .required("Departments is required"),
        // confirmPassword: Yup.string()
        //     .required("Confirm course is required")
        // .oneOf([Yup.ref('course'), null], 'Passwords must match'),
        // .oneOf([Yup.ref("course"), ""], "Passwords must match"),
    });

    const defaultValues: {
        // confirmPassword: string,
        email: string,
        firstName: string,
        lastName: string,
        salary: number,
        phoneNumber: string,
        department: string,
        afterSubmit?: string
    } = {

        firstName: "",
        lastName: "",
        email: '',
        salary: 0,
        department: "",
        phoneNumber: "",
        afterSubmit: "",
    };

    const methods = useForm<typeof defaultValues>({
        resolver: yupResolver(SignupSchema),
        defaultValues,
    });

    const {
        setError,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit: SubmitHandler<typeof defaultValues> = async (values) => {
        console.log("values ", values)
        mutate(values)
        // try {
        //     addStudent(
        //         values.email,
        //         values.firstName,
        //         values.lastName,
        //         values.course,
        //     )
        // } catch (error) {
        //     const err = error as API_ERROR;
        //     //reset();
        //     setError('afterSubmit', {
        //         ...err,
        //         message: err.message,
        //     });
        //     enqueueSnackbar({ message: err.message, variant: 'error' });
        // }

        // navigate(PATH_AFTER_LOGIN);
        // enqueueSnackbar(message);
        enqueueSnackbar('Account created successfully');

    };

    return (
        <div>

            {isError && (
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Ooops!</AlertTitle>
                    <AlertDescription>
                        {String(error)}
                    </AlertDescription>
                </Alert>

            )}

            {isSuccess && (
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        Staff added successfully
                    </AlertDescription>
                </Alert>

            )}
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {!!errors.afterSubmit && (<p className={"text-red-500 mb-2"}>{errors.afterSubmit.message} </p>)}
                <RHFTextField name="firstName" label="First Name" placeholder={"john"} />
                <RHFTextField name="lastName" label="Last Name" placeholder={"Doe"} />
                <RHFTextField name="email" label="Email address" placeholder={"johndoe@gmail.com"} />
                <RHFTextField name="department" label="Department" />
                <RHFTextField name="phoneNumber" label="Phone Number" type='number' />
                <RHFTextField name="salary" label="Salary" type='number' />
                <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                        <input type="checkbox" name="remeberMe" />&nbsp;
                        <label htmlFor="remeberMe">Remeber me</label>
                    </div>
                </div>

                <button
                    className="w-full shadow flex justify-center items-center gap-x-2 text-center  hover:bg-blue-500 focus:shadow-outline focus:outline-none bg-blue-600 text-white font-bold py-3 px-4 rounded transition-all"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Please wait" : "Add now"}
                </button>
            </FormProvider>
        </div>
    );
}

export default NewStaffForm