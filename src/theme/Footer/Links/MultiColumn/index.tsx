import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { ThemeClassNames } from "@docusaurus/theme-common";
import LinkItem from "@theme/Footer/LinkItem";

type FooterItem = {
  to?: string;
  href?: string;
  html?: string;
  label?: string;
  className?: string;
  prependBaseUrlToHref?: string;
};

type FooterColumn = {
  title?: string;
  className?: string;
  items: FooterItem[];
};

/**
 * Maps a footer column title to a destination route. Docusaurus's footer
 * schema does not allow a link target on the column header itself, so
 * the mapping lives here. Keep in sync with footer.links in
 * docusaurus.config.ts.
 */
const COLUMN_TITLE_LINKS: Record<string, string> = {
  "Users (Citizens)": "/",
  Influencers: "/influencers",
  "Your Social Network": "/fork",
};

function ColumnLinkItem({ item }: { item: FooterItem }) {
  return item.html ? (
    <li
      className={clsx("footer__item", item.className)}
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}

function ColumnTitle({ title }: { title?: string }) {
  if (!title) {
    return null;
  }
  const target = COLUMN_TITLE_LINKS[title];
  if (target) {
    return (
      <Link className="footer__title footer__title--link" to={target}>
        {title}
      </Link>
    );
  }
  return <div className="footer__title">{title}</div>;
}

function Column({ column }: { column: FooterColumn }) {
  return (
    <div
      className={clsx(
        ThemeClassNames.layout.footer.column,
        "col footer__col",
        column.className,
      )}
    >
      <ColumnTitle title={column.title} />
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinksMultiColumn({
  columns,
}: {
  columns: FooterColumn[];
}) {
  return (
    <div className="row footer__links">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
}
