import LinkBox from "@/components/LinkBox";
import TitleComp from "@/components/TitleComp";
import ReactNativeIcon from "@/icons/ReactNativeIcon";
import ServerlessIcon from "@/icons/ServerlessIcon";
import ShopifyIcon from "@/icons/ShopifyIcon";
import WebDesignIcon from "@/icons/WebDesignIcon";
import WebIcon from "@/icons/WebIcon";
import LearnLayout from "@/layouts/LearnLayout";

const paths = [
  {
    id: "web",
    name: "Web",
    url: "/learn/web",
    icon: <WebIcon size={30}/>,
  },
  {
    id: "serverless",
    name: "Serverless",
    url: "/learn/serverless",
    icon: <ServerlessIcon size={23}/>,
  },
  {
    id: "web-design",
    name: "Web Design",
    url: "/learn/web-design",
    icon: <WebDesignIcon size={23}/>,
  },
  {
    id: "shopify",
    name: "Shopify",
    url: "/learn/shopify",
    icon: <ShopifyIcon size={25}/>,
  },
  {
    id: "react-native",
    name: "React Native",
    url: "/learn/react-native",
    icon: <ReactNativeIcon size={25}/>,
  },
];

const Page: React.FC = () => {
  return (
    <LearnLayout>
      <section className="section-container">
        <TitleComp title="Learning Paths" variant="title" />
        <div className="grid grid-cols-3 gap-5 mt-5">
          {paths.map((item) => (
            <LinkBox {...item} text={item.name} key={item.id} />
          ))}
        </div>
      </section>
    </LearnLayout>
  );
};

export default Page;
