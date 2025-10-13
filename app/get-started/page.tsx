import Login from "@/components/Login";

export default function page() {
  return (
    <section className="h-[70vh] flex items-center justify-center px-4 py-8">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0),
  radial-gradient(circle at 21px 21px, rgba(255,255,255,0.03) 2px, transparent 0),
  repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px),
  repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px)`,
          backgroundSize: `40px 40px, 40px 40px, 40px 40px, 40px 40px`,
          backgroundPosition: `0 0, 20px 20px, 0 0, 0 0`,
          opacity: 0.9,
        }}
      />
      <Login />
    </section>
  );
}
