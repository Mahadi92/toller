import React, { useState } from "react";
import HideIco from "./icons/HideIco";
import ShowIco from "./icons/ShowIco";

interface PropType {
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "search"
    | "url"
    | "date"
    | "time"
    | "textarea";
  name: string;
  label: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  Icon?: any;
  defaultValue?: string | Date | number;

  hasError?: boolean;
  disabled?: boolean;
  helperText?: string;
  rest?: any;
}

const InputField: React.FC<PropType> = ({
  type = "text",
  name,
  label = "Input",
  placeholder,
  Icon,
  onChange,
  rest,
  defaultValue,
  hasError,
  helperText,
  disabled,
}) => {
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <div className="w-full grid gap-1">
      <label className="text-sm md:text-base" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        {type === "textarea" ? (
          <textarea
            className={`w-full p-2 border rounded-md border-slate-100 text-font-light ${
              disabled && "disabled:bg-slate-200 cursor-not-allowed"
            }`}
            onChange={onChange}
            name={name}
            id={name}
            rows={3}
            disabled={disabled}
            value={defaultValue}
            {...rest}
          ></textarea>
        ) : (
          <input
            className={`w-full h-input pl-5 border rounded-md border-slate-100 text-font-light ${
              disabled && "disabled:bg-slate-200 cursor-not-allowed"
            }`}
            onChange={onChange}
            type={
              type === "password" ? (isShowPass ? "text" : "password") : type
            }
            name={name}
            id={name}
            disabled={disabled}
            placeholder={placeholder}
            value={defaultValue}
            {...rest}
          />
        )}

        <button
          type="button"
          className={`absolute w-9 h-11 flex items-center justify-center bg-transparent top-0.5 align-middle right-0.5 rounded-md ${
            type === "password" ? "cursor-pointer" : "cursor-default"
          } ${disabled && "bg-transparent"}`}
          onClick={() => setIsShowPass(!isShowPass)}
        >
          {type === "password" ? isShowPass ? <HideIco /> : <ShowIco /> : Icon}
        </button>

        <p className={`text-sm ${hasError ? "text-red-500" : "text-gray-500"}`}>
          {helperText}
        </p>
      </div>
    </div>
  );
};

export default InputField;
