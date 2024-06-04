import { IoMdClose } from "react-icons/io";
import { CiGps } from "react-icons/ci";
import { PiClockCounterClockwiseFill } from "react-icons/pi";

const LocationModal = ({ closeModal, isModalEntering }) => {
    return (
        <div className="fixed inset-0 z-40">
            <div
                className="absolute inset-0 bg-[#282c3f] opacity-70"
                onClick={closeModal}
            ></div>

            <div
                className={`fixed inset-y-0 left-0 z-50 flex w-3/10 bg-white ${
                    isModalEntering ? "modal-enter-active" : "modal-exit-active"
                }`}
                style={{
                    width: "37.7%",
                    height: "100vh",
                }}
            >
                <div className="p-6 pl-40 pr-10 overflow-y-auto max-h-full">
                    <button className="text-gray-500" onClick={closeModal}>
                        <IoMdClose fontSize={25} />
                    </button>
                    <form className="ml-1 mt-7">
                        <div className="pb-5">
                            <input
                                type="email"
                                className="top-4 pr-[72px] pl-[20px] border font-medium text-md w-[360px] h-[50px] focus:shadow-lg focus:border-custom-gray border-slate-300"
                                placeholder="Search for area, street name.."
                            />
                        </div>
                        <div className="flex py-[22px] px-[24px] border mb-5 border-slate-300">
                            <div className="mr-2">
                                <CiGps fontSize={23} color="#535665" />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-base font-medium text-modal-1 hover:text-orange-500">
                                    Get current location
                                </span>
                                <span className="text-[13px] text-modal-2">
                                    Using GPS
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col py-[22px] px-[24px] border border-slate-300">
                            <div className="mb-3 flex">
                                <div className="mr-2">
                                    <PiClockCounterClockwiseFill
                                        fontSize={23}
                                        color="#535665"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-base font-medium text-modal-1 hover:text-orange-500">
                                        Kottakkal
                                    </span>
                                    <span className="text-[13px] text-modal-2">
                                        Kerala, India
                                    </span>
                                </div>
                            </div>
                            <div className="custom-border"></div>

                            <div className="flex">
                                <div className="mr-2">
                                    <PiClockCounterClockwiseFill
                                        fontSize={23}
                                        color="#535665"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-medium text-modal-1 hover:text-orange-500">
                                        Kochi
                                    </span>
                                    <span className="text-[13px] text-modal-2">
                                        Kerala, India
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;
