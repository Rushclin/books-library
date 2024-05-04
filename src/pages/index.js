import React from "react";
import Layout from "components/layout";

import Banner from "sections/banner";
import Services from "sections/services";
import Testimonials from "sections/testimonials";
import CustomerSupport from "sections/customer-support";
import Feature from "sections/feature";
import VideoOne from "sections/video-one";
import CallToAction from "sections/call-to-action";
import BoostAgencies from "sections/boost-agencies";

export default function IndexPage() {
  return (
    <Layout>
      {/* <Banner /> */}
      <Services />
      <BoostAgencies />
      <VideoOne />
      <Testimonials />
      <CustomerSupport />
      <Feature />
      <CallToAction />
    </Layout>
  );
}
