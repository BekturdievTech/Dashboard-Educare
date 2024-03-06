import FilterBar from "../../components/filterBar/FilterBar";
import Header from "../../components/header/Header";
import LoadingSkelet from "../../components/loadingSkelet";
import { Suspense } from "react";
import Posts from "./Posts";

export default function page() {
  return (
    <main className="container">
      <Header />
      <div
        className="w-full rounded-[10px] p-5"
        style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
      >
        <FilterBar addLink="/almashinuv/create" />
        <div className="w-full text-[#A2A1A8] card-table">
          <span>Title</span>
          <span>Level</span>
          <span>Deadline</span>
          <span>Award</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        <Suspense fallback={<LoadingSkelet/>}>
          <Posts />
        </Suspense>
      </div>
    </main>
  );
}
