import LoadingSkelet from "@/components/loadingSkelet";
import Card from "../../components/cardList/Card";

const data = [
  {
    id: "1",
    imageUrl: "/manager.jpg",
    title: "Regional Chief Executive Network research",
    level: "Bakalavr, Magistr",
    deadline: "12 Feb 2024",
    award: "mukofot",
    status: "active",
    seeLink: "",
  },
  {
    id: "1",
    imageUrl: "/manager.jpg",
    title: "Regional Chief Executive Network research and awards",
    level: "Bakalavr, Magistr, Doktarantura",
    deadline: "12 Feb 2024",
    award: "to'liq moliyalashtirilgan",
    status: "inactive",
    seeLink: "",
  },
];

export default async function Posts() {

  return (
    <div>
      {data && data.map((post, index) => (
        <Card post={post} key={index} />
      ))}
    </div>
  );
}

// export default async function Posts() {
//   await new Promise((resolve) => setTimeout(resolve, 10000));

//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const json = await response.json();

//   return (
//     <div>
//       {json && data.map((post, index) => <Card post={post} key={index} />)}
//     </div>
//   );
// }
