import ProductsModule from "~/components/ProductsModule";

const products = [
  {
    name: "Product 1",
    href: "#",
    imageSrc: "your/picture/goes/here",
    imageAlt: "This is product 1, a pretty vase.",
    price: "$50",
  },
  {
    name: "Product 2",
    href: "#",
    imageSrc: "your/picture/goes/here",
    imageAlt: "This is product 2, a tasteful sculpture.",
    price: "$75",
  },
  {
    name: "Product 3",
    href: "#",
    imageSrc: "your/picture/goes/here",
    imageAlt: "This is product 3, a jewelry holder.",
    price: "$25",
  },
  {
    name: "Product 4",
    href: "#",
    imageSrc: "your/picture/goes/here",
    imageAlt: "This is product 4, a pitcher",
    price: "$60",
  },
];

export default function Products() {
  return (
    <>
      <ProductsModule products={products} />
    </>
  );
}
