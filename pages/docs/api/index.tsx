import DocLayout from "@/layouts/DocLayout";
import TitleComp from "@/components/TitleComp";
import { ISectionTitle } from "@/types/common";
import Link from "next/link";


const sections: ISectionTitle[] = [
  { title: "Branches", id: "branches" },
  { title: "Working on features", id: "working-on-feature" },
  { title: "Conventional Commit", id: "converntional-commit" },
  { title: "Merging Branches", id: "merging-branches" },
]; 

const GitPage: React.FC = () => {
  return (
    <DocLayout sections={sections}>
      <section className="section-container">
        <TitleComp title="Git" variant="title" />
        <p className="section-body">
          Git is the well known version control tool through out the software development industry.
        </p>
        <h5 className="s1-b text-white/75 mt-5">CI / CD</h5>
        <p className="section-body">
          CI / CD stands for {'"Continuous integration"'} & {'"Continuous Deployment"'}. Which mean we will be adding features and deploying those feature continuely.
        </p>
        <p className="section-body">
          Beacuse of this we sperated project enviroment by using git.
        </p>
        <p className="section-body">
          Every project will have three enviroment which is development, staging & production. Which can be divided to three branches dev, staging & prod.
        </p>
        <h5 className="s1-b text-white/75 mt-5">Feature Development</h5>
        <p className="section-body">
          Most of the time multiple features are developed at the same time. Beacuse the we need to create branches base on the feature we are working on.
        </p>
        <h5 className="s1-b text-white/75 mt-5">Code Review</h5>
        <p className="section-body">
          Inorder to make project healthy we need to make regular code review.
        </p>
      </section>
      <section className="section-container">
        <TitleComp {...sections[0]} />
        <p className="section-body">
          There are lots of git workflow out there. For our parther companies we use the following workflow which work for us. 
        </p>
        <h5 className="s1-b text-white/75 mt-5">main </h5>
       
        <p className="section-body">
          Main branch is the branch which store the clean progress of the project.
          In main branch we keep only the commit which is necessary.
          
        </p>
        <h5 className="s1-b text-white/75 mt-5">feature/{"<feature-name>"}</h5>
        <p className="section-body">
          When working on feature we work on the feature branch. 
        </p>
        <h5 className="s1-b text-white/75 mt-5">prod</h5>
        <p className="section-body">
          Commits in Production branch describes the production history. Production branch is connect to Production servers using CI / CD
        </p>
        <h5 className="s1-b text-white/75 mt-5">staging</h5>
        <p className="section-body">
          Commits in Staging branch describes the staging history. Staging branch is connect to Staging servers using CI / CD
        </p>
      </section>
      <section className="section-container">
        <TitleComp {...sections[1]} />
        <p className="section-body">
          We have to rule for working on the feature which is {'"One developer for One feature"'}. 
        </p>
        <p className="section-body">
          But in some situation need to developed quickly. In those case dev teams can follow these approach 
        </p>
        <h5 className="s1-b text-white/75 mt-5">Divide the feature into sub features</h5>
        <p className="section-body">
          When the feature is too big we can divided that feature into multiple sub features so the different devloper can work on it at the same time.
        </p>
        <h5 className="s1-b text-white/75 mt-5">Pair Programming</h5>
        <p className="section-body">
          Pair Programming is when two developer work on the a feature while sharing the single workstation.
        </p>
      </section>
      <section className="section-container">
        <TitleComp {...sections[2]} />
        <p className="section-body">
          Our commits need to readable & trackable. To do that we use conventional commit.
        </p>
        <p className="section-body">
          We follow some of the guideline from &nbsp; 
          <Link className="underline" href="https://www.conventionalcommits.org/en/v1.0.0/">this page</Link> with some adjustment.
        </p>
        <h5 className="s1-b text-white/75 mt-5">add</h5>
        <p className="section-body">
          adding stuff in to the project.
        </p>
        <h5 className="s1-b text-white/75 mt-5">remove</h5>
        <p className="section-body">
          remove stuff in to the project.
        </p>
        <h5 className="s1-b text-white/75 mt-5">update</h5>
        <p className="section-body">
          update stuff in to the project.
        </p>
      </section>
      <section className="section-container">
        <TitleComp {...sections[3]} />
        <p className="section-body">
         When working on feature we will be commiting lots of changes. Too many commit can make it harder for the developers to track the project changes. 
        </p>
        <p className="section-body">
         Beacuse of this when ever we merge to another branch we have to create pull request with sqaush commit enabled. And confirm the commit when it is ready.
        </p>
      </section>
    </DocLayout>
  );
};

export default GitPage;
