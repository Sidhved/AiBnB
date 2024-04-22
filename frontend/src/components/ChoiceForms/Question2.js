import Navbar from "../Utilities/Navbar";
import ShowcaseContainer from "../Utilities/ShowcaseContainer";
import LargeHeading from "../Texts/LargeHeading";
import TextBox from "../Inputs/TextBox";


function Question2(){

    return (
        <div className="relative">
            <div className="bg-showcase h-[100vh] w-full bg-center bg-cover bg-no-repeat relative overflow-x-hidden">
                {/* Overlay */}
                <div className="h-[100%] w-[100%] bg-black opacity-50 absolute"></div>

                <div className="z-40 absolute">
                    <Navbar />

                    {/* Showcase */}
                    <ShowcaseContainer>
                        <div className="space-y-10 mb-20 py-10">
                            <div className="flex flex-row justify-center font-[pacifico]">
                                <LargeHeading>How far do you want to travel?</LargeHeading>
                            </div>
                            <div className="justify-center flex flex-row content-center">
                                <TextBox placeholder="Hot, Cold, Sunny, etc" />
                            </div>                            
                        </div>
                    </ShowcaseContainer>
                </div>
            </div>

            <div className="h-[60vh] bg-white"></div>
        </div>
    );
}


export default Question2;