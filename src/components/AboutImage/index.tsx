interface IAboutImageProps {
  image: string;
}

export default function AboutImage({ image }: IAboutImageProps) {
  return (
    <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <img
        src={image}
        alt=""
        class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
      />
    </div>
  );
}
