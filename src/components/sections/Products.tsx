import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { products } from '../../data/products';

export default function Products() {
  return (
    <section id="products" className="section-shell bg-navy-800/40">
      <SectionHeader index="// 03" title="Products" />
      <p className="-mt-8 mb-12 max-w-2xl text-sm text-navy-400 md:text-[15px]">
        Ready-made ways to learn from and work with me — courses, books, and fixed-scope service products.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.title}
            className="flex flex-col gap-4 rounded-md border border-navy-700 bg-navy-900 p-8"
          >
            <div className="flex items-center justify-between">
              <Badge tone="gold">{product.category}</Badge>
              <span className="font-mono text-xs text-navy-400">{product.priceLabel}</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-ink">{product.title}</h3>
            <p className="flex-1 text-sm leading-relaxed text-navy-400">{product.description}</p>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-gold transition-colors hover:text-ink"
            >
              {product.ctaLabel} <ArrowUpRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
