import Hero from "../components/Hero";
import wave from "../assets/wave.svg";


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-116px)] relative ">
            <div className="z-10">
                <Hero></Hero>
            </div>

            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;