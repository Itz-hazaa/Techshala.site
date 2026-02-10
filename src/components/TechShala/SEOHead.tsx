import { useEffect } from "react";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "TechShala",
      description: "Hyderabad's #1 hands-on robotics & tech workshops + exclusive school programs",
      url: "https://techshala.in",
      telephone: "+91 78420 12006",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "450",
      },
    },
    {
      "@type": "Course",
      name: "3-Day Robotics Intensive",
      description: "Build 2 projects and 1 robot in a hands-on 3-day workshop",
      provider: { "@type": "Organization", name: "TechShala" },
      offers: {
        "@type": "Offer",
        price: "29999",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "Course",
      name: "6-Day Robotics Mastery",
      description: "Build 4 projects and 1 robot in an intensive 6-day program",
      provider: { "@type": "Organization", name: "TechShala" },
      offers: {
        "@type": "Offer",
        price: "59999",
        priceCurrency: "INR",
      },
    },
  ],
};

export default function SEOHead() {
  useEffect(() => {
    // Set page title
    document.title = "TechShala – Robotics & Tech Workshops in Hyderabad | School Programs";

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "Tech Shala offers hands-on robotics workshops and exclusive online tech classes for schools in Hyderabad. Build robots, learn coding, and transform futures.");

    // OG tags
    const ogTags = [
      ["og:title", "TechShala – Build Robots. Code Future. Transform Lives."],
      ["og:description", "Hyderabad's #1 hands-on robotics workshops + exclusive school tech programs."],
      ["og:type", "website"],
      ["twitter:card", "summary_large_image"],
    ];
    ogTags.forEach(([prop, content]) => {
      let el = document.querySelector(`meta[property="${prop}"]`) || document.querySelector(`meta[name="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(prop.startsWith("og:") ? "property" : "name", prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    });

    // Schema markup
    let script = document.querySelector('script[data-schema="techshala"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-schema", "techshala");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);

    return () => {
      const s = document.querySelector('script[data-schema="techshala"]');
      s?.remove();
    };
  }, []);

  return null;
}
