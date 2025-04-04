import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import MessageContainer from "../../component/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen sm:min-h-[450px] md:min-h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar className="w-full sm:w-1/3 lg:w-1/4" />

\      <MessageContainer className="flex-1 min-h-[500px] sm:min-h-[450px] md:min-h-[550px] overflow-auto" />
    </div>
  );
};

export default Home;
