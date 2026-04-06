"use client";

export default function BrowserMockup({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="browser-mockup w-full overflow-hidden">
      <div className="browser-mockup-bar">
        <div className="browser-mockup-dot bg-red-400" />
        <div className="browser-mockup-dot bg-yellow-400" />
        <div className="browser-mockup-dot bg-green-400" />
        <div className="flex-1 ml-4 bg-slate-700/50 rounded-md h-6 flex items-center px-3 overflow-hidden">
          <span className="text-xs text-slate-400 truncate">{url}</span>
        </div>
      </div>
      <div className="bg-white overflow-hidden">{children}</div>
    </div>
  );
}
