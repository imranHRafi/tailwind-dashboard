import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Pagination = () => {
  return (
    <div className='flex items-center bg-white p-6'>
      <div className='mr-auto'>
        <p className='text-gray-500'>Showing 1 - 8 of 28 items</p>
      </div>
      <div className='flex items-center'>
        <BsChevronDoubleLeft className='cursor-pointer' />
        <div className='mx-12'>
          <p>
            <span className='mr-4'>1</span> of 40 pages
          </p>
        </div>

        <BsChevronDoubleRight className='cursor-pointer' />
      </div>
    </div>
  );
};

export default Pagination;
