import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
;
    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard")
        // redirect the user to the dashboard
    }
    return <div className="h-screen w-screen bg-gray-200 flex
    justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className= "flex justify-center pt-4">
                 <Button onClick={ signin } loading={false} variant="primary" text="Signin" fullwidth={true} />
            </div>

            <div className="text-center pt-4 text-sm text-gray-600">
                    Don't have an account?  
                    <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/signup")}>
                        {" "}Sign up
                    </span>
                </div>
        </div>

    </div>
}