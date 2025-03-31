
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeartIcon } from "../icons/Hearticon"; // ✅ Ensure correct path

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-purple-700">Your Second Brain</h1>
        <p className="text-lg text-gray-600 max-w-lg mx-auto">
          Store your most important links and revisit them anytime. Never lose track of valuable resources again.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/signin">
            <Button variant="primary" size="md" text="Sign In" /> {/* ✅ Fixed size */}
          </Link>
          <Link to="/signup">
            <Button variant="secondary" size="md" text="Sign Up" /> {/* ✅ Fixed size */}
          </Link>
        </div>
      </div>

      {/* 📌 Illustration Section */}
      <div className="mt-12 flex flex-col items-center space-y-6">
        <p className="text-gray-500 text-sm max-w-md text-center">
          "A digital extension of your mind, always accessible, always organized."
        </p>
      </div>

      {/* ❤️ Footer Section */}
      <footer className="fixed bottom-5 text-gray-600 text-sm flex items-center">
        Made with <HeartIcon className="text-red-500 mx-1" /> by Suyash Garud
      </footer>
    </div>
  );
}


// import { Link } from "react-router-dom";
// import { Button } from "../components/Button"
// import { HeartIcon } from "../icons/Hearticon";

// export function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
//       {/* Hero Section */}
//       <div className="text-center space-y-6">
//         <h1 className="text-5xl font-bold text-purple-700">Your Second Brain</h1>
//         <p className="text-lg text-gray-600 max-w-lg mx-auto">
//           Store your most important links and revisit them anytime. Never lose track of valuable resources again.
//         </p>

//         {/* Buttons */}
//         <div className="flex justify-center space-x-4 mt-4">
//           <Link to="/signin">
//             <Button variant="primary" size="md" text="Sign In" />
//           </Link>
//           <Link to="/signup">
//             <Button variant="secondary" size="md" text="Sign Up" />
//           </Link>
//         </div>
//       </div>
//       {/* 📌 Improved Illustration Section */}
//       <div className="mt-12 flex flex-col items-center space-y-6">
//         {/* <img
//           src="https://source.unsplash.com/500x300/?brain,technology"
//           alt="Second Brain Concept"
//           className="w-72 rounded-lg shadow-lg"
//         /> */}
//         <p className="text-gray-500 text-sm max-w-md text-center">
//           "A digital extension of your mind, always accessible, always organized."
//         </p>
//       </div>
//       {/* ❤️ Footer Section */}
//       <footer className="absolute bottom-5 text-gray-600 text-sm flex items-center">
//         Made with <HeartIcon className="text-red-500 mx-1" /> by Suyash Garud
//       </footer>

     
//     </div>

    
//   );
// }
