import { Button } from "@/components/ui/button";
import Image from "next/image";
import RootLayout from "./layout";
import { Container, Title, TopBar, Categories, SortPopup, Filters } from "@/components/shared";




export default function Home() {
  return <>

  <Container className="mt-10">
    <Title text="Все пиццы" size="lg" className="font-extrabold" />
  
  </Container>

  <TopBar />

  <Container className="mt-10 pb-14">
    <div className="flex gap-[60px]">

      {/* Фильрация */}
      <div className="w-[250px]">
        <Filters />
      </div>


      {/* Список товаров */}
      <div className="flex-1">
        <div className="flex flex-col gap-16">Список товаров</div>
        </div>   
      </div>
  </Container>
  
  </>
}
