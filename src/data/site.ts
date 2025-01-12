// src/data/site.ts

// If you don't already have a separate "types" file, define the interface here:
interface SocialLink {
  link: string;
  icon: string;
}

interface SiteConfig {
  pageTitle: string;
  heading: string;
  description: string;
  author: string;
  ogTitle: string;
  ogImage: string;
  ogDescription: string;
  twitterDescription: string;
  twitterTitle: string;
  twitterImage: string;
  footerText: string;
  favicon: string;
  socialLinks: SocialLink[];
}

const env = import.meta.env;

// If you only need one universal icon, define it once:
const universalFavicon = env.PAGE_FAVICON || "favicon.svg";

export const site: SiteConfig = {
  pageTitle: env.PAGE_TITLE || "Default Title",
  heading: env.PAGE_HEADING || "Default Heading",
  description: env.PAGE_DESCRIPTION || "Description Here",
  author: env.PAGE_AUTHOR || "Author Name",
  ogTitle: env.PAGE_TITLE || "Default Title",
  ogDescription: env.PAGE_OGDESCRIPTION || "Description Here",
  twitterDescription: env.PAGE_DESCRIPTION || "Description Here",
  twitterTitle: env.PAGE_TITLE || "Default Title",
  footerText: env.PAGE_FOOTER || "Footer Text Here",

  // We unify everything under one file
  favicon: universalFavicon,
  ogImage: universalFavicon,
  twitterImage: universalFavicon,

  socialLinks: [
    {
      link: `x.com/${env.X_HANDLE || ""}`,
      icon: "fa-brands fa-x-twitter",
    },
    {
      link: `bsky.app/profile/${
        env.BSKY_HANDLE ||
        // "somehandle.bsky.social"}`,
        ""
      }`,
      icon: "fa-brands fa-bluesky",
    },
    {
      link: `youtube.com/@${env.YOUTUBE_HANDLE || "youtube"}`,
      icon: "fa-brands fa-youtube",
    },
  ],
};
