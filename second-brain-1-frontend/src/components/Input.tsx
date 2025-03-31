
import React from "react";

interface InputProps {
    placeholder: string;
    reference?: React.RefObject<HTMLInputElement>;
    type?: string;
}

export function Input({ placeholder, reference, type = "text" }: InputProps) {
    return (
        <input
            ref={reference}
            placeholder={placeholder}
            type={type}
            className="px-4 py-2 border rounded m-2 w-full"
        />
    );
}


// interface InputProps {
//     placeholder: string;
//     reference?: any
// }
// export function Input( { placeholder, reference}: InputProps) {

//     return <div>
//         <input ref={reference} placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded m-2" ></input>
//     </div>

// }
