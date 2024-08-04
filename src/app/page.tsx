import { Button } from "@/components/ui/button";
import Image from "next/image";
import RootLayout from "./layout";
import { Container, Title, Categories } from "@/components/shared";



export default function Home() {
  return <>

  <Container className="mt-10">
    <Title text="Все пиццы" size="lg" className="font-extrabold" />
    <Categories />
  </Container>
  
  </>
}
