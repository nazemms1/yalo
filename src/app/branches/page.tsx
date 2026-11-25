import { Branch } from "@/components/site/branch";
import { BranchesIntro } from "@/components/site/branches-intro";

/** The page heading sits inside the same container as the cards, so it lines up with them on every screen. */
export default function BranchesPage() {
  return (
    <>
      <section className="px-5 md:px-12">
        <div className="mx-auto max-w-7xl">
          <BranchesIntro />
        </div>
      </section>
      <Branch showHeader={false} />
    </>
  );
}
