import React from "react";

const Footer = ({ footerData }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`relative ${footerData.bgColor} ${footerData.textColor} p-6 mt-8 ${footerData.borderColors.top} ${footerData.borderColors.bottom}`}>
            <div className="text-center">
                <p className="text-sm md:text-base">
                    {footerData.footerText.main.replace("2023", currentYear)}
                </p>
                <p className="text-xs italic text-gray-400">
                    {footerData.footerText.secondary}
                </p>
            </div>
        </footer>
    );
};

export default Footer;