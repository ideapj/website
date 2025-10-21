import TitleComp from "@/components/TitleComp";
import { cn } from "@/utils";
import Link from "next/link";
import { ISectionTitle } from "@/types/common";
import DocLayout from "@/layouts/DocLayout";
import LinkList from "@/components/LinkList";

const hostings = [
  {
    id: "amplify-hosting",
    name: "Amplify",
    url: "/docs/frontend/amplify-hosting",
  },
  {
    id: "hosting-on-vm",
    name: "Virtual Machine",
    url: "/docs/frontend/hosting-on-vm",
  },
  {
    id: "hosting-on-docker",
    name: "Docker",
    url: "/docs/frontend/hosting-on-docker",
  },
];

const sections: ISectionTitle[] = [
  { title: "Stack", id: "stack" },
  { title: "Design System", id: "design-system" },
  { title: "Hosting", id: "hosting" },
];

const Page = () => {
  return (
    <DocLayout sections={sections}>
      <section className="section-container">
        <TitleComp title="Introduction" variant="title" />
        <p className="section-body">
            IdeaPJ is the Serverless Fullstack framework which is desgned to scale with the company.
        
        </p>
        <p className="section-body">
          Idea PJ allow developer to:
        </p>
        <ul className="list list-disc section-body">
          <li>easily configure SEO</li>
          <li>built secure websites</li>
          <li>built better UI & UX for the users</li>
          <li>
            develop and maintain client side{`( Browsers )`} code
          </li>
          <li>develop and maintain server side code</li>
        </ul>
      </section>
      <section className="section-container">
        <TitleComp {...sections[0]} />
        <h5 className="s1-b text-white/75 mt-5">Router</h5>
        <p className="section-body">
          NextJS come with two router which is page router and app router. Both
          page router and app router come with benefits and drawback.
        </p>
        <p className="section-body">
          Page Router come first, because of that most of our ( idea pj ) tech
          stack revolve around the page router.
        </p>
        <h5 className="s1-b text-white/75 mt-5">State Management</h5>
        <p className="section-body">
          State is a special variable in a React component that, when updated,
          automatically informs (or triggers) the component to re-render with
          the new value.
        </p>
        <p className="section-body">
          We group the state into categories, which are
        </p>
        <ul className="list list-disc section-body gap-5">
          <li>
            <h5 className="font-bold mb-2">Global State</h5>
            <p className="mb-2">
              A type of state defined outside of React components, typically in
              standalone stores (e.g. Zustand) or external data layers (e.g.
              TanStack Query). This state is then connected back to React
              components for rendering and interaction.
            </p>
            <p className="mb-5">
              In global state, data is managed outside the React component tree
              and shared across multiple components as needed.
            </p>
            <Link className={cn("flex gap-2 text-[#FF5C00] group")} href="/">
              <span className="group-hover:translate-x-[3px] default-transition">
                {">"}
              </span>
              Learn more
            </Link>
          </li>
          <li>
            <h5 className="font-bold mb-2">Local State</h5>
            <p className="mb-5">
              {
                "A type of state that is defined and managed directly within a React component using hooks like useState or useReducer. This state is scoped to the component where it's declared and is not accessible by other components unless passed down as props or shared via the Context API."
              }
            </p>
            <p className="mb-5">
              {
                "In local state, the data lives and updates inside a single component, making it ideal for handling component-specific logic such as input fields, toggle switches, modal visibility, or temporary UI feedback."
              }
            </p>
            <Link className={cn("flex gap-2 text-[#FF5C00] group")} href="/">
              <span className="group-hover:translate-x-[3px] default-transition">
                {">"}
              </span>
              Learn more
            </Link>
          </li>
        </ul>
        <h5 className="s1-b text-white/75 mt-5">Data Fetching & Mutations</h5>
        <p className="section-body">
          When fetching or mutating data from an API (separate backend), there’s
          one key consideration:
        </p>
        <p className="section-body">
          Does the data need to be available during the initial render (i.e.,
          server-side rendering)?
        </p>
        <ul className="list list-disc section-body gap-5">
          <li>
            <h5 className="font-bold mb-2">If yes ?</h5>
            <p className="mb-5">
              Fetch the data using getServerSideProps to ensure the page is
              pre-rendered with the required data.
            </p>
          </li>
          <li>
            <h5 className="font-bold mb-2">If no ?</h5>
            <p className="mb-5">
              {
                "Use useFetchQuery (an extension of TanStack Query’s useQuery) to handle client-side data fetching after the page loads."
              }
            </p>
          </li>
        </ul>
        <p className="section-body">
          Most mutations happen on the client side, so you generally don’t need
          to handle mutations in server-side logic.
        </p>
        <Link className={cn("flex gap-2 text-[#FF5C00] group")} href="/">
          <span className="group-hover:translate-x-[3px] default-transition">
            {">"}
          </span>
          Learn more
        </Link>
        <h5 className="s1-b text-white/75 mt-5">Styling</h5>
        <p className="section-body">
          We focus on structure, design token, typography & accessbility in
          design stage and copy the flow to development stage.
        </p>
      </section>
      <section className="section-container">
        <TitleComp {...sections[1]} />
        <p className="section-body">
          {"We’ll create a custom design system that combines the structure and discipline of frameworks like Material UI and Ant Design, with the creativity and agility of shadcn/ui and tweakcn."}
        </p>
        <p className="section-body">
          {"This approach allows us to maintain consistency and scalability while staying flexible for creative, brand-driven design needs."}
        </p>
      </section>
      <section className="section-container">
        <TitleComp {...sections[2]} />
        <p className="section-body">
          We primarily rely on AWS Cloud Services for hosting. In most cases, we use AWS Amplify for rapid deployment and scalability. However, depending on client needs, we also support Docker or EC2-based VM hosting for more customized infrastructure setups.
        </p>
        <LinkList list={hostings}/>
      </section>
    </DocLayout>
  );
};

export default Page;
