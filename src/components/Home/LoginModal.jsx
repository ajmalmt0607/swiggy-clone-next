import React from "react";
import { IoMdClose } from "react-icons/io";
import "../../app/globals.css";
import Image from "next/image";

const LoginModal = ({ closeModal, isModalEntering }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end"
            onClick={closeModal}
        >
            <div
                className={`h-full bg-white p-5 shadow-lg transform pr-[160px] pl-[40px] relative w-[362px] ${
                    isModalEntering
                        ? "login-modal-enter-active"
                        : "login-modal-exit-active"
                }`}
            >
                <IoMdClose fontSize={25} onClick={closeModal} />
                <h2 className="text-3xl mt-6 mb-4 font-medium">Login</h2>
                <p className=" mt-[10px] text-[14px]">
                    <span className="mr-1">or</span>
                    <span className=" text-orange-500">create an account</span>
                </p>
                <div className="small-line"></div>
            </div>
            <Image
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                alt="login"
                width={100}
                height={105}
                className=" absolute top-[58px] right-0 z-10"
            />
        </div>
    );
};

export default LoginModal;
