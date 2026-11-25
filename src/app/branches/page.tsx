import { Branch } from "@/components/site/branch";
import { BranchesIntro } from "@/components/site/branches-intro";

export default function BranchesPage() {
  return (
    <div className="pt-24 md:pt-28">
      <BranchesIntro />
      <Branch />
    </div>
  );
}
