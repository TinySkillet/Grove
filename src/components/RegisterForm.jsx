import Button from "./Button";
import SectionHeader from "./SectionHeader";
import SubHeading from "./SubHeading";
import Footer from "./Footer";

export default function RegisterForm() {
  const styles = {
    width: "40rem",
    margin: "auto",
  };

  const inputStyles = {
    boxSizing: "border-box",
    background: "none",
    fontFamily: "Poppins",
    border: "1px solid #E9FCD1",
    borderRadius: "30px",
    height: "53px",
    width: "400px",
    padding: ".75rem 2rem",
    fontWeight: "500",
    color: "white",
    translateX: "1rem",
    fontSize: ".9rem",
  };

  return (
    <div className="w-full pt-10 px-44 pb-12">
      <div
        style={styles}
        className="flex flex-col items-center border-4 border-dashed px-1 py-12 border-paragraphGreen rounded-3xl"
      >
        <SectionHeader
          text="Welcome to Grove"
          center={true}
          classes="font-poppins font-semibold text-paragraphGreen"
        />
        <SubHeading
          text="Create an account to join the Grove community."
          isPrimary={true}
        />
        <input
          type="text"
          placeholder="First Name"
          className="focus:outline-none mt-10"
          style={inputStyles}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="focus:outline-none mt-5"
          style={inputStyles}
        />
        <input
          type="text"
          placeholder="Email Address"
          className="focus:outline-none mt-5"
          style={inputStyles}
        />
        <input
          type="password"
          placeholder="Password"
          className="focus:outline-none mt-5"
          style={inputStyles}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="focus:outline-none mt-5 mb-10"
          style={inputStyles}
        />
        <Button text="Register" isPrimary={true} />
      </div>
    </div>
  );
}
