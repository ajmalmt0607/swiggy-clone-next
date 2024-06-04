import React from "react";
import { IoMdClose } from "react-icons/io";
import "../../app/globals.css";
import Image from "next/image";

const LoginModal = ({ closeModal, isModalEntering }) => {
    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={closeModal}
            />
            <div
                className={`fixed top-0 right-0 h-full bg-white p-5 shadow-lg transform pr-[160px] pl-[40px] w-[580px] z-50 ${
                    isModalEntering
                        ? "login-modal-enter-active"
                        : "login-modal-exit-active"
                }`}
            >
                <IoMdClose fontSize={25} onClick={closeModal} />
                <h2 className="text-3xl mt-6 mb-4 font-medium">Login</h2>
                <p className="mt-[10px] text-[14px]">
                    <span className="mr-1">or</span>
                    <span className="text-orange-500">create an account</span>
                </p>
                <div className="small-line"></div>
                <Image
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                    alt="login"
                    width={100}
                    height={105}
                    className="absolute top-[58px] right-[173px] z-10"
                />
                <form className="ml-1 mt-7">
                    <div className="pb-5 pt-8">
                        <input
                            type="email"
                            className="text-base top-4 px-[20px] pt-[11px] pb-[11px] border font-medium text-start text-md w-[360px] h-[70px] focus:shadow-lg focus:border-custom-gray border-slate-300"
                            placeholder="Phone number"
                        />
                    </div>
                    <button className="h-[50px] text-sm font-semibold w-[360px] text-white bg-orange-500">
                        LOGIN
                    </button>
                    <div className="text-[12px] mt-2 font-medium text-login-terms">
                        <span>By clicking on Login, I accept the </span>{" "}
                        <span className="text-black">Terms & Conditions </span>
                        <span className="text-black">Privacy Policy</span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginModal;
