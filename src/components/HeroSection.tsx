import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[45vh] flex flex-col items-center justify-center px-6 py-12 islamic-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

      {/* Logo */}
      <div className="relative z-10 mb-6 animate-float">
        <img
          src={logo}
          alt="RamaApps Logo"
          className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl"
        />
      </div>

      {/* Headline */}
      <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-foreground text-center mb-4 text-balance">
        Demo Gratis{" "}
        <span className="text-primary">RamaApps</span>
      </h1>

      {/* Sub-headline */}
      <p className="relative z-10 text-base md:text-lg text-muted-foreground text-center max-w-md leading-relaxed">
        Coba semua aplikasi secara gratis sebelum memutuskan untuk membeli. Rasakan langsung manfaatnya!
      </p>

      {/* Decorative line */}
      <div className="relative z-10 mt-8 flex items-center gap-3">
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-secondary" />
        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-secondary" />
      </div>
    </section>
  );
};

export default HeroSection;
