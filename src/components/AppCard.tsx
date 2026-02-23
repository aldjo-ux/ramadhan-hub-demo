import { LucideIcon } from "lucide-react";

interface AppCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant: "emerald" | "orange" | "teal" | "purple" | "coming-soon";
  href?: string;
  isComingSoon?: boolean;
  customImage?: string;
}

const variantStyles = {
  emerald: {
    bg: "bg-emerald-light",
    iconBg: "gradient-emerald",
    iconColor: "text-primary-foreground",
    border: "border-primary/10",
    hoverBorder: "hover:border-primary/30",
  },
  orange: {
    bg: "bg-orange-light",
    iconBg: "gradient-orange",
    iconColor: "text-primary-foreground",
    border: "border-orange/10",
    hoverBorder: "hover:border-orange/30",
  },
  teal: {
    bg: "bg-teal-light",
    iconBg: "gradient-teal",
    iconColor: "text-primary-foreground",
    border: "border-teal/10",
    hoverBorder: "hover:border-teal/30",
  },
  purple: {
    bg: "bg-purple-50",
    iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
    iconColor: "text-primary-foreground",
    border: "border-purple-500/10",
    hoverBorder: "hover:border-purple-500/30",
  },
  "coming-soon": {
    bg: "bg-muted",
    iconBg: "bg-muted-foreground/20",
    iconColor: "text-muted-foreground",
    border: "border-border",
    hoverBorder: "hover:border-border",
  },
};

const AppCard = ({ title, description, icon: Icon, variant, href = "#", isComingSoon = false, customImage }: AppCardProps) => {
  const styles = variantStyles[variant];

  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      className={`
        group relative block p-4 rounded-2xl border-2 ${styles.border} ${styles.hoverBorder}
        ${styles.bg} card-hover cursor-pointer overflow-hidden
        ${isComingSoon ? "opacity-70 cursor-not-allowed" : ""}
      `}
      onClick={(e) => {
        if (isComingSoon) {
          e.preventDefault();
        }
      }}
    >
      {/* Coming Soon Badge */}
      {isComingSoon && (
        <div className="absolute top-3 right-3 px-2 py-1 bg-muted-foreground/10 rounded-full">
          <span className="text-xs font-medium text-muted-foreground">Segera Hadir</span>
        </div>
      )}

      {/* Icon/Logo - Centered */}
      <div className="flex justify-center mb-3">
        {customImage ? (
          <img 
            src={customImage} 
            alt={title} 
            className="w-48 h-48 object-contain"
          />
        ) : (
          <div className={`
            w-14 h-14 rounded-xl ${styles.iconBg} 
            flex items-center justify-center
            shadow-lg group-hover:shadow-xl transition-shadow duration-300
          `}>
            <Icon className={`w-7 h-7 ${styles.iconColor}`} strokeWidth={2} />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-1 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed text-center">
        {description}
      </p>

      {/* Hover arrow indicator */}
      {!isComingSoon && (
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center">
            <svg 
              className="w-4 h-4 text-foreground/60" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      )}
    </a>
  );
};

export default AppCard;
