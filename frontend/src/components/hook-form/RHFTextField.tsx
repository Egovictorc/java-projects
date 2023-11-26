import {InputProps} from "../ui/input";
import {Controller, useFormContext} from "react-hook-form";


interface Props extends InputProps {
    label: string | {
      name: string, description: string
    },
    helperText?: string;
}

const RHFTextField = ({
    name,
    helperText,
    label,
    placeholder,
      type
  }: Props) => {
    const { control } = useFormContext();
  
    return (
      <Controller
        name={name as string}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="w-full mb-6 text-left">
            <label
              className="block capitalize tracking-wide text-gray-700 text-sm md:text-lg font-medium mb-2"
              htmlFor={name}
            >
              {typeof label === 'string' ? (
                label
              ) : (
                <>
                  {label.name} <br />{' '}
                  <span className="text-xs md:text-sm transform-none">
                    {label.description}
                  </span>
                </>
              )}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary-main rounded py-3 px-4 mb-2 leading-tight focus:outline-none"
              id={name}
              type={type || "text"}
              placeholder={placeholder}
              {...field}
            />
              <p className=" text-xs italic">
                  {error ? error?.message && <span className="text-red-500">{error?.message} </span> :
                      <span className="text-slate-700 ">{helperText} </span>}
              </p>
          </div>
        )}
      />
    );
  }
  
export default RHFTextField;