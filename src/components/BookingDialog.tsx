import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, ExternalLink } from "lucide-react";

const BOOKING_OPTIONS = [
  {
    name: "Amdal",
    platform: "Calendly",
    url: "https://calendly.com/cortex4",
    color: "google-blue" as const,
  },
  {
    name: "Jena",
    platform: "Google Calendar",
    url: "https://calendar.app.google/ig62qzDtfrFJdxg57",
    color: "google-green" as const,
  },
];

const colorMap = {
  "google-blue": {
    bg: "bg-google-blue/10",
    icon: "text-google-blue",
    hover: "hover:border-google-blue/40",
    ring: "focus-visible:ring-google-blue/30",
  },
  "google-green": {
    bg: "bg-google-green/10",
    icon: "text-google-green",
    hover: "hover:border-google-green/40",
    ring: "focus-visible:ring-google-green/30",
  },
};

export function BookingDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book a consultation</DialogTitle>
          <DialogDescription>
            Choose who you'd like to meet with for a free 30-minute call.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 pt-2">
          {BOOKING_OPTIONS.map((option) => {
            const colors = colorMap[option.color];
            return (
              <a
                key={option.name}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border border-border ${colors.hover} ${colors.ring} transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
              >
                <div className={`p-3 rounded-lg ${colors.bg}`}>
                  <Calendar className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">{option.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {option.platform}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />
              </a>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
