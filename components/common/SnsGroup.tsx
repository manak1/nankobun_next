import React from "react";
import ButtonSns from "../common/ButtonSns";

type Props = {
  docId: string;
};

type sns = {
  name: string;
  href: string;
  icon: string;
  bgColor: string;
};

type snsList = sns[];

const SnsGroup: React.FC<Props> = ({ docId }) => {
  const productionUrl = "https://shincyo-shindan.vercel.app";

  const lists: snsList = [
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${productionUrl}/shindan/${docId}`,
      icon: "/static/images/sns/twitter-brands.svg",
      bgColor: "#3c94d8",
    },
    {
      name: "FaceBook",
      href: `http://www.facebook.com/share.php?u=${productionUrl}/shindan/${docId}`,
      icon: "/static/images/sns/facebook-brands.svg",
      bgColor: "#3d5897",
    },
    {
      name: "Line",
      href: `https://social-plugins.line.me/lineit/share?url=${productionUrl}/shindan/${docId}`,
      icon: "/static/images/sns/line-brands.svg",
      bgColor: "#01c300",
    },
  ];

  return (
    <ul className="flex space-x-2 mt-8 justify-center">
      {lists.map((sns) => {
        return (
          <li key={sns.name}>
            <ButtonSns
              href={sns.href}
              bgColor={sns.bgColor}
              name={sns.name}
              icon={sns.icon}
            >
              {sns.name}
            </ButtonSns>
          </li>
        );
      })}
    </ul>
  );
};

export default SnsGroup;
