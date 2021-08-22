import type {GetStaticProps, NextPage} from "next";

// import getProducts from "@/utils/getProducts";
import Header from "@/components/home/Header";
import TextSlide from "@/components/home/TextSlide";
import Asterisks from "@/components/home/Asterisks";
import Products from "@/components/home/products";
import {Product} from "@/product/types";

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await import("../product/mock.json").then((res) => res.default);
  // const products: Product[] = await getProducts();

  return {props: {products}};
};

const Home: NextPage<{products: Product[]}> = ({products}) => {
  return (
    <section>
      <Header />

      <div className="relative">
        <TextSlide />
        <Asterisks />
      </div>

      <Products products={products} />
    </section>
  );
};

export default Home;
