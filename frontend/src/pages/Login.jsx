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
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-indigo-900/40"></div>

      {/* App Name */}
      <h1 className="absolute top-8 left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wide opacity-90">
        Safarnama ✈️
      </h1>

      {/* Login Card */}
      <div className="relative backdrop-blur-2xl bg-white/10 border border-white/20 p-10 rounded-3xl w-[380px] text-center shadow-2xl animate-fade">

        <h2 className="text-2xl font-bold mb-2">Welcome</h2>
        <p className="text-white/60 text-sm mb-6">Sign up to start your journey</p>

        {/* Phone Input Section */}
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-white/15 backdrop-blur px-3 py-2.5 rounded-xl text-sm border border-white/10">
            🇮🇳 +91
          </div>

          <input
            type="text"
            placeholder="Enter your mobile number"
            className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 text-white outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
          />
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => navigate("/otp")}
          className="w-full bg-gradient-to-r from-white to-gray-100 text-black py-2.5 rounded-xl font-semibold mb-6 hover:shadow-lg hover:shadow-white/20 hover:scale-[1.02] transition-all duration-300"
        >
          CONFIRM
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/30"></div>
          <p className="text-xs opacity-60 uppercase tracking-wider">or continue with</p>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/30"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-5 text-2xl">
          <button className="bg-white p-3.5 rounded-2xl hover:scale-110 hover:shadow-lg transition-all duration-300 group">
            <FcGoogle className="group-hover:scale-110 transition" />
          </button>

          <button className="bg-white p-3.5 rounded-2xl hover:scale-110 hover:shadow-lg transition-all duration-300 group">
            <MdEmail className="text-gray-700 group-hover:text-blue-600 transition" />
          </button>

          <button className="bg-white p-3.5 rounded-2xl hover:scale-110 hover:shadow-lg transition-all duration-300 group">
            <FaApple className="text-black group-hover:scale-110 transition" />
          </button>
        </div>

        {/* Terms */}
        <p className="text-xs mt-8 opacity-50 leading-relaxed">
          By proceeding, you agree to our Privacy Policy, User Agreement & T&Cs
        </p>

        {/* Login Link */}
        <p className="text-sm mt-4 opacity-80">
          Already have an account?{" "}
          <span className="underline cursor-pointer hover:text-white transition font-medium">Login here</span>
        </p>

      </div>
    </div>
  );
}

export default Login;