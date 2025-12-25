import React from "react";

import { SOCIAL_LINKS } from "../../data/social-links";
import { Panel } from "../panel";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  return (
    <Panel className="border-x-0">
      <div className="flex items-center justify-start gap-4 p-4">
        {SOCIAL_LINKS.map((link, index) => {
          return <SocialLinkItem key={index} {...link} />;
        })}
      </div>
    </Panel>
  );
}
