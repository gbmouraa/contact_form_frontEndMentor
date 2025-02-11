import { Form } from "./components/form";
import { Footer } from "./components/footer";
export const App = () => {
  return (
    <>
      <div className="h-screen w-full space-y-16 px-5 pt-6">
        <div className="flex justify-center md:pt-20">
          <Form />
        </div>
        <Footer />
      </div>
    </>
  );
};
