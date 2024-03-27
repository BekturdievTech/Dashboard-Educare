import Chart from "@/components/Statistics/Chart";
import Totals from "@/components/Statistics/Totals";
import DefaultHeader from "@/components/header/default";


export default function Home() {  

  return (
    <main className="container">
        <DefaultHeader/>
        <Totals/>
        <Chart/>
    </main>
  );
}