
POLITICAL MOVEMENT = "We The Citizens"
Domain = WeTheCitizens.io
WebApp = app.WeTheCitizens.io

This directory is a docusaurus marketing website for We the Citizens. When it has call-to-action buttons, they'll often go to app.wethecitizens.io. 

This doc source is ROOT_DIR is dir:
~/BGit/act3/docus_we_social/


The list of directories which we call the Level 2 directories is under the following: (LEVEL_2_DIRECTORIES):
~/BGit/act3/docus_we_social/site/docs/

~/BGit/act3/docus_we_social/site/docs/{one specific level 2 dir}/
~/BGit/act3/docus_we_social/site/docs/{one specific level 2 dir}/overview.mdx <== The UI page for that "Level 2 area"

~/BGit/act3/docus_we_social/site/docs/{one specific level 2 dir}/{level 3 page}.mdx <== This is normally a UI page for a Level 3. The name won't be overview.mdx; it'll be something else. It'll often be a few words, underscores. Always lowercase. The Level 2 overview.mdx should have a link in to here"


This is where the code is and so much, the normal main product and a whole bunch outside the code also 
~/BGit/act3/we_citizens/
    /code/
    /pm/        these are the product management specification files. 
    /ai/        these are the product management specification files. 
    /cli/       these are the product management specification files. 
    /mcp/       these are the product management specification files. 
    


As far as the main product has a directory in a repo for data, and it's a whole hierarchy. Sometimes you learn and look in there to learn things when writing pages for this topic. We often want this to be introduction and explaining to people, ramping them up from not knowing anything about what we're doing to understanding it, but some of our low-level 3s will get more specific. 
~/BGit/act3/data_we_citizens/


This file is where we keep a list of the level twos, and we'll have descriptions in there to understand the meaning and scope of them. 
~/BGit/act3/docus_we_social/level_2.csv


We pair up with our social network, which is secondary, but sometimes we'll make references to it. 

Social network name = We Citizens.Social

Social Network domain: WeCitizens.social
Social Network marketing site docusaurus: m.WeCitizens.social


====================================================================
THE TWO PARTY FRONT DOORS
====================================================================

We The Citizens has two partisan front doors. They are Level 2 areas on this
site and they are also pinned items in the top bar.

* "We The Citizens R"  -> Republicans -> WeCitizensR.com
  level_2_key = we_the_citizens_r
* "We The Citizens D"  -> Democrats   -> WeCitizensD.com
  level_2_key = we_the_citizens_d

They are ONE web app rendered two ways, selected by the domain the request
arrived on. Not two products, not two deployments, not two data sets.

THE MIRROR-SYMMETRY RULE binds everything we write about them. Everything true
of R is true of D with the party label swapped: one award pipeline, symmetric
harshness, no copy that compares or characterizes a party, the cross-party
column always present. The unit of judgement is a person and a vote, never a
party. Review test for any change: "would I ship the exact mirror of this to
the other edition tomorrow?" If no, it does not ship.

The authoritative product spec is ~/BGit/act3/we_citizens/pm/r_vs_d.mdx.
Read it before writing anything new about the two editions.


====================================================================
SITE NAVIGATION — ONE SOURCE, EVERY PAGE
====================================================================

The top bar and the footer are defined ONCE and appear on every page. Do not
add a second navbar or footer anywhere.

* internal/nav.ts is THE single source of truth.
  It reads level_2.csv at build time and generates the navbar items, the
  "More" mega-menu, the footer columns, and the footer column-title links.
  Node-side only — it touches the filesystem, so never import it from a
  client component.

* docusaurus.config.ts consumes it: partyNavbarItems(), moreNavbarItem(),
  footerColumns(), clientNavData().

* Docusaurus renders themeConfig.navbar / themeConfig.footer through
  @theme/Layout, and every surface on this site — MDX docs, blog posts, and
  the hand-written React pages under site/pages/ — is wrapped in that Layout.
  That is why one edit in internal/nav.ts changes the whole site.

* Anything the BROWSER needs from internal/nav.ts crosses over through
  siteConfig.customFields (clientNavData()), never by importing the module.

Two swizzled theme components support this:

* src/theme/NavbarItem/NavbarNavLink — adds a `subLabel` prop, which renders a
  navbar or dropdown label on two lines ("We The Citizens R" over
  "Republicans"). Every navbar link funnels through this one component, so the
  two-line label works in the top bar, in dropdowns, and in the mobile drawer.
* src/theme/Footer/Links/MultiColumn — makes footer column titles clickable,
  using the title -> route map from customFields.footerColumnLinks.

TO ADD A LEVEL 2 AREA:
1. Add the row to level_2.csv.
2. Create site/docs/{level_2_key}/overview.mdx and _category_.json
   (_category_.json position = the nav_order column).
3. Put the key in one MENU_GROUPS group and one FOOTER_GROUPS group in
   internal/nav.ts, and give it a short subLabel.
Step 3 is enforced: the build FAILS with a named error if a CSV key is in no
group, in two groups, or in a group but not in the CSV. That guard is what
keeps "the More menu shows all the Level 2s" true over time.

WIDTH BUDGET FOR THE TOP BAR (internal/css/custom.css, "Fitting the bar"):
the navbar rides a 1320px rail, wider than the 1180px article column, because
brand + four site links + both party doors + More + two auth buttons need
~1250px. Below 1420px the brand strapline hides; below 1380px the four site
links (.wcNavFoldable) fold out of the bar and their duplicates in the More
menu (.wcMoreFolded) appear instead. If you add another top-bar item, re-check
that budget — it has about 70px of slack.
