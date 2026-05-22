const brands = [
  { name: "Nutriyo", hoverColor: "hover:text-dark" },
  { name: "Travelista", hoverColor: "hover:text-skyblue" },
  { name: "GreenBuild", hoverColor: "hover:text-primary" },
  { name: "FreshSip", hoverColor: "hover:text-orange" },
  { name: "FitTrack", hoverColor: "hover:text-purple" },
  { name: "TechNova", hoverColor: "hover:text-dark" },
  { name: "ShopEase", hoverColor: "hover:text-primary" },
];

function BrandList() {
  return (
    <>
      {brands.map((brand) => (
        <h3
          key={brand.name}
          className={`font-heading text-2xl font-bold text-gray-300 ${brand.hoverColor} transition-colors cursor-default`}
        >
          {brand.name}
        </h3>
      ))}
    </>
  );
}

export default function TrustedBrands() {
  return (
    <section className="py-12 px-4 bg-[#f8fbff]">
      <div className="max-w-[1320px] mx-auto bg-white rounded-[32px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <p className="text-center text-sm font-semibold text-soft mb-8">
          TRUSTED BY INNOVATIVE BRANDS
        </p>

        <div className="marquee-wrapper relative w-full">
          <div className="flex animate-marquee items-center gap-24 shrink-0 px-12">
            <BrandList />
            <BrandList />
          </div>
        </div>
      </div>
    </section>
  );
}
