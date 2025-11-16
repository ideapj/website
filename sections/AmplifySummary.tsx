import TitleComp, { TitleProps } from "@/components/TitleComp";
import AmplifyOutOfTheBox from "@/diagrams/AmplifyOutOfTheBox";

type IProps = {} & TitleProps;

export default function AmplifySummary(props: IProps) {
  return (
    <section className="section-container">
      <TitleComp {...props} />
      <p className="section-body">
        {
          "Amplify is fully serverless solution for web development. It has CDN, Server Side process & Object Storage out of the box. More importantly it has build in Security Defenses."
        }
      </p>
      <h5 className="font-bold mb-2">Out of the box features</h5>
      <ul className="list list-disc section-body gap-5">
        <li className="section-body">
          <span className="font-semibold">CDN:</span>&nbsp; Amplify uses
          CloudFront under the hood for CDN.
        </li>
        <li className="section-body">
          <span className="font-semibold">SSR:</span>&nbsp; Every request will come to CloudFront. It the request required SSR, CloudFront will trigger Lambda Function via {'"Lambda Function URL"'} to render SSR Content.
        </li>
        <li className="section-body">
          <span className="font-semibold">DDoS Protection:</span>&nbsp; Website hosted on amplify are protected using AWS Shield. AWS Shield automatically detect and inline mitigation of malicious traffic.
        </li>
        <li className="section-body">
          <span className="font-semibold">Static Website Hosting:</span>&nbsp; Amplify use S3 to store all the static file which are create after build.
        </li>
      </ul>
      <p className="section-body">
        {
          "Most people will use Amplify for just hosting alone. But Amplify is more than just an hosting service. Amplify is an AWS service which is use by Enterprise business to build production ready APP. "
        }
      </p>
      <AmplifyOutOfTheBox/>
    </section>
  );
}
