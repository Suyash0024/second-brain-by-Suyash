
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Content {
    _id: string;
    title: string;
    link: string;
    type: "youtube" | "twitter";
}

export function useContent() {
    const [contents, setContents] = useState<Content[]>([]);

    const refresh = async () => {
        try {
            const response = await axios.get<{ contents: Content[] }>(`${BACKEND_URL}/api/v1/content`, {
                headers: { Authorization: localStorage.getItem("token") }
            });
            setContents(response.data.contents);
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    };

    useEffect(() => {
        refresh();
    }, []);

    return { contents, refresh }; // ✅ Ensured correct return structure
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
