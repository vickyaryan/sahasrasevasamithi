import "./App.css";
import { Fragment, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ControlledCarousel from "./components/Carousel/ControlledCarousel";
import AboutUs from "./components/About/AboutUs";
import Services from "./components/OurServices/Services";
import ChildAdoption from './components/Child adoption'
import GroceriesDistribution from "./components/Groceries distribution"
import WomenAmployment from "./components/Women employment"
import Gallery from "./components/Gallery/Gallery";
import SupportGallery from "./components/Support/SupportGallery";
import Achievement from "./components/Achievements/Achievement";
import AchievementsGallery from "./components/Achievements/AchievementsGallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contribute from "./components/Contribution/Contribute";
import WhatsappButton from "./components/Buttons/WhatsappButton";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
const PhotoGallery = lazy(() => import("./components/Gallery/PhotoGallery"));
const AchievementsPhotoGallery = lazy(() => import("./components/Achievements/AchievementsPhotoGallery"));
const SupportPhotoGallery = lazy(() => import("./components/Support/SupportPhotoGallery"));
const ContactForm = lazy(() => import("./components/Forms/ContactForm"));
const Donate = lazy(() => import("./components/Donation/Donate"));
const AboutPage = lazy(() => import("./components/About/AboutPage"));
export default function App() { 
  return (
    <Router>
      <div className="wrapper min-vh-100 d-flex flex-column justify-content-between">
        <Header />
        <div className="mb-5">
          <ScrollToTop />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <ControlledCarousel />
                  <AboutUs />
                  <Services />
                  {/* <SupportGallery /> */}
                  <ChildAdoption />
                  <GroceriesDistribution />
                  <WomenAmployment />
                  <Achievement />
                  {/* <AchievementsGallery /> */}
                  <Contribute />
                  {/* <Testimonials /> */}
                </Fragment>
              )}
            />
            <Suspense
              fallback={
                <div class="d-flex justify-content-center align-items-center" style={{'height':'50vh'}}>
                  <div className="loader"></div>
                </div>
              }
            >
              <Route path="/aboutus" component={AboutPage} />
              <Route path="/donate" component={Donate} />
              <Route path="/gallery" component={PhotoGallery} />
              <Route path="/financialsupport" component={SupportPhotoGallery} />
              <Route path="/contactus" component={ContactForm} />
              <Route path="/achievements" component={AchievementsPhotoGallery} />
            </Suspense>
          </Switch>
        </div>
        <WhatsappButton />
        <Footer />
      </div>
    </Router>
  );
}
