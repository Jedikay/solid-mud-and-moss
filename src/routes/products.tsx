import ProductsModule from "~/components/ProductsModule";

const products = [
  {
    name: "Intricate vase",
    href: "#",
    imageSrc: "/public/images/natalie-kinnear-8meK0SfPZYw-unsplash.jpg",
    imageAlt: "Pretty blue vase.",
    price: "$50",
  },
  {
    name: "Green and Pink Dinnerware",
    href: "#",
    imageSrc: "/public/images/toa-heftiba-yN33yGmulWE-unsplash.jpg",
    imageAlt: "Green and pink dinner set.",
    price: "$75",
  },
  {
    name: "Jewelry Holder",
    href: "#",
    imageSrc: "/public/images/tessa-edmiston-ECr_8nuXpBA-unsplash.jpg",
    imageAlt: "A jewelry holder.",
    price: "$25",
  },
  {
    name: "Striped Pitcher",
    href: "#",
    imageSrc: "/public/images/gilbert-beltran-951yvcd2tEE-unsplash.jpg",
    imageAlt: "A pitcher",
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
