import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/site";
import { Icon } from "./Icon";

type Variant = "hero" | "cta";

const styles: Record<Variant, { appStore: string; googlePlay: string }> = {
  hero: {
    appStore: "bg-ink text-white hover:bg-slate-800",
    googlePlay: "bg-brand text-white hover:bg-brand-dark",
  },
  cta: {
    appStore: "bg-white text-ink hover:bg-slate-100 [&_svg]:text-brand",
    googlePlay: "bg-ink text-white hover:bg-slate-800",
  },
};

function StoreButton({
  href,
  store,
  className,
}: {
  href: string;
  store: string;
  className: string;
}) {
  return (
    <a
      href={href}
      aria-label={`${store} dan yuklab oling`}
      className={`inline-flex items-center gap-3 rounded-xl px-6 py-2.5 shadow-lg shadow-slate-900/10 transition-colors ${className}`}
    >
      <Icon name="download" className="h-5 w-5" />
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] opacity-80">Yuklab oling</span>
        <span className="text-base font-bold">{store}</span>
      </span>
    </a>
  );
}

export function StoreButtons({ variant = "hero" }: { variant?: Variant }) {
  const s = styles[variant];
  return (
    <div className="flex flex-wrap gap-3">
      <StoreButton href={APP_STORE_URL} store="App Store" className={s.appStore} />
      <StoreButton href={GOOGLE_PLAY_URL} store="Google Play" className={s.googlePlay} />
    </div>
  );
}
