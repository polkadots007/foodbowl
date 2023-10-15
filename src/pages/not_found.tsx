import Header from "../components/header";

const NotFound = () => {
    return (
      <div>
        <Header />
        <div className="flex max-w-full h-[90vh] 
        items-center justify-center font-bold
        text-2xl">Not Found!</div>  
      </div>
    );
};

export default NotFound;