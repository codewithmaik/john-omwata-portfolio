const gradients = [
  "from-forest-deep to-forest",
  "from-forest to-forest-mid",
  "from-forest-mid to-sage",
  "from-sage to-sage-light",
  "from-forest-deep to-sage",
  "from-forest-mid to-forest-deep",
];

function initialsOf(name: string) {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function WorkThumbnail({
  name,
  seed,
}: {
  name: string;
  seed: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] bg-gradient-to-br font-serif text-[13px] font-semibold text-white/90 ${gradients[seed % gradients.length]}`}
    >
      {initialsOf(name)}
    </div>
  );
}
