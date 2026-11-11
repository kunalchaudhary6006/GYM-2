import { CheckCircle2, Globe, ShieldCheck, Sparkles, LayoutDashboard } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              AdSense Enabled
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12 md:py-16 space-y-12">
        <section className="text-center space-y-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Publisher ID: ca-pub-4543349045765374
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Your Website is Live & Ready for Monetization
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Google AdSense has been connected in the HTML <code className="text-indigo-400 bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-800/50 text-sm">&lt;head&gt;</code>. Auto-ads will automatically optimize ad placement across your pages once verified.
          </p>
        </section>

        {/* Status & Highlights Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-sm hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-white mb-2">Global CDN Delivery</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Google's official script <code className="text-xs text-slate-300">adsbygoogle.js</code> is asynchronously loaded, ensuring zero performance penalty on page load.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-sm hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-white mb-2">Auto Ads Ready</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              With your publisher ID configured in the document head, Google will automatically detect eligible ad slots and display relevant ads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-sm hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-white mb-2">Ad Unit Flexibility</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              You can also place manual display ad slots anywhere across your components using standard <code className="text-xs text-slate-300">&lt;ins className="adsbygoogle"&gt;</code> blocks.
            </p>
          </div>
        </div>

        {/* Verification / Next steps card */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-900/40 border border-indigo-500/20 p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            Verification Checklist
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Next Steps in Google AdSense Console
          </h2>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-semibold mt-0.5">1</span>
              <span>Head over to your <strong>Google AdSense dashboard</strong> &rarr; <strong>Sites</strong>.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-semibold mt-0.5">2</span>
              <span>Confirm that you added your custom domain or applet URL and click <strong>Verify</strong> / <strong>Request review</strong>.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-semibold mt-0.5">3</span>
              <span>Toggle <strong>Auto ads</strong> ON in your AdSense site settings to allow Google to automatically position ads, or insert responsive ad units wherever desired.</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        Google AdSense integration configured &bull; Client ID: ca-pub-4543349045765374
      </footer>
    </div>
  );
}
