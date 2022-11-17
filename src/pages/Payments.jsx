import PaymentStatus from "../components/paymentComponent.jsx/PaymentStatus";
import RecurringRecords from "../components/paymentComponent.jsx/RecurringRecords";

const Payments = () => {
  return (
    <div className='flex '>
      <PaymentStatus />
      <RecurringRecords />
    </div>
  );
};

export default Payments;
