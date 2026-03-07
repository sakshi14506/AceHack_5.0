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

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs[index - 1].current.focus();
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-indigo-900/40"></div>

      {/* App Name */}
      <h1 className="absolute top-8 left-1/2 -translate-x-1/2 text-2xl font-bold opacity-90">
        Safarnama ✈️
      </h1>

      {/* OTP Card */}
      <div className="relative backdrop-blur-2xl bg-white/10 border border-white/20 p-10 rounded-3xl w-[380px] text-center shadow-2xl animate-fade">

        <div className="text-4xl mb-4">🔐</div>

        <h2 className="text-2xl font-bold mb-2">
          Verify OTP
        </h2>

        <p className="text-sm opacity-60 mb-8">
          Enter the 4-digit code sent to your phone
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-4 mb-8">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              ref={ref}
              maxLength="1"
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-14 h-14 text-center text-xl font-bold rounded-2xl bg-white/10 border border-white/25 outline-none focus:border-white focus:bg-white/20 focus:scale-110 focus:shadow-lg focus:shadow-white/10 transition-all duration-300"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={() => navigate("/personalize")}
          className="w-full bg-gradient-to-r from-white to-gray-100 text-black py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-white/20 hover:scale-[1.02] transition-all duration-300"
        >
          VERIFY
        </button>

        {/* Resend */}
        <p className="text-sm mt-6 opacity-60 cursor-pointer hover:opacity-100 transition">
          Didn't receive? <span className="underline font-medium">Resend OTP</span>
        </p>

      </div>
    </div>
  );
}

export default OTP;