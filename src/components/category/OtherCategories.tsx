import Link from "next/link";
import type { Category } from "@/lib/data";

interface Props {
  categories: Category[];
}

export function OtherCategories({ categories }: Props) {
  if (categories.length === 0) return null;

  return (
    <div className="border-t border-line bg-surface-soft py-10">
      <div className="max-w-[1120px] mx-auto px-5">
        <p className="text-sm font-semibold text-ink mb-4">다른 카테고리 둘러보기</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full border border-line bg-surface text-sm text-ink-sub hover:border-primary hover:text-primary transition-colors duration-150"
            >
              {cat.name}
              <span className="text-xs text-ink-sub/60">{cat.agentCount}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
