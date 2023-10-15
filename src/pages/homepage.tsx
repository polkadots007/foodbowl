import Header from "../components/header";
import Details from "../components/details";
import Footer from "../components/footer";
import MainContent from "../components/home_search";

const Homepage = () => {
    return (
        <div className="flex flex-col grow mx-auto w-full bg-white h-auto"> 
        <Header /> 
        <MainContent />  
        <Details />
        <Footer />   
        </div>
    );
};

export default Homepage;