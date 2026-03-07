import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Login() {
  const navigate = useNavigate();

  const bg =
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2070&auto=format&fit=crop";

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center relative text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* App Name */}
      <h1 className="absolute top-10 text-2xl font-semibold tracking-wide">
        Safarnama
      </h1>

      {/* Login Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl w-[360px] text-center shadow-xl">

        <h2 className="text-2xl font-semibold mb-6">Signup</h2>

        {/* Phone Input Section */}
        <div className="flex items-center gap-2 mb-4">

          <div className="bg-white/20 px-3 py-2 rounded-lg text-sm">
            🇮🇳 +91
          </div>

          <input
            type="text"
            placeholder="Enter your mobile number"
            className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white text-white outline-none"
          />
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => navigate("/otp")}
          className="w-full bg-white text-black py-2 rounded-lg font-medium mb-6 hover:bg-gray-200 transition"
        >
          CONFIRM
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-[1px] bg-white/30"></div>
          <p className="text-sm opacity-80">or</p>
          <div className="flex-1 h-[1px] bg-white/30"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-6 text-2xl">

          <button className="bg-white p-3 rounded-full hover:scale-110 transition">
            <FcGoogle />
          </button>

          <button className="bg-white p-3 rounded-full hover:scale-110 transition">
            <MdEmail className="text-black" />
          </button>

          <button className="bg-white p-3 rounded-full hover:scale-110 transition">
            <FaApple className="text-black" />
          </button>

        </div>

        {/* Terms */}
        <p className="text-xs mt-6 opacity-80 leading-relaxed">
          By proceeding, you agree to our Privacy Policy, User Agreement & T&Cs
        </p>

        {/* Login Link */}
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <span className="underline cursor-pointer">Login here</span>
        </p>

      </div>
    </div>
  );
}

export default Login;