interface IValuesProps {
  description: string;
  values: { name: string; description: string }[];
}

export default function Values({ description, values }: IValuesProps) {
  return (
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our values
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
          <div>
            <dt class="font-semibold text-gray-900">{value.name}</dt>
            <dd class="mt-1 text-gray-600">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
