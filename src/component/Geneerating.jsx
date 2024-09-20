import { loading } from "../assets";

const Geneerating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[7.5rem] ${
        className || ""
      } text-base`}
    >
      <img src={loading} alt="loading" className="w-5 h-5 mr-4" />
      AI is loading
    </div>
  );
};

export default Geneerating;
