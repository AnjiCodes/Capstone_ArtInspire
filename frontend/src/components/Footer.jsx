import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <>
        <div className="mt-8 w-full bg-pink px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
          <div className="flex flex-col text-white">
            <p className="text-[25px] tracking-[4.37px]">ART INSPIRE</p>
          </div>
          <div className="flex flex-col text-white">
            <p><Link to="/About">About Us</Link></p>
            <p>Newsletter</p>
            <p>Security</p>
          </div> 

          <div className="flex flex-col text-white">
            <p>Forum</p>
            <p>Support</p>
            <p>Community Member</p>
          </div> 

          <div className="flex flex-col text-white">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Terms of Service</p>
          </div> 
        </div>
        <p className="py-2 pb-6 text-center text-white bg-black text-sm tracking-wide"> © Art_Inspire, Inc. 2023. We love our users!</p>
      </>
    );
}

export default Footer;
