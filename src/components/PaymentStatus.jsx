import RecurringStats from "./Recurring Stats";
import frame from "../../public/images/frame.png";

const PaymentStatus = () => {
  return (
    <div className='w-[424px]  '>
      {/* FIRST SECTION */}
      <div className='grid grid-cols-2 gap-2'>
        <span className='grid h-[60px] w-[208px] place-content-center rounded-sm bg-white text-sm uppercase'>
          Add
        </span>
        <span className='grid h-[60px] w-[208px] place-content-center rounded-sm bg-white text-sm uppercase'>
          Add
        </span>
        <span className='grid h-[60px] w-[208px] place-content-center rounded-sm bg-white text-sm uppercase'>
          Report
        </span>
        <span className='grid h-[60px] w-[208px] place-content-center rounded-sm bg-white text-sm uppercase'>
          Suspend
        </span>
      </div>

      {/* SECOND SECTION */}
      <div className='mt-2 h-[318px]'>
        <RecurringStats />
        <div className=''></div>
      </div>

      {/* THIRD SECTION */}
      <div className='relative mt-2 flex h-[338px] flex-col items-start overflow-hidden bg-white p-8'>
        <span className='text-xs text-gray-700'>Payouts</span>
        <h1 className='mt-1 mb-6 text-3xl font-bold text-gray-900'>
          Setup your <br /> payout method
        </h1>
        <button className='grid h-10 w-32 place-items-center rounded-sm bg-brand text-white'>
          Get Started
        </button>
        <div className="' absolute bottom-0 right-[-30px]  w-[300px] overflow-hidden">
          <img className='' src={frame} alt='' />
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
