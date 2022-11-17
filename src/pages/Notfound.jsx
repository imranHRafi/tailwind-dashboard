import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-9 bg-white'>
      <h1 className='text-5xl text-brand'>!Oops</h1>
      <p>The page you are searching for doesn't exist!</p>
      <Link to='/'>
        <button className='grid h-10 w-32 place-items-center rounded-sm bg-brand text-white'>
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Notfound;
