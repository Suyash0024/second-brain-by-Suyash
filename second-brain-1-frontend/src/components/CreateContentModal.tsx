import { useRef, useState } from "react";
import { CrossIcon } from "../icons/Crossicon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });

        onClose();
    }

    if (!open) return null; // ✅ Proper conditional rendering

    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-slate-500 opacity-60"></div>

            {/* Modal Content */}
            <div className="relative bg-white p-6 rounded shadow-lg z-10">
                {/* Close Button */}
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon />
                    </div>
                </div>

                {/* Input Fields */}
                <div>
                    <Input reference={titleRef} placeholder="Title" />
                    <Input reference={linkRef} placeholder="Link" />
                </div>

                {/* Type Selection */}
                <div>
                    <h1 className="text-center">Type</h1>
                    <div className="flex gap-2 justify-center pb-2">
                        <Button
                            text="Youtube"
                            variant={type === ContentType.Youtube ? "primary" : "secondary"}
                            onClick={() => setType(ContentType.Youtube)}
                        />
                        <Button
                            text="Twitter"
                            variant={type === ContentType.Twitter ? "primary" : "secondary"}
                            onClick={() => setType(ContentType.Twitter)}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <Button onClick={addContent} variant="primary" text="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
}




// import { useRef, useState } from "react";
// import { CrossIcon } from "../icons/Crossicon";
// import { Button } from "./Button";
// import { Input } from "./Input"  // ✅ Correct path
// import { BACKEND_URL } from "../config";
// import axios from "axios";

// enum ContentType {
//     Youtube = "youtube",
//     Twitter = "twitter"
// }
// interface CreateContentModalProps {
//   open: boolean;
//   onClose: () => void;
// } // added while deploying issue
// //controlled component
// export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
//     const titleRef = useRef<HTMLInputElement>();
//     const linkRef = useRef<HTMLInputElement>();
//     const [type, setType] = useState(ContentType.Youtube);

//    async function addContent() {
//         const title = titleRef.current?.value;
//         const link = linkRef.current?.value;


//         await axios.post(`${BACKEND_URL}/api/v1/content`, {
//             link,
//             title,
//             type
//         }, {
//             headers: {
//                 "Authorization" : localStorage.getItem("token")
//             }
//         })

//         onClose();
        

//     }
//     // return <div>
//     //     {open && <div> 
//     return <div>{open ? "Modal Open" : "Modal Closed"}</div>; //while deploying
            
            
//             <div className="w-screen h-screen 
//         bg-slate-500 fixed top-0 left-0 opacity-60 flex
//         justify-center">
            
//             </div>
//             <div className="w-screen h-screen 
//          fixed top-0 left-0  flex
//         justify-center">
            
            

//                 <div className="flex
//             flex-col justify-center ">
//                 <span className="bg-white opacity-100 p-4 rounded">
//                    <div className="flex justify-end">
//                        <div onClick={onClose} className="cursor-pointer">
//                             <CrossIcon />
//                        </div>
//                     </div>
//                     <div>
//                         <Input reference={titleRef} placeholder={"Title"}/>
//                         <Input reference={ linkRef} placeholder={"Link"}/>
//                     </div>
//                     <div>
//                         <h1>Type</h1>
//                         <div className="flex gap-1 justify-center pb-2">
//                              <Button text="Youtube" variant={type === ContentType.Youtube ?
//                                "primary" : "secondary"} onClick={() => {
//                                   setType(ContentType.Youtube)
//                             }}></Button>
//                             <Button text="Twitter" variant={type === ContentType.Twitter ?
//                                  "primary" : "secondary"} onClick={() => {
//                                   setType(ContentType.Twitter)
//                             }}></Button>
//                             </div>
//                                 <div className="flex justify-center">
//                                 <Button onClick={addContent} variant="primary" text="Submit" />
                         
//                          </div>
//                     </div>
//                 </span>
//             </div>
//             </div>



            
//         </div>}
//     </div>
// }

