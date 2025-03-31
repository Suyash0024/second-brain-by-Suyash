import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

// Define API Response Type
interface SigninResponse {
    token: string;
}

export function Signin() {
    const usernameRef = useRef<HTMLInputElement | null>(null); // ✅ Ensure ref has a valid type
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            alert("Username and password are required!");
            return;
        }

        try {
            const response = await axios.post<SigninResponse>(
                `${BACKEND_URL}/api/v1/signin`,
                { username, password }
            );

            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/dashboard"); // ✅ Redirect user

        } catch (error) {
            console.error("Signin failed:", error);
            alert("Invalid username or password!");
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                {/* ✅ Fix the ref prop */}
                <Input ref={usernameRef} placeholder="Username" />
                <Input ref={passwordRef} placeholder="Password" type="password" />

                <div className="flex justify-center pt-4">
                    <Button onClick={signin} loading={false} variant="primary" text="Sign in" fullwidth={true} />
                </div>

                <div className="text-center pt-4 text-sm text-gray-600">
                    Don't have an account?
                    <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/signup")}>
                        {" "}Sign up
                    </span>
                </div>
            </div>
        </div>
    );
}



// import { Button } from "../components/Button"
// import { Input } from "../components/Input"
// import { useRef } from "react";
// import axios from "axios";
// import { BACKEND_URL } from "../config";
// import { useNavigate } from "react-router-dom";

// export function Signin() {
//     const usernameRef = useRef<HTMLInputElement>();
//     const passwordRef = useRef<HTMLInputElement>();
//     const navigate = useNavigate();
// ;
//     async function signin() {
//         const username = usernameRef.current?.value;
//         const password = passwordRef.current?.value;
//         const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
//                 username,
//                 password
            
//         })
//         const jwt = response.data.token;
//         localStorage.setItem("token", jwt);
//         navigate("/dashboard")
//         // redirect the user to the dashboard
//     }
//     return <div className="h-screen w-screen bg-gray-200 flex
//     justify-center items-center">
//         <div className="bg-white rounded-xl border min-w-48 p-8">
//             <Input reference={usernameRef} placeholder="Username" />
//             <Input reference={passwordRef} placeholder="Password" />
//             <div className= "flex justify-center pt-4">
//                  <Button onClick={ signin } loading={false} variant="primary" text="Signin" fullwidth={true} />
//             </div>

//             <div className="text-center pt-4 text-sm text-gray-600">
//                     Don't have an account?  
//                     <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/signup")}>
//                         {" "}Sign up
//                     </span>
//                 </div>
//         </div>

//     </div>
// }
