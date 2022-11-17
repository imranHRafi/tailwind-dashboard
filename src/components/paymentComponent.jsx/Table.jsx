import { customerInfo } from "../../data/customerInfo";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

const Table = () => {
  function trimNumber(number) {
    const last = number.slice(15, 19);
    const first = number.slice(0, number.indexOf(" "));
    const concatNumber = first + " ****" + " **** " + last;
    return concatNumber;
  }

  const sortByAmount = (arr, item) => {
    const sorted = arr.sort((a, b) => (a.name > b.name ? 1 : b.name < a.name ? -1 : 0));
    return sorted;
  };

  console.log(sortByAmount(customerInfo));

  return (
    <div className='text-[#17181A]'>
      <table className='divTable w-full table-fixed '>
        {/* TABLE HEAD */}
        <thead className='divTableHeading'>
          <tr className='flex justify-between bg-white text-left text-xs font-normal text-[#757A80]'>
            <th className='w-[240px] p-4 font-normal  uppercase'>customer name</th>
            <th className=' w-[280px]  p-4  font-normal uppercase '>card</th>
            <th className='w-[160px] p-4  font-normal uppercase '>amount</th>
            <th className='w-[160px] p-4 font-normal uppercase '>frequency</th>
            <th className='w-[80px] p-4  uppercase'></th>
          </tr>
        </thead>
        {/* TABLE BODY */}
        <tbody className='w-full border-b'>
          {customerInfo.map((c) => (
            <tr className='flex items-center justify-between  border-b bg-white' key={c.id}>
              <td className='flex w-[240px] cursor-pointer items-center gap-4 p-4 uppercase'>
                <img className=' h-7 w-7 rounded-full object-cover' src={c.image} alt='' />
                <div>
                  <h1 className='text-sm font-bold'>{c.name}</h1>
                  <span className='text-[12px] uppercase text-[#5B616E]'>{c.ins}</span>
                </div>
              </td>
              <td className='flex w-[280px] items-center gap-4 p-4  uppercase'>
                <RiVisaLine fontSize={24} />
                <span className='text-sm tracking-[-1px]'>{trimNumber(c.card)}</span>
              </td>
              <td className='w-[160px] p-4  text-sm'>${c.amount}</td>
              <td className='w-[160px] p-4   text-sm'>{c.frequency}</td>
              <td className=' cursor-pointer p-4'>
                <BsChevronRight fontSize={24} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
