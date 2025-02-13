import { useState } from "react";
import { Heart } from "lucide-react";

const LikeButton = () => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center space-x-2 p-2 rounded-full transition duration-300 hover:scale-110"
    >
      <Heart fill="currentColor" className="w-6 h-6 text-red-500" />
      <span className="text-sm font-bold font-mono">{count}</span>
    </button>
  );
};
    
export default LikeButton;
