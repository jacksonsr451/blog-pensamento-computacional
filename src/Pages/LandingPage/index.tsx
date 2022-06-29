import { Helmet } from "react-helmet";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function LandingPage() {


    return (
        <div>
            <Helmet>
                <title>Landing Page</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <Header />
            <Footer />
        </div>
    )
}