type AdSlotProps = {
  label?: string;
};

/** AdSense 승인 후 ins 태그 또는 스크립트를 이 영역에 삽입하면 됩니다. */
export default function AdSlot({ label = "광고 영역" }: AdSlotProps) {
  return (
    <aside
      aria-label={label}
      className="flex min-h-[120px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-400"
    >
      {label}
    </aside>
  );
}
