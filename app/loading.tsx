export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07090e] text-white">
      <div className="w-12 h-12 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin mb-4" />
      <span className="text-xs font-mono uppercase tracking-[0.3em] text-slate-400">
        Loading Portfolio...
      </span>
    </div>
  );
}
