import { ShareIcon } from "../icons/ShareIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/Twittericon";
import { DeleteIcon } from "../icons/DeleteIcon";

interface CardProps {
    id: string;
    title: string;
    link: string;
    type: "twitter" | "youtube";
    deleteContent: (link: string) => void;  // Accept delete function
}
export function Card( {id, title, link, type, deleteContent }:CardProps) {
    return <div className="p-4 bg-white rounded-md broder-gray-200
    outline-slate-200 max-w-72 border min-h-48 min-w-72">
        <div className="flex justify-between">
            <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
    {type === "youtube" ? <YoutubeIcon /> : <TwitterIcon />}
</div>

                {title}
                
            </div>
            <div className="flex items-center">
                <div className="pr-2 text-gray-500">
                    <a href={link} target="_blank">
                    <ShareIcon/>
                    </a>
                </div>
                <div className="pr-2 text-gray-500 cursor-pointer" onClick={() => deleteContent(id)}>
                    <DeleteIcon/>
                </div>
            </div>
        </div>

        <div className="pt-4">
            {type === "youtube" && <iframe className= "w-full"src=
            {link.replace("watch", "embed").replace("?v=" , "/")}
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>}
        
            {type === "twitter" &&  <blockquote className="twitter-tweet"><p lang="en" dir="ltr">
            <a href={link.replace("x.com", "twitter.com")}></a> </p>&mdash; 
            
            </blockquote> }
       
        </div>
    </div>
    

}
