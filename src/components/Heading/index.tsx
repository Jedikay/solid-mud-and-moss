interface IHeadingProps {
  title: string;
  tophat: string;
  blurb: string;
}
export default function Heading({ title, tophat, blurb }: IHeadingProps) {
  return (
    <div class="bg-neutral-2300 px-6 py-8 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-base font-semibold leading-7 text-green-800">{tophat}</p>
        <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {title}
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">{blurb}</p>
      </div>
    </div>
  );
}
