import { ReactElement } from "react";

 
interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullwidth?: boolean;
    loading?: boolean
}

// const variantClasses = {
//     "primary": "bg-purple-600 text-white",
//     "secondary": "bg-purple-200 text-purple-600"
// }
// const variantClasses = {
//     "primary": "bg-purple-600 text-white hover:bg-purple-700 transition duration-300 ease-in-out",
//     "secondary": "bg-purple-200 text-purple-600 hover:bg-purple-300 transition duration-300 ease-in-out"
// }
const variantClasses = {
    "primary": "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 ease-in-out",
    "secondary": "bg-purple-200 text-purple-600 hover:bg-purple-300 hover:shadow-md hover:shadow-purple-300/50 transition duration-300 ease-in-out"
}

const sizeStyles = {
    "sm": "py-2 px-2",
    "md": "py-2 px-4" ,
    "lg": "py-2 px-6"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center"




//
export function Button ({variant, text, startIcon, onClick, fullwidth, loading}: ButtonProps)  {
    return <button onClick={onClick} className={variantClasses[variant] + " " +
    defaultStyles + `${fullwidth ? " w-full flex justify-center items-center" : ""} 
     ${loading ? "opacity-45" : ""}`} disabled={loading}>
        <div className="pr-2">
        {startIcon}
        </div>
          {text}
    </button>
    // return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles 
    //     [props.size]}`}>
    //         {props.startIcon ? <div className="py-2 px-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}
    // </button>

}

