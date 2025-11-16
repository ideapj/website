import DiagramComp from "./DiagramComp";
import DiagramIcon from "./DiagramIcon";

import ConnectorX from "./ConnectorX";
import ConnectorY from "./ConnectorY";

export default function AmplifyOutOfTheBox() {
  return (
    <>
      <DiagramComp
        scopeIcon="/aws/amplify.png"
        label="Out of the box features of amplify"
      >
        <div className="col-span-4" />
        <DiagramIcon src="/aws/cloudfront.png" />
        <ConnectorX className="col-span-2" />
        <DiagramIcon src="/aws/s3.png" alt="s3" />
        <div className="col-span-4" />
        <ConnectorY className="col-start-5" />
        <div className="col-span-7" />
        <div className="col-span-4" />
        <DiagramIcon src="/aws/lambda.png" alt="lambda" />
      </DiagramComp>
    </>
  );
}
