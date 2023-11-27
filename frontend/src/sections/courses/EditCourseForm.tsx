import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from "notistack";


import type { API_ERROR, CourseProps } from '../../../types';

// components
import FormProvider, { RHFPasswordField, RHFTextField } from "../../components/hook-form"
import { addCourse, updateCourse } from '@/lib/handlers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { useEffect } from 'react';


const EditCourseForm = ({ course }: { course: CourseProps }) => {
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    // Mutations
    const { mutate, isSuccess, isError, error } = useMutation({
        mutationFn: ({ id, formData }: { id: number, formData: CourseProps }) => updateCourse(id, formData),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['courses'] }),

                // show notice / alert
                enqueueSnackbar("Course updated successfully", { variant: "success" })
        },
        onError: () => {
            // show notice / alert
            enqueueSnackbar("Error while updating record", { variant: "error" })

        }

    })

    const navigate = useNavigate()
    const NewEditCourseSchema = Yup.object().shape({
        title: Yup.string()
            .required("Course title is required"),
        code: Yup.string()
            .min(3, "Course code must be at least 3 characters")
            .required("Course code is required"),
        description: Yup.string()
            .min(3, "Course description must be at least 3 characters")
            .required("Course description is required"),
        creditUnit: Yup.number()
            .min(1, "Minimum of 1 creditUnit")
            .required("Course units is required"),
        // confirmPassword: Yup.string()
        //     .required("Confirm course is required")
        // .oneOf([Yup.ref('course'), null], 'Passwords must match'),
        // .oneOf([Yup.ref("course"), ""], "Passwords must match"),
    });


    const defaultValues: {
        // confirmPassword: string,
        description: string,
        title: string,
        code: string,
        creditUnit: string,
        afterSubmit?: string
    } = {

        title: "",
        code: "",
        description: '',
        creditUnit: 1,
        afterSubmit: "",
    };

    const methods = useForm<typeof defaultValues>({
        resolver: yupResolver(NewEditCourseSchema),
        defaultValues,
    });

    const {
        setError,
        setValue,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    useEffect(() => {
        reset(course)
    }, [course])
    const onSubmit: SubmitHandler<typeof defaultValues> = async (values) => {
        console.log("values ", values)

        mutate({ id: course?.id as number, formData: { title: values.title, code: values.code, description: values.description, course: values.course, } })



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
                        Course added successfully
                    </AlertDescription>
                </Alert>

            )}
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {!!errors.afterSubmit && (<p className={"text-red-500 mb-2"}>{errors.afterSubmit.message} </p>)}
                <RHFTextField name="title" label="Course Title" placeholder={"Use of English"} />
                <RHFTextField name="code" label="Course Code" placeholder={"eg: GST 102"} />
                <RHFTextField name="description" label="Course Description" placeholder={"description for the course"} />
                <RHFTextField name="creditUnit" label="Credit Unit" type="number" />
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
                    {isSubmitting ? "Please wait" : "Update now"}
                </button>
            </FormProvider>
        </div>
    );
}

export default EditCourseForm;