import logo from "../../public/images/logo.png";
import home from "../../public/images/sidebar/home.png";
import recurring from "../../public/images/sidebar/recurring.png";
import listing from "../../public/images/sidebar/listing.png";
import stats from "../../public/images/sidebar/stats.png";
import settings from "../../public/images/sidebar/settings.png";

const Sidebar = () => {
  return (
    <aside className='fixed  h-screen w-[88px] bg-white'>
      <div className=' px-[24px] pt-[32px] pb-[68px] '>
        <img className='h-[20px] w-[40px]' src={logo} alt='' />
      </div>

      <div className='flex flex-col items-center gap-10 '>
        <img src={home} alt='' className='h-6 w-6' />
        <img src={recurring} alt='' className='h-6 w-6' />
        <img src={listing} alt='' className='h-6 w-6' />
        <img src={stats} alt='' className='h-6 w-6' />
        <img src={settings} alt='' className='h-6 w-6' />
      </div>
    </aside>
  );
};

export default Sidebar;
