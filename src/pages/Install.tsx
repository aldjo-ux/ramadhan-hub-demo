import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePWA } from "@/hooks/usePWA";
import { Download, Smartphone, Share, PlusSquare, CheckCircle2, ArrowLeft, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Install = () => {
  const { isInstallable, isInstalled, isIOS, installApp } = usePWA();

  const handleInstall = async () => {
    await installApp();
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link 
            to="/" 
            className="p-2 -ml-2 hover:bg-accent rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">Pasang Aplikasi</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 animate-float">
            <img src={logo} alt="RamaApps" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Pasang <span className="text-primary">RamaApps</span>
          </h2>
          <p className="text-muted-foreground">
            Akses lebih cepat langsung dari layar utama perangkat Anda
          </p>
        </div>

        {/* Status Card */}
        {isInstalled && (
          <Card className="mb-6 border-primary/20 bg-primary/5">
            <CardContent className="p-4 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Aplikasi Sudah Terpasang!</p>
                <p className="text-sm text-muted-foreground">
                  RamaApps sudah tersedia di perangkat Anda
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Install Button for Android/Desktop */}
        {isInstallable && !isInstalled && (
          <Card className="mb-6 border-primary/20">
            <CardContent className="p-6 text-center">
              <Button
                onClick={handleInstall}
                size="lg"
                className="w-full max-w-xs gap-2 text-lg py-6"
              >
                <Download className="w-5 h-5" />
                Pasang Sekarang
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Satu klik untuk memasang aplikasi
              </p>
            </CardContent>
          </Card>
        )}

        {/* Benefits */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            Keuntungan Memasang Aplikasi
          </h3>
          <div className="grid gap-3">
            {[
              { icon: Smartphone, text: "Akses cepat dari layar utama" },
              { icon: Download, text: "Bisa digunakan offline" },
              { icon: CheckCircle2, text: "Pengalaman seperti aplikasi native" },
            ].map((item, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* iOS Instructions */}
        {isIOS && !isInstalled && (
          <Card className="mb-6 border-orange/20 bg-orange-light">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-orange" />
                Cara Pasang di iPhone/iPad
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-orange text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Ketuk tombol Share</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Share className="w-4 h-4" /> di bagian bawah Safari
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-orange text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Scroll ke bawah</p>
                    <p className="text-sm text-muted-foreground">
                      Cari opsi "Add to Home Screen"
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-orange text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground flex items-center gap-1">
                      Ketuk <PlusSquare className="w-4 h-4" /> Add to Home Screen
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Lalu ketuk "Add" di pojok kanan atas
                    </p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        )}

        {/* Android/Desktop Manual Instructions */}
        {!isIOS && !isInstallable && !isInstalled && (
          <Card className="mb-6 border-teal/20 bg-teal-light">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-teal" />
                Cara Pasang Manual
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground mb-2">Di Chrome (Android/Desktop):</p>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                    <li>Ketuk ikon menu (⋮) di pojok kanan atas</li>
                    <li>Pilih "Install app" atau "Add to Home screen"</li>
                    <li>Konfirmasi dengan mengetuk "Install"</li>
                  </ol>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Di Edge (Desktop):</p>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                    <li>Ketuk ikon menu (⋯) di pojok kanan atas</li>
                    <li>Pilih "Apps" → "Install this site as an app"</li>
                    <li>Konfirmasi dengan mengetuk "Install"</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Back Button */}
        <div className="text-center">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Install;
