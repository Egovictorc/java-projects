import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {  useSnackbar } from "notistack";


import type { API_ERROR, StudentProps } from '../../../types';

// components
import FormProvider, { RHFPasswordField, RHFTextField } from "../../components/hook-form"
import { addStudent } from '@/lib/handlers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { useEffect } from 'react';


const NewStudentForm = () => {
    const queryClient = useQueryClient();
    const {enqueueSnackbar} = useSnackbar();
    // Mutations
    const { mutate, isSuccess, isError, error } = useMutation({
        mutationFn: (formData: StudentProps) => addStudent(formData),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['students'] }),

            // show notice / alert
            enqueueSnackbar("Student added successfully", {variant: "success"})

        },
        
    })

    const navigate = useNavigate()
    const NewEditStudentSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("First Name is required"),
        lastName: Yup.string()
            .required("Last Name is required"),
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
        department: Yup.string()
            .min(3, "Department must be at least 3 characters")
            .required("Department is required"),
        // confirmPassword: Yup.string()
        //     .required("Confirm department is required")
        // .oneOf([Yup.ref('department'), null], 'Passwords must match'),
        // .oneOf([Yup.ref("department"), ""], "Passwords must match"),
    });


    const defaultValues: {
        // confirmPassword: string,
        email: string,
        firstName: string,
        lastName: string,
        department: string,
        afterSubmit?: string
    } = {

        firstName: "",
        lastName: "",
        email: '',
        department: "",
        afterSubmit: "",
    };

    const methods = useForm<typeof defaultValues>({
        resolver: yupResolver(NewEditStudentSchema),
        defaultValues: defaultValues,
    });

    const {
        setError,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

  
    const onSubmit: SubmitHandler<typeof defaultValues> = async (values) => {
        console.log("values ", values)
     
            mutate({firstName: values.firstName, lastName: values.lastName, email: values.email, department: values.department})
            

    };

    return (
        <div>

            {isError && (
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Ooops!</AlertTitle>
                    <AlertDescription>
                        {String(error.message)}
                    </AlertDescription>
                </Alert>

            )}
          
            {isSuccess && (
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        Student added successfully
                    </AlertDescription>
                </Alert>

            )}
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {!!errors.afterSubmit && (<p className={"text-red-500 mb-2"}>{errors.afterSubmit.message} </p>)}
                <RHFTextField name="firstName" label="First Name" placeholder={"john"} />
                <RHFTextField name="lastName" label="Last Name" placeholder={"Doe"} />
                <RHFTextField name="email" label="Email address" placeholder={"johndoe@gmail.com"} />
                <RHFTextField name="department" label="Department" />
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

export default NewStudentForm