
// import { Logo } from "../icons/Logo";
// import { TwitterIcon } from "../icons/Twittericon";
// import { YoutubeIcon } from "../icons/YoutubeIcon";

import { ReactElement } from "react";

export function SidebarItem({ text, icon, onClick }: { 
    text: string; 
    icon: ReactElement; 
    onClick?: () => void;  // Accepts onClick function
}) {
    return (
        <div 
            className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all"
            onClick={onClick}  // Now SidebarItem itself handles clicks
        >
            <div className="pr-2">
                {icon}
            </div> 
            <div>
                {text}
            </div>
        </div>
    );
}

// export function Sidebar({ setSelectedType }: { setSelectedType: (type: "twitter" | "youtube" | null) => void }) {
//   return (
//     <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
      
//       {/* Logo */}
//       <div className="flex text-2xl pt-8 items-center">
//         <div className="pr-2 text-purple-600">
//           <Logo />
//         </div>
//         Brainly
//       </div>

//       {/* Sidebar Items */}
//       <div className="pt-8 pl-4">
//         <div onClick={() => setSelectedType("twitter")}>
//           <SidebarItem text="Twitter" icon={<TwitterIcon />} />
//         </div>
//         <div onClick={() => setSelectedType("youtube")}>
//           <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
//         </div>
//         <div onClick={() => setSelectedType(null)}>
//           <SidebarItem text="All Content" icon={<Logo />} />
//         </div>
//       </div>
//     </div>
//   );
// }




// export function SidebarItem({text, icon}: {
//     text: String;
//     icon: ReactElement;
// }) {
//     return <div className="flex text-gray-700 py-2 cursor-pointer
//     hover:bg-gray-200 rounded max-w-48 pl-4 transition-all">
//         <div className="pr-2">
//         {icon}
//         </div> 
//         <div>
//         {text}
//         </div>
//     </div>
// }
