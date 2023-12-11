import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { HeaderData } from "@/typings";
import { InstanceMotion, InstanceNextLink } from "@/pages";
type Props = {
  pageInfoData: HeaderData;
};
const InstacnePhoneIcon = PhoneIcon as any;
const InstacneEnvelopeIcon = EnvelopeIcon as any;
const InstanceMapPinIcon = MapPinIcon as any;
export default function CardContact({ pageInfoData }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2 max-w-7xl">
      <InstanceMotion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}>
        <InstanceNextLink
          href={`tel:${pageInfoData?.phoneNumber}`}
          className="cardContact">
          <InstacnePhoneIcon className="h-7 w-7" />
          <p>{pageInfoData?.phoneNumber}</p>
        </InstanceNextLink>
      </InstanceMotion.div>

      <InstanceMotion.div
        initial={{
          x: 100,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}>
        <InstanceNextLink
          href={`mailto:${pageInfoData?.email}`}
          className="cardContact">
          <InstacneEnvelopeIcon className="h-7 w-7" />
          <p>{pageInfoData?.email}</p>
        </InstanceNextLink>
      </InstanceMotion.div>

      <InstanceMotion.div
        initial={{
          y: 200,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="col-span-2">
        <InstanceNextLink
          href="mailto:melladmrshid@gmail.com"
          className="cardContact">
          <InstanceMapPinIcon className="w-7 h-7" />
          <p>{pageInfoData?.loaction}</p>
        </InstanceNextLink>
      </InstanceMotion.div>
    </div>
  );
}
