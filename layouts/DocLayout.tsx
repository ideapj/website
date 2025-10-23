import { ISectionTitle } from "@/types/common";

import HeaderComp from "@/components/HeaderComp";
import SectionNav from "@/components/SectionNav";
import SideNav from "@/components/SideNav";
import { ReactNode } from "react";
import SEOHeaders, { ISEO } from "@/components/SEOHeaders";
import FooterComp from "@/components/Footer";

interface IProps {
  sections: ISectionTitle[];
  title?: string;
  children: ReactNode | ReactNode[];
  seo?: ISEO;
}

const DocLayout: React.FC<IProps> = ({ sections, children, seo }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col text-color">
      <HeaderComp />
      <SEOHeaders {...seo} />
      <main className="w-screen flex justify-between px-[65px] pb-[150px]">
        <SideNav />
        <article className="article-container">{children}</article>
        <SectionNav menus={sections} />
      </main>
      <FooterComp />
    </div>
  );
};

export default DocLayout;
