import BrandLogo from "./BrandLogo";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="bg-darkGreen flex justify-between items-center">
      <BrandLogo />
      <div className="flex gap-2">
        <Button isPrimary={true} text="Login" />
        <Button isPrimary={false} text="Signup" />
      </div>
    </div>
  );
}
