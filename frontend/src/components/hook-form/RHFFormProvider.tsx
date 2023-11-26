// form
import { FormEventHandler, ReactNode } from "react";
import {
    FieldValues,
    FormProvider as Form,
    UseFormReturn,
} from "react-hook-form";

// ----------------------------------------------------------------------

interface FormProviderProps<T extends FieldValues> {
    children: ReactNode;
    methods: UseFormReturn<T>;
    // methods: UseFormWatch<FieldValues>;
    onSubmit: FormEventHandler<HTMLFormElement> | undefined;
}

export default function RHFFormProvider<T extends FieldValues>({
                                                                   children,
                                                                   onSubmit,
                                                                   methods,
                                                               }: FormProviderProps<T>) {
    return (
        <Form {...methods}>
            <form onSubmit={onSubmit}>{children}</form>
        </Form>
    );
}
