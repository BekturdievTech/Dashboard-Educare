import Chart from "../components/Statistics/Chart";
import Totals from "../components/Statistics/Totals";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <main className="container">
        <Header/>
        <Totals/>
        <Chart/>
    </main>
  );
}
