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
      const response = await axios.get<{ data: Content[] }>(`${BACKEND_URL}/api/v1/content`);
      setContents(response.data.data); // Ensure `data` exists in response
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return { contents, refresh };
}
