import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { CatalogIntro } from "@/components/catalog/catalog-intro";

export default function ProductsPage() {
  return (
    <section className="px-5 pb-20 md:px-12 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <CatalogIntro />
        <CatalogGrid />
      </div>
    </section>
  );
}
