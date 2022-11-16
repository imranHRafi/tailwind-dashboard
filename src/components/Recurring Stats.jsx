import Chart from "./Chart";
const RecurringStats = () => {
  const monthlyProcess = [
    { name: "Jan", Total: 1200 },
    { name: "Feb", Total: 2100 },
    { name: "Mar", Total: 800 },
    { name: "Apr", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "Jun", Total: 1700 },
  ];
  const monthlyPayments = [
    { name: "Jan", Total: 10 },
    { name: "Feb", Total: 7 },
    { name: "Mar", Total: 13 },
    { name: "Apr", Total: 5 },
    { name: "May", Total: 14 },
    { name: "Jun", Total: 17 },
  ];
  function totalCount(items) {
    return items.map((t) => t.Total).reduce((a, b) => a + b, 0);
  }

  const gradient = "#A264FF";

  return (
    <div className=' bg-white p-8'>
      {/* HEADING  */}
      <div className='grid grid-cols-2'>
        <h1>Recurring stats</h1>
        <div className='flex  bg-[#F1F2F2]'>
          <span className='m-1 mr-auto flex h-[22px] w-[76px]  items-center  justify-center rounded-sm bg-white text-xs'>
            Monthly
          </span>
          <span className='m-1 mr-auto flex h-[22px] w-[76px] items-center  justify-center rounded-sm  text-xs'>
            Yearly
          </span>
        </div>
      </div>
      {/* CHART  */}
      <div className='mt-8 flex items-center justify-center border-b'>
        <div className='mr-auto w-[160px] '>
          <h1 className='mb-1 text-3xl font-bold'>${totalCount(monthlyProcess)}</h1>
          <span>monthly process</span>
        </div>
        <div className=''>
          <Chart data={monthlyProcess} gColor='#A264FF' />
        </div>
      </div>
      {/* TOTAL PAYMENT */}
      <div className='mt-8 flex items-center justify-center'>
        <div className='mr-auto w-[160px] '>
          <h1 className='mb-1 text-3xl font-bold'>{totalCount(monthlyPayments)}</h1>
          <span>Recurring Payments</span>
        </div>
        <div className=''>
          <Chart data={monthlyPayments} gColor='#1EA655' />
        </div>
      </div>
    </div>
  );
};

export default RecurringStats;
