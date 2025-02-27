import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../storeZustand/useConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversation();
  const { setSelectedConversation } = useConversation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long.");
    }

    const filteredConversations = conversations.filter((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredConversations.length > 0) {
      // console.log("Matching Conversations:", filteredConversations);
      setSelectedConversation(filteredConversations[0]); 
      setSearch("");
    } else {
      toast.error("No user found with that name.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="search"
        className="input input-bordered rounded-full"
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500/75 text-white"
      >
        <FcSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
