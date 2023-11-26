
import {  InputProps } from "../ui/input";
import { Controller, useFormContext } from "react-hook-form";


interface Props extends InputProps {
  label: string | {
    name: string, description: string
  },
  helperText?: string;
  options: string[]
}

const RHFSelectField = ({
  name,
  helperText,
  label,
  options,
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

          <select id={name}  {...field} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            {options.map(o => (
              <option value={o} key={o}>{o} </option>
            ))}
          </select>
          <p className=" text-xs italic">
            {error ? error?.message && <span className="text-red-500">{error?.message} </span> :
              <span className="text-slate-700 ">{helperText} </span>}
          </p>

        </div>
      )}
    />
  );
}

export default RHFSelectField;