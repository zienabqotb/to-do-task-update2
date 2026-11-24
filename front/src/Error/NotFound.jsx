import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* خلفية جمالية (Glowing Background Effect) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full text-center relative z-10 space-y-6">
        
        {/* أيقونة تعبيرية دائرية */}
        <div className="flex justify-center">
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 shadow-xl shadow-black/40 text-indigo-400">
            <Compass size={56} strokeWidth={1.5} className="animate-spin-slow" />
          </div>
        </div>

        {/* رقم الخطأ مع تدرج لوني جذاب */}
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Page not found
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            Looks like you've wandered off the path. The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* الأزرار التفاعلية */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all duration-200 gap-2 cursor-pointer shadow-sm"
          >
            <ArrowLeft size={18} />
            Go back
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/25 gap-2 cursor-pointer"
          >
            <Home size={18} />
            Back to home
          </button>
        </div>

      </div>
    </div>
  );
}