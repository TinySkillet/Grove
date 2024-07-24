import BrandLogo from "./BrandLogo";
import Button from "./Button";

export default function Footer() {
  const style = {
    boxSizing: "border-box",
    background: "none",
    fontFamily: "Poppins",
    border: "1px solid #E9FCD1",
    borderRadius: "30px",
    // width: "340px",
    height: "53px",
    padding: ".75rem 9rem .75rem 2.25rem",
    fontWeight: "500",
    color: "white",
    translateX: "1rem", 
    fontSize: '.9rem'
  };

  return (
    <div className="flex w-full justify-between mt-5 items-center">
      <div className="flex flex-col gap-6">
        <BrandLogo />
        <p className="font-poppins text-xs text-white">
          © 2024 Grove. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 translate-x-7">
        <h1 className="text-white font-poppins capitalize text-xl translate-x-20">
          Sign Up For Updates
        </h1>
        <label htmlFor="" className="flex justify-center translate-x-16" style={{width: "500px"}}>
          <input type="text" placeholder="Email Address" style={style} className="focus:outline-none w-full"/>
          <div className="z-10 -translate-x-full">
            <Button text="Submit" isPrimary={true} />
          </div>
        </label>
      </div>
    </div>
  );
}
