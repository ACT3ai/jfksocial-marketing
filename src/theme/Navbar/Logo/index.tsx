import React from "react";
import Link from "@docusaurus/Link";

export default function NavbarLogo(): React.ReactElement {
  return (
    <Link
      to="/"
      className="navbar__brand wcBrand"
      aria-label="WeCitizens Social home"
    >
      <span className="wcSeal" aria-hidden="true">
        <span>WE</span>
      </span>
      <span className="wcBrandText">
        <span className="wcBrandName">WeCitizens Social</span>
        <span className="wcBrandSub">The Free-Speech Network</span>
      </span>
    </Link>
  );
}
