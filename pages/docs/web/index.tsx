import TitleComp from "@/components/TitleComp";
import { ISectionTitle } from "@/types/common";
import DocLayout from "@/layouts/DocLayout";
import LinkList from "@/components/LinkList";
import WebInstallation from "@/sections/WebInstallation";

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
  { title: "Installation", id: "installation" },
  { title: "Stack", id: "stack" },
  { title: "Amplify", id: "amplify" },
  { title: "Compliance", id: "compliance" },
  { title: "Integrations", id: "integrations" },
  // { title: "Security", id: "security" },
  // { title: "Performance", id: "performance" },
  // { title: "SEO", id: "seo" },
  // { title: "Accessibility", id: "accessbility" },
];

const Page = () => {
  return (
    <DocLayout sections={sections}>
      <section className="section-container">
        <TitleComp title="Web" variant="title" />
        <p className="section-body">
          {`IdeaPJ's technical foundation is rooted in a robust, modern stack leveraging both TanStack and AWS Amplify.`}
        </p>
        <p className="section-body">
          {`TanStack, consist of open-source libraries & framework which are essential to the web development. TanStack is led by Tanner Linsley and backed by strategic partners such as Cloudflare and Sentry, provides the core web framework.`}
        </p>
        <p className="section-body">
          {`AWS Amplify for is a comprehensive serverless backend infrastructure, which seamlessly integrates essential Amazon Web Services components like CloudFront for content delivery (CDN), S3 for static asset storage, and Lambda for scalable serverless functions.`}
        </p>
      </section>
      <WebInstallation {...sections[0]}/>
      <section className="section-container">
        <TitleComp {...sections[1]} />
        <h5 className="font-bold text-color-75 mt-5 section-heading">
          TanStack Router
        </h5>
        <p className="section-body">
          With <a className="pj-underline font-semibold">TanStack Router</a>,
          Project create by Idea PJ have following features:
        </p>
        <ul className="list list-disc section-body gap-5 mt-5">
          <li>
            <h5 className="font-bold mb-2">Full-document SSR</h5>
            <p>
              Page is render on server before it is send to the client ( aka
              browser)
            </p>
          </li>
          <li>
            <h5 className="font-bold mb-2">Server Routes & API Routes</h5>
            <p>
              You can build backend api endpoints alongside your React Code (
              aka view )
            </p>
          </li>
          <li>
            <h5 className="font-bold mb-2">Server Functions </h5>
            <p>Able to preform Type-safe RPCs between client and server</p>
          </li>
          <li>
            <h5 className="font-bold mb-2">Middleware & Context</h5>
            <p>
              Able to add Middleware between request & response func. Data can
              be injected using middleware before it reach the target func.
            </p>
          </li>
        </ul>

        <h5 className="font-bold text-color-75 mt-5 section-heading">
          Query & Mutations
        </h5>
        <p className="section-body">
          Most of the modern website required querying & mutations. For that we
          use{" "}
          <a className="pj-underline font-semibold" href="">
            TanStack Query
          </a>
        </p>
        <ul className="list list-disc section-body gap-5 mt-5">
          <li>
            <p className="section-body">
              <span className="font-semibold">Querying:</span>&nbsp; is process
              of fetching data when user interact with your website.
            </p>
          </li>
          <li>
            <p className="section-body">
              <span className="font-semibold">Mutation:</span>&nbsp; is when
              user action is one of the following, creating, changing, updating
              or modification.
            </p>
          </li>
        </ul>

        <h5 className="font-bold text-color-75 mt-5 section-heading">
          Forms & Validation
        </h5>
        <p className="section-body">
          Every website that need to collect data from user required form. Form
          without validation is just bad UX. We use{" "}
          <a
            className="pj-underline font-semibold"
            href="https://tanstack.com/form/latest"
            target="_blank"
          >
            TanStack Form
          </a>{" "}
          to handle forms & valdiation.
        </p>
        <p className="section-body px-5 py-3 border shadow mt-5">
          <strong>Note:</strong>&nbsp; We use Zod for schema validation
        </p>
      </section>
      <section className="section-container">
        <TitleComp {...sections[2]} />
        <p className="section-body">
          {
            "We’ll create a custom design system that combines the structure and discipline of frameworks like Material UI and Ant Design, with the creativity and agility of shadcn/ui and tweakcn."
          }
        </p>
        <p className="section-body">
          {
            "This approach allows us to maintain consistency and scalability while staying flexible for creative, brand-driven design needs."
          }
        </p>
      </section>
      <section className="section-container">
        <TitleComp {...sections[3]} />
        <p className="section-body">
          We primarily rely on AWS Cloud Services for hosting. In most cases, we
          use AWS Amplify for rapid deployment and scalability. However,
          depending on client needs, we also support Docker or EC2-based VM
          hosting for more customized infrastructure setups.
        </p>
        <LinkList list={hostings} />
      </section>
    </DocLayout>
  );
};

export default Page;
