import {Textarea, TextareaProps} from "../ui/textarea";
import {Label} from "../ui/label";
import {Controller, useFormContext} from "react-hook-form";

interface RHFTextareaProps extends TextareaProps {
    helperText?: string,
    label: string
}

const RHFTextArea = ({name, value, label, placeholder, helperText, ...props}: RHFTextareaProps) => {
    const {control} = useFormContext();
    return (
        <Controller
            name={name as string}
            control={control}
            render={({field, fieldState: {error}}) => (<div className="grid w-full  mb-4 gap-2">
                    <Label htmlFor={name}>{label} </Label>
                    <Textarea placeholder={placeholder} id={name} {...props} {...field} rows={5}/>
                    <p className="text-xs italic">
                        {error ? (error?.message && <span className="text-red-500">{error?.message} </span>) :
                            (<span className="text-muted-foreground ">{helperText} </span>)}
                    </p>
                </div>
            )}
        />
    );
}


export default RHFTextArea;