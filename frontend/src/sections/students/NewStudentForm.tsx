import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from "notistack";


import type { API_ERROR, StudentProps } from '../../../types';

// components
import FormProvider, { RHFPasswordField, RHFTextField } from "../../components/hook-form"
import { addStudent } from '@/lib/handlers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';


const NewStudentForm = () => {
    const queryClient = useQueryClient();
    // Mutations
    const { mutate, isSuccess, isError, error } = useMutation({
        mutationFn: ({ email, firstName, lastName, course }: StudentProps) => addStudent(email, firstName,
            lastName, course),
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
        course: Yup.string()
            .min(6, "Course must be at least 6 characters")
            .required("Course is required"),
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
        course: string,
        afterSubmit?: string
    } = {

        firstName: "",
        lastName: "",
        email: '',
        course: "",
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
                        Student added successfully
                    </AlertDescription>
                </Alert>

            )}
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {!!errors.afterSubmit && (<p className={"text-red-500 mb-2"}>{errors.afterSubmit.message} </p>)}
                <RHFTextField name="firstName" label="First Name" placeholder={"john"} />
                <RHFTextField name="lastName" label="Last Name" placeholder={"Doe"} />
                <RHFTextField name="email" label="Email address" placeholder={"johndoe@gmail.com"} />
                <RHFTextField name="course" label="Course" />
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