
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

// Define correct response type
interface Content {
    id: string;
    title: string;
    link: string;
    type: "youtube" | "twitter";
}

interface ApiResponse {
    contents: Content[];
}

export function useContent() {
    const [contents, setContents] = useState<Content[]>([]); 

    async function refresh() {
        try {
            const response = await axios.get<ApiResponse>(`${BACKEND_URL}/api/v1/content`, {
                headers: { "Authorization": localStorage.getItem("token") || "" }
            });

            console.log("API Response:", response.data); // Debugging

            if (response.data && Array.isArray(response.data.contents)) {
                setContents(response.data.contents);
            } else {
                console.error("Unexpected API response format", response.data);
                setContents([]);
            }
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    }

    useEffect(() => {
        refresh();
        const interval = setInterval(() => {
            refresh();
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return { contents, refresh };
}


// import { useEffect, useState } from "react";
// import { BACKEND_URL } from "../config";
// import axios from "axios";
// //Definig intterface while deloying
// interface Content {
//     id: string;
//     title: string;
//     link: string;
//     type: "youtube" | "twitter";

// export function useContent() {
//     const [contents, setContents] = useState<Content[]>([]);  ////Definig intterface while deloying

//     function refresh () {
//         axios.get(`${BACKEND_URL}/api/v1/content`, {
//             headers: {
//                 "Authorization": localStorage.getItem("token")
//             }
//         })
//             .then((response) => {
            
//                   setContents(response.data.content);

//             })
//         }        
//     useEffect(() => {
//         refresh()
//         let interval = setInterval(() => {
//             refresh()

//         }, 10 * 100)

//         return () => {
//              clearInterval(interval);

//         }

//     }, [])
//     return {contents, refresh};

// }
