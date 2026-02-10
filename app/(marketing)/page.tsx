// TODO: Need to understand metadata
// export const metadata: Metadata = {
//   title: "Punit Valves | Industrial Valve Manufacturer",
//   description:
//     "Discover Punit Valves, a trusted manufacturer of high-quality industrial valves. Explore reliable, precision-engineered solutions for global industries.",
//   metadataBase: new URL(ORIGIN),
//   alternates: {
//     canonical: `/`,
//   },
//   openGraph: {
//     title: "Punit Valves | Industrial Valve Manufacturer",
//     description:
//     "Discover Punit Valves, a trusted manufacturer of high-quality industrial valves. Explore reliable, precision-engineered solutions for global industries.",
//     url: `/`,
//     siteName: "Punit Industrial Valves",
//     images: [
//       {
//         url: `${ORIGIN}/og-home.png`, // Must be an absolute URL
//         width: 1200,
//         height: 630,
//       },
//     ],
//     type: "website",
//   },
// };

import { HeroV0 } from "@/components/organisms/heroV0";
import { LogoCloud } from "@/components/organisms/logo-cloud";
import { Page } from "@/components/organisms/page";
import { ProductCatalog } from "@/components/organisms/product-catalog";
import { Carousel } from "@/components/organisms/carousel";
import { sanityFetch } from "@/lib/sanity/live";
import { allProductsQuery } from "@/lib/sanity/queries";
import { CompanyOverview } from "@/components/organisms/company-overview";
import { Testimonials } from "@/components/organisms/testimonials";
import { CTA } from "@/components/organisms/cta";


export default async function Home() {
  const [{ data: products }] = await Promise.all([
    sanityFetch({ query: allProductsQuery }),
  ]);
  return (
    <Page>
      {/* Hero */}
      <HeroV0 />

      
      {/* LOGO CLOUD */}
      <LogoCloud />

      
      <ProductCatalog />
      <Carousel products={products} />

      
      {/* COMPANY OVERVIEW */}
      <CompanyOverview />

      
      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <CTA />
    </Page>
    );
}
