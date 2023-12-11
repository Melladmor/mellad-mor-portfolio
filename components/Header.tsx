import React from "react";
import { SocialIcon } from "react-social-icons";
import { headerInfoData } from "@/data/headerData";
import { InstanceMotion, InstanceNextLink } from "@/pages";
const InstanceSocialIcon = SocialIcon as any;
function Header() {
  const social = headerInfoData?.social;
  const email = headerInfoData.email;

  const showSocial = social?.map((el: any) => {
    if (el?.name !== "whatsapp") {
      return (
        <InstanceSocialIcon
          key={el?.id}
          url={el?.url}
          className="cursor-pointer"
          network={el?.name}
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      );
    } else {
      return (
        <InstanceSocialIcon
          key={el?.id}
          url={`https://wa.me/${el?.url}`}
          className="cursor-pointer"
          network={el?.name}
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      );
    }
  });

  return (
    <header className="sticky top-0 flex flex-row justify-between items-start max-w-7xl mx-auto z-20 xl:items-center p-5">
      <InstanceMotion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center">
        {showSocial}
      </InstanceMotion.div>

      <InstanceMotion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <InstanceSocialIcon
          url={`mailto:${email}`}
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <InstanceNextLink
          href="#contact"
          className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </InstanceNextLink>
      </InstanceMotion.div>
    </header>
  );
}

export default Header;
