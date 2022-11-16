import { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const isSticky = () => {
    if (window.scrollY >= 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  //className={sticky ? "sticky top-0 bg-white shadow-sm" : ""}

  return (
    <div className={sticky ? "sticky top-0 bg-white shadow-lg " : ""}>
      <nav className=' flex h-20   flex-row items-center '>
        <h1 className='mr-auto ml-10 px-8 text-2xl font-bold text-black'>Recurring Payment </h1>

        <div>
          <ul className=' flex items-center gap-6'>
            <li>
              <AiOutlineQuestionCircle fontSize={28} className='cursor-pointer' />
            </li>
            <li>
              <CgProfile fontSize={28} className='cursor-pointer' />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
