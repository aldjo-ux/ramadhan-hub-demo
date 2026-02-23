import { ClipboardCheck, Star, BookOpen, Gamepad2, Sparkles, Download, ExternalLink } from "lucide-react";
import AppCard from "./AppCard";
import { Button } from "@/components/ui/button";

import ramadhanKidsStoryLogo from "@/assets/ramadhan-kids-story-logo.png";
import ramadhanIbadahTrackerLogo from "@/assets/ramadhan-ibadah-tracker-logo.png";
import jurnalRamadhanCeriaLogo from "@/assets/jurnal-ramadhan-ceria-logo.png";
import ramadhanQuizGamesLogo from "@/assets/ramadhan-quiz-games-logo.png";

const apps = [
  {
    title: "Ramadhan Ibadah Tracker",
    description: "Pantau ibadah harian Ayah & Bunda.",
    icon: ClipboardCheck,
    variant: "emerald" as const,
    href: "https://demoramadhantracker.netlify.app",
    customImage: ramadhanIbadahTrackerLogo,
  },
  {
    title: "Jurnal Ramadhan Ceria",
    description: "Checklist seru untuk si kecil.",
    icon: Star,
    variant: "orange" as const,
    href: "https://demojurnalramadhanceria.netlify.app/",
    customImage: jurnalRamadhanCeriaLogo,
  },
  {
    title: "Ramadhan Kids Story",
    description: "17 Kisah inspiratif Cerita Ramadhan.",
    icon: BookOpen,
    variant: "teal" as const,
    href: "https://demoramadhankidsstory.netlify.app",
    customImage: ramadhanKidsStoryLogo,
  },
  {
    title: "Ramadhan Quiz Games",
    description: "Uji pengetahuan Ramadhan dengan kuis seru!",
    icon: Gamepad2,
    variant: "purple" as const,
    href: "https://demoramadhanquizgames.netlify.app",
    customImage: ramadhanQuizGamesLogo,
  },
];

const CTA_LINK = 'https://ramaapps.myscalev.com/checkout?discount_code=FSRAMADHAN';

const AppGrid = () => {
  return (
    <section className="px-6 py-10 max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
          Coba Aplikasi
        </h2>
        <p className="text-sm text-muted-foreground">
          Klik untuk langsung mencoba demo gratis
        </p>
      </div>

      {/* Apps Grid Wrapper */}
      <div className="max-w-md mx-auto mb-8 pb-8 border-b border-border/50">
        {/* Single Column Grid */}
        <div className="flex flex-col gap-4">
          {apps.map((app, index) => (
            <AppCard
              key={index}
              title={app.title}
              description={app.description}
              icon={app.icon}
              variant={app.variant}
              href={app.href}
              customImage={app.customImage}
            />
          ))}
        </div>
      </div>

      {/* Bonus Worksheet Section */}
      <div className="max-w-md mx-auto">
        <div className="p-4 rounded-2xl border-2 border-orange/20 bg-gradient-to-br from-orange/5 to-orange/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center">
              <Download className="w-5 h-5 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Bonus Worksheet Anak</h3>
              <p className="text-xs text-muted-foreground">Ribuan worksheet siap print gratis!</p>
            </div>
          </div>

          <Button
            onClick={() => window.open(CTA_LINK, '_blank')}
            className="w-full gap-2 bg-orange hover:bg-orange/90"
            size="sm"
          >
            <ExternalLink className="w-4 h-4" />
            Dapatkan Versi Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppGrid;