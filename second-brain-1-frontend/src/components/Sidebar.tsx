import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { Logo } from "../icons/Logo";
import { AllIcon } from "../icons/AllContenticon";
export function Sidebar({ setSelectedType }: { setSelectedType: (type: "twitter" | "youtube" | null) => void }) {
    return (
      <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        
        {/* Logo */}
        <div className="flex text-3xl font-bold pt-8 items-center">
  <div className="pr-2 text-purple-600">
    <Logo />
  </div>
  <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 
                   bg-clip-text text-transparent tracking-wide">
    Brainly
  </span>
</div>




  
        {/* Sidebar Items */}
        <div className="pt-8 pl-4">
          <SidebarItem text="All Contents" icon={<AllIcon />} onClick={() => setSelectedType(null)} />
          <SidebarItem text="Twitter" icon={<TwitterIcon />} onClick={() => setSelectedType("twitter")} />
          <SidebarItem text="YouTube" icon={<YoutubeIcon />} onClick={() => setSelectedType("youtube")} />
         
        </div>
      </div>
    );
  }
  

// export function Sidebar({ setSelectedType }: { setSelectedType: (type: "twitter" | "youtube" | null) => void }) {
//     return (
//         <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
//             <div className="flex text-2xl pt-8 items-center">
//                 <div className="pr-2 text-purple-600">
//                     <Logo />
//                 </div>
//                 Brainly
//             </div>

//             <div className="pt-8 pl-4">
//                 <SidebarItem text="Twitter" icon={<TwitterIcon />} onClick={() => setSelectedType("twitter")} />
//                 <SidebarItem text="YouTube" icon={<YoutubeIcon />} onClick={() => setSelectedType("youtube")} />
//             </div>
//         </div>
//     );
// }



// import { TwitterIcon } from "../icons/Twittericon";
// import { YoutubeIcon } from "../icons/YoutubeIcon";
// import { SidebarItem } from "./SidebarItem";
// import { Logo } from "../icons/Logo";

// export function Sidebar() {
//     return <div className="h-screen bg-white border-r w-72 fixed
//     left-0 top-0 pl-6">
//         <div className="flex text-2xl pt-8 items-center">
//             <div className="pr-2 text-purple-600">
//                  <Logo/>
//             </div>
//             Brainly
//         </div>
        
//         <div className="pt-8 pl-4">
//             <SidebarItem text="Twitter" icon={<TwitterIcon />} />
//             <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
//         </div>
//     </div>
// }
