interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center flex flex-col items-center" : "flex flex-col items-start"}`}>
      {badge && (
        <div className="flex items-center gap-4 mb-8">
          {!centered && <div className="w-12 h-px bg-indigo-500/30 hidden sm:block"></div>}
          <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50 shadow-sm backdrop-blur-sm">
            {badge}
          </span>
          {centered && <div className="w-12 h-px bg-indigo-500/30 hidden sm:block"></div>}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 mb-6 leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-slate-500 text-[18px] max-w-2xl leading-[1.6] font-medium mb-10 ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
