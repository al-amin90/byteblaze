import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-116px)]">
            <ScaleLoader color='#F92FD3' size={100}></ScaleLoader>
        </div>
    );
};

export default Loader;