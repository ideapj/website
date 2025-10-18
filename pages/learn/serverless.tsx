import LinkSummary, { ILinkSummary } from "@/components/LinkSummary";
import TitleComp from "@/components/TitleComp";
import { LearnBeardcrumb } from "@/configs/beardcrumb";
import LearnLayout from "@/layouts/LearnLayout";

const stack = [
  {
    id: "react",
    name: "React",
  },
  {
    id: "nextjs",
    name: "Next Js",
  },
  {
    id: "tailwind",
    name: "Tailwind",
  },
];

const contents: ILinkSummary[] = [
  {
    id: "seo-friendly-portoflio",
    url: "/learn/frontend-creating-todo-app",
    title: "Build SEO Friendly Portfolio",
    stack,
    level: 1,
    summary: (
      <>
        <p>
          {
            "Let's build the portoflio website which focus on SEO, Accessibility & Performance"
          }
          {" In this tutorial we will focus on"}
        </p>
        <ul className="list list-disc section-body mt-5 mb-3">
          <li>Learning using HTML Semantic tags</li>
          <li>Fetching data on server before render</li>
          <li>Accessilbity Best Practice</li>
        </ul>
      </>
    ),
  },
  {
    id: "creating-todo-app",
    url: "/learn/frontend-creating-todo-app",
    title: "Creating todo app",
    stack,
    level: 1,
    summary: (
      <>
        <p>
          {
            "Lets explore the Idea PJ's Front End Framework by creating the simple todo app."
          }
          {" In this tutorial we will explore "}
        </p>
        <ul className="list list-disc section-body mt-5 mb-3">
          <li>Fetching and Mutation data</li>
          <li>Styling website</li>
        </ul>
      </>
    ),
  },
];

const Page = () => {
  return (
    <LearnLayout>
      <section className="section-container">
        <TitleComp
          title="Serverless"
          variant="title"
          beardcrumb={LearnBeardcrumb}
        />
        <div className="flex flex-col gap-10 mt-5">
          {contents.map((content) => (
            <LinkSummary {...content} key={content.id} />
          ))}
        </div>
      </section>
    </LearnLayout>
  );
};

export default Page;
