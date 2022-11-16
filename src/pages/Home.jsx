import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=' flex bg-zinc-50 lg:container'>
      <Sidebar />
      <div className='ml-[88px] flex flex-1 flex-col'>
        <Navbar />
        <div className='ml-2 flex h-full'>Home</div>
      </div>
    </div>
  );
};
export default Home;
