import TerminalBlock from "@/components/TerminalBlock";
import TitleComp, { TitleProps } from "@/components/TitleComp";

export default function WebInstallation(props: TitleProps) {
  return (
    <>
      <section className="section-container">
        <TitleComp {...props} />
         <p className="section-body">
          Follow the steps below.
        </p>
        <TerminalBlock
          divider
          cmd={[
            {
              copy: "npm i @ideapj/cli -g",
              comment: "install cli globally if you haven't installed it yet",
              code: (
                <>
                  <span className="text-primary">npm</span>{" "}
                  <span className="text-blue-400">i</span>{" "}
                  <span className="text-gray-300">@ideapj/cli</span>{" "}
                  <span className="text-primary">-g</span>{" "}
                </>
              ),
            },
            {
              copy: "pj create",
              comment: "create project using pj create cmd",
              code: (
                <>
                  <span className="text-primary">pj</span>{" "}
                  <span className="text-gray-300">create</span>{" "}
                </>
              ),
            },
            {
              copy: null,
              comment: "enter your project name",
              code: (
                <>
                  <span className="text-blue-400">?</span>{" "}
                  <span className="text-gray-300">What is your project name?</span>{" "}
                  <span className="text-primary">my-web</span>{" "}
                </>
              ),
            },
            {
              copy: null,
              comment: "choose the framework suitable for your project",
              code: (
                <>
                  <span className="text-blue-400">?</span>{" "}
                  <span className="text-gray-300">Choose your Web type:</span>{" "}
                  <br/>
                  <span className="text-blue-400">{">"}</span>{" "}
                  <span className="text-primary">Web</span>{" "}
                  <br/>
                  <span className="text-blue-400">{">"}</span>{" "}
                  <span className="text-gray-300">API</span>{" "}
                </>
              ),
            },
          ]}
        />
        </section>
    </>
  );
}
