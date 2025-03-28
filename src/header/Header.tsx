import headerbg from "../assets/images/header/headerbg.png";
import "./Header.css";
// import FreeDemoModal from "../components/FreeDemoModal";
// import Modal from "../features/Modal";
// import { useResponse } from "../context/ResponseContext";
import PlayButtonIcon from "../assets/icons/PlayButtonIcon";

function Header() {
  // const { isFeedbackModalOpen, setIsFeedbackModalOpen } = useResponse();

  return (
    <>
      <div
        className="bg-[#004040] h-auto lg:h-[740px] pb-10 w-full"
        style={{
          backgroundImage: `url(${headerbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center px-5 lg:px-10 h-auto lg:h-[700px]">
          <div className="mt-5 lg:mt-[10px] w-full lg:w-[55%] px-4 sm:px-8">
            <p className="text-[#35FC85] text-4xl sm:text-5xl lg:text-[64px] font-light leading-tight my-2">
              Comprehensive Boutique Software with Integrated POS and Analytics
            </p>
            <p className="text-[#E5E5E5] text-lg sm:text-2xl font-normal mt-6">
              Effortlessly Manage Your Boutique with Sewnex's <br />
              User-Friendly Interface and Flexible Features.
            </p>
          </div>

          <div className="flex justify-center items-center mt-10 lg:mt-[250px] lg:mx-52">
            <div className="flex items-center justify-center w-24 h-24 border border-[#07C9C9] shadow-md shadow-[#07C6C6] rounded-full">
              <PlayButtonIcon size={50} />
            </div>
          </div>
        </div>
      </div>

      {/* <Modal open={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)}>
        <FreeDemoModal  onClose={() => setIsFeedbackModalOpen(false)} />
      </Modal> */}
    </>
  );
}

export default Header;
