import logo from "../../../public/images/logo.png";
import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoIosStats } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import Tooltip from "../Tooltip";

const Sidebar = () => {
  const IconClass = "h-6 w-6 hover:text-brand";
  return (
    <aside className='fixed  h-screen w-[88px] bg-white'>
      <div className=' px-[24px] pt-[32px] pb-[68px] '>
        <img className='h-[20px] w-[40px]' src={logo} alt='' />
      </div>

      <div className='flex flex-col items-center gap-10 '>
        <Link to='/'>
          <Tooltip tooltip='Home'>
            <AiOutlineHome className={IconClass} />
          </Tooltip>
        </Link>
        <Link to='/payments'>
          <Tooltip tooltip='Recurring Payment'>
            <MdPayment className={IconClass} />
          </Tooltip>
        </Link>
        <Link to='/listing'>
          <Tooltip tooltip='listing'>
            <HiOutlineClipboardList className={IconClass} />
          </Tooltip>
        </Link>
        <Link to='/statistics'>
          <Tooltip tooltip='Statistics'>
            <IoIosStats className={IconClass} />
          </Tooltip>
        </Link>
        <Link t0='settings'>
          <Tooltip tooltip='Settings'>
            <GiSettingsKnobs className={IconClass} />
          </Tooltip>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
