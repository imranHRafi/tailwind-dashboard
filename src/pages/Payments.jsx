import Navbar from "../components/Navbar";
import PaymentStatus from "../components/PaymentStatus";
import RecurringRecords from "../components/RecurringRecords";
import Sidebar from "../components/Sidebar";

const Payments = () => {
  const screenSize = window.screen.width;
  return (
    <div className=' flex bg-zinc-50 lg:container'>
      <Sidebar />
      <div className='ml-[88px] flex flex-1 flex-col'>
        <Navbar />
        <div className='ml-2 flex h-full'>
          <PaymentStatus />
          <RecurringRecords />
        </div>
      </div>
    </div>
  );
};

export default Payments;
