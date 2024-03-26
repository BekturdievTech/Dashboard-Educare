import Chart from "@/components/Statistics/Chart";
import Totals from "@/components/Statistics/Totals";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="container">
        <Header>
        <div>
          <h2 className="text-[20px] font-semibold">Hello Otabek</h2>
          <span className="text-[14px] text-[#A2A1A8]">Good Morning</span>
        </div>
      </Header>
        <Totals/>
        <Chart/>
    </main>
  );
}