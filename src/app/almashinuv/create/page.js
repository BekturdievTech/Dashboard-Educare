
import Header from "../../../components/header/Header";
import CreateForm from "../../../components/CreateForm/CreateForm";


export default function page() {
    
  return (
    <section className="container">
      <Header />
      <div
        className="w-full p-5 rounded-[10px]"
        style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
      >
       <CreateForm category="almashinuv"/>
      </div>
    </section>
  );
}
