export default function LoadingSkelet() {
  const listItems = Array.from({ length: 6 }, (_, index) => index + 1);
  return (
    <div className="space-y-6">
      {listItems.map((item) => (
        <div className="flex gap-[10px] items-center" key={item}>
          <Skeleton className="w-[60px] h-[40px]" />
          <Skeleton className="w-[310px] h-[20px]" />
          <Skeleton className="w-[140px] h-[20px]" />
          <Skeleton className="w-[90px] h-[20px]" />
          <Skeleton className="w-[130px] h-[20px]" />
          <Skeleton className="w-[90px] h-[20px]" />
          <Skeleton className="w-[90px] h-[20px]" />
        </div>
      ))}
    </div>
  );
}

function Skeleton({ className }) {
  return (
    <div
      className={`bg-slate-200 motion-safe:animate-pulse rounded ${className}`}
    />
  );
}
