import React from "react";
import Link from "@docusaurus/Link";

export default function NavbarLogo(): React.ReactElement {
  return (
    <Link
      to="/"
      className="navbar__brand jfkBrand"
      aria-label="JFK Social home"
    >
      <span className="jfkSeal" aria-hidden="true">
        <span>JFK</span>
      </span>
      <span className="jfkBrandText">
        <span className="jfkBrandName">JFK Social</span>
        <span className="jfkBrandSub">The Free-Speech Network</span>
      </span>
    </Link>
  );
}
