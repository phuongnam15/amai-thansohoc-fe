import galaxyContact from "../../assets/images/backgrounds/galaxyContact.webp";
import React from "react";

const Contact = () => {
    return (
        <>
            <div className="relative w-full h-auto">
                <img src={galaxyContact} alt="" className="relative object-cover w-full h-auto z-10" />
                <div className="absolute flex items-center justify-center z-20">
                    <p className="text-white text-center font-prata-regular text-4xl">
                        Liên hệ tới map for success
                    </p>
                    <p className="text-white text-center font-ibmplexsans-regular text-base">
                        Lorem ipsum dolor sit amet consectetur. Quis mi tincidunt non quis vitae dictum quis. Nunc amet scelerisque sit id facilisi pulvinar ultricies. Arcu nulla enim sociis blandit tristique mollis. Augue consequat id ullamcorper a. Bibendum amet laoreet.
                    </p>
                    <div>
                        <input type="text" placeholder="Nhập đầy đủ họ tên*" className="" />
                        <input type="text" placeholder="Nhập email của bạn*" className="" />
                        <input type="text" placeholder="Bạn muốn nhắn gì tới Map for success?" className="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;