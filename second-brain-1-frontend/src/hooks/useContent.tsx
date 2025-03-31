import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
//Definig intterface while deloying
interface Content {
    id: string;
    title: string;
    link: string;
    type: "youtube" | "twitter";

export function useContent() {
    const [contents, setContents] = useState([]);

    function refresh () {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then((response) => {
            
                  setContents(response.data.content);

            })
        }        
    useEffect(() => {
        refresh()
        let interval = setInterval(() => {
            refresh()

        }, 10 * 100)

        return () => {
             clearInterval(interval);

        }

    }, [])
    return {contents, refresh};

}
