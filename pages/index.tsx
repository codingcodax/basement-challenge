import type {GetStaticProps, NextPage} from "next";
import {motion} from "framer-motion";

// import getProducts from "@/utils/getProducts";
import Header from "@/components/home/Header";
import TextSlide from "@/components/home/TextSlide";
import Asterisks from "@/components/home/Asterisks";
import Products from "@/components/home/products";
import {IProduct} from "@/product/types";
import {simpleYAndOpacity} from "animations";

export const getStaticProps: GetStaticProps = async () => {
  const products: IProduct[] = await import("../product/mock.json").then((res) => res.default);
  // const products: Product[] = await getProducts();

  return {props: {products}};
};

const Home: NextPage<{products: IProduct[]}> = ({products}) => {
  return (
    <motion.section animate="show" initial="hidden" variants={simpleYAndOpacity}>
      <Header />

      <div className="relative">
        <TextSlide />
        <Asterisks />
      </div>

      <Products products={products} />
    </motion.section>
  );
};

export default Home;
