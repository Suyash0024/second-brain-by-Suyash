
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function useContent() {
    const [contents, setContents] = useState<any[]>([]); // ✅ Explicitly define type

    function refresh() {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((response) => {
            if (response.data && response.data.content) {
                setContents(response.data.content);
            }
        })
        .catch((error) => {
            console.error("Error fetching content:", error);
        });
    }

    useEffect(() => {
        refresh();
        const interval = setInterval(() => {
            refresh();
        }, 10000); // ✅ Changed from 10 * 100 (1s) to 10000 (10s)

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
