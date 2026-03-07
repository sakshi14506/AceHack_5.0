import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function OTP() {
  const navigate = useNavigate();

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (index, e) => {
    const value = e.target.value;

    if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const bg =
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2070&auto=format&fit=crop";

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center relative text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* App Name */}
      <h1 className="absolute top-10 text-2xl font-semibold">
        Safarnama
      </h1>

      {/* OTP Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl w-[360px] text-center">

        <h2 className="text-2xl font-semibold mb-4">
          Verify OTP
        </h2>

        <p className="text-sm opacity-80 mb-6">
          Enter the 4-digit code sent to your phone
        </p>

        {/* OTP Inputs */}
   <div className="flex justify-center gap-3 mb-6">
  {inputRefs.map((ref, index) => (
    <input
      key={index}
      ref={ref}
      maxLength="1"
      onChange={(e) => handleChange(index, e)}
      className="w-12 h-12 text-center text-lg rounded-lg bg-white/20 border border-white/30 outline-none"
    />
  ))}
</div>

        {/* Verify Button */}
        <button
          onClick={() => navigate("/personalize")}
          className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          VERIFY
        </button>

        {/* Resend */}
        <p className="text-sm mt-5 opacity-80 cursor-pointer">
          Resend OTP
        </p>

      </div>
    </div>
  );
}

export default OTP;