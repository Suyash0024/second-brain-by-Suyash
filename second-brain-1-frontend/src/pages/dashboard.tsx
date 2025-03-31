
import '../App.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import { Button } from '../components/Button';
import { Card } from "../components/Card";
import { CreateContentModal } from '../components/CreateContentModal';
import { PlusIcon } from '../icons/Plusicon';
import { ShareIcon } from '../icons/ShareIcon';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
import { BACKEND_URL } from '../config';

export function Dashboard() {
  const [selectedType, setSelectedType] = useState<"twitter" | "youtube" | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent(); // ✅ Fixed return from useContent

  const filteredContents = selectedType 
    ? contents.filter(({ type }) => type === selectedType) 
    : contents;

  useEffect(() => {
    refresh();
  }, [modalOpen, refresh]); // ✅ Added refresh as dependency

  // ✅ Corrected Delete Function (removed `setContents`)
  const deleteContent = async (id: string) => {
    try {
      await axios.request({
        method: "DELETE",
        url: `${BACKEND_URL}/api/v1/content`,
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json"
        },
        data: { contentId: id } // ✅ Correct way to pass body in DELETE request
      });

      // ✅ Refresh after deletion
      refresh();
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar with filtering functionality */}
      <Sidebar setSelectedType={setSelectedType} />

      {/* Main Content Section */}
      <div className="p-4 ml-72 min-h-screen bg-gray-100 flex flex-col border-2 w-full">
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

        <div className="flex justify-end gap-4">
          {/* ✅ Fixed missing size prop */}
          <Button 
            onClick={() => setModalOpen(true)} 
            variant="primary" 
            text="Add content" 
            startIcon={<PlusIcon />} 
            size="md" 
          />

          <Button 
            onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                share: true
              }, {
                headers: {
                  "Authorization": localStorage.getItem("token")
                }
              });
              const shareUrl = `http://localhost:5173/dashboard/${(response.data as { hash: string }).hash}`;
              alert(shareUrl);
            }}
            variant="secondary" 
            text="Share Brain" 
            startIcon={<ShareIcon />} 
            size="medium" // ✅ Fixed missing size
          />
        </div>

        <div className="flex gap-4 flex-wrap mt-6">
          {filteredContents.map(({ _id, type, link, title }) => (
            <Card 
              key={_id} 
              id={_id} 
              type={type} 
              link={link} 
              title={title} 
              deleteContent={deleteContent} // ✅ Pass correct function
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


// import '../App.css'
// import { useState, useEffect } from "react";
// import axios from 'axios';
// import { Button } from '../components/Button'
// import { Card } from "../components/Card"
// import { CreateContentModal } from '../components/CreateContentModal'
// import { PlusIcon } from '../icons/Plusicon'
// import { ShareIcon } from '../icons/ShareIcon'
// import { Sidebar } from '../components/Sidebar';
// import { useContent } from '../hooks/useContent';
// import { BACKEND_URL } from '../config';

// export function Dashboard() {
//   const [selectedType, setSelectedType] = useState<"twitter" | "youtube" | null>(null); //gpt
//   const [modalOpen, setModalOpen] = useState(false);
//   const {contents, refresh} = useContent() || []; //GPT CHnages

//   const filteredContents = selectedType ? contents.filter(({ type }) => type === selectedType) : contents;

//   useEffect(() => {
//     refresh();
//   },  [modalOpen])

//   // Function to delete content
//   // ✅ Corrected Delete Function
//   const deleteContent = async (id: string) => {
//     try {
//       await axios.request({
//         method: "DELETE",
//         url: `${BACKEND_URL}/api/v1/content`,
//         headers: {
//             Authorization: localStorage.getItem("token"),
//             "Content-Type": "application/json"
//         },
//         data: { contentId: id } // ✅ This is the correct way for DELETE requests
//     });

//       // 🔥 Optimistic UI update
//       setContents((prevContents) => prevContents.filter((content) => content._id !== id));
//     } catch (error) {
//       console.error("Error deleting content:", error);
//     }
//   };
  

//   return <div className="flex">
    

//    {/* Sidebar with filtering functionality */}
//    <Sidebar setSelectedType={setSelectedType} />

// {/* Main Content Section */}
// <div className="p-4 ml-72 min-h-screen bg-gray-100 flex flex-col border-2 w-full">

//   <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

//       <div className="flex justify-end gap-4">
    
//       <Button onClick={() => {
//         setModalOpen(true)}} 
//         variant="primary" text="Add content" startIcon={<PlusIcon/>}></Button>

//       <Button onClick={async () => {
//         const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
//            share: true
//         }, {
//           headers: {
//             "Authorization": localStorage.getItem("token")
//           }
//         });
//         const shareUrl = `http://localhost:5173/dashboard/${response.data.hash}`;
//         alert(shareUrl);

//       }}
        
//         variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
//       </div>

//     <div className="flex gap-4 flex-wrap mt-6">
     
      

//       {filteredContents.map(({_id, type, link, title}) => 
//        <Card key={_id} id={_id} type={type} link={link} title={title} deleteContent={deleteContent}//gpt chnage
         
//         /> )}
//       {/* <Card type="twitter" link="https://x.com/kirat_tw/status/1633685473821425666" title="First tweet"/> */}
//       {/* <Card type="youtube" link="https://www.youtube.com/watch?v=sSRaakd95Nk" title="First video"/> */}
//     </div>
    
//   </div>
//   </div>
  
// }

// export default Dashboard
 
