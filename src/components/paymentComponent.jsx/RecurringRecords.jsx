import { MdOutlineSort } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import Table from "./Table";
import Pagination from "../Pagination";

const RecurringRecords = () => {
  return (
    <div className='ml-2 w-[904px]   '>
      {/* TOP BAR */}
      <div className='flex h-[60px] items-center bg-white px-6 text-[#17181A]'>
        <h1 className='flex-1 '> Recurring records</h1>
        <input
          className='w-full flex-1 py-2  pl-9 placeholder:items-center placeholder:text-[#17181A] focus:rounded-md  focus:outline-none'
          type='text'
          placeholder='search'
        />
        <div className=' flex flex-1 justify-end gap-[40px]'>
          <div className='flex cursor-pointer items-center gap-[8px]'>
            <MdOutlineSort />
            <span>sort by</span>
          </div>
          <div className='flex cursor-pointer items-center gap-[8px]'>
            <CiFilter />
            <span>Filter</span>
          </div>
        </div>
      </div>
      <div>
        <Table />
      </div>
      <Pagination />
    </div>
  );
};

export default RecurringRecords;
