import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Network from "../components/network";

const Home = () => {
  return (
    <>
      <Head>
        <title>SafeSphere</title>
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="SafeSphere Benefits"
        title=" Why should you trust us?">
Backed by extensive enterprise experience, SafeSphere is tailored for organizations of all sizes, offering key functionalities out-of-the-box. It aligns with budgets and unique needs, providing an affordable solution
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Introducing SafeSphere for data compliance">
      </SectionTitle>
      <Video />
      <Network />
      <SectionTitle
        pretitle="Testimonials"
        title="Discover the SafeSphere Experience">
 Trust the SafeSphere community and join the ranks of businesses securing their data effortlessly.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;