import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <div className=" bg-darkGreen h-screen">
      <LoginForm />
      <Footer bg="bg-darkGreen"/>
    </div>
  );
}
