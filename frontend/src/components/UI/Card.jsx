export default function Card({ children }) {
  return (

    <div className="
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      rounded-2xl
      shadow-xl
      p-6
      h-full
      hover:scale-[1.01]
      transition
    ">

      {children}

    </div>

  );
}