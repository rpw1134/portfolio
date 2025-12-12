import { useState } from "react";
import LinkedInSVG from "./svgs/LinkedIn";
import GitHubSVG from "./svgs/GitHub";
import TikTokSVG from "./svgs/TikTok";
import InstagramSVG from "./svgs/Instagram";
import EmailSVG from "./svgs/Email";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };
  const socials = [
    {
      name: "LinkedIn",
      icon: <LinkedInSVG />,
      href: "https://linkedin.com/in/ryan11williams",
      label: "ryan11williams",
    },
    {
      name: "GitHub",
      icon: <GitHubSVG />,
      href: "https://github.com/rpw1134",
      label: "rpw1134",
    },
    {
      name: "TikTok",
      icon: <TikTokSVG />,
      href: "https://tiktok.com/@williwillcode",
      label: "@williwillcode",
    },
    {
      name: "Instagram",
      icon: <InstagramSVG />,
      href: "https://instagram.com/williwillcode",
      label: "@williwillcode",
    },
  ];

  const emails = [
    { address: "ryanw1134@gmail.com", href: "mailto:ryanw1134@gmail.com" },
    { address: "ryan.williams@mail.mcgill.ca", href: "mailto:ryan.williams@mail.mcgill.ca" },
  ];

  return (
    <div className="w-full py-16 px-16 bg-primary/30">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="font-lato text-xs font-medium uppercase tracking-widest text-white/40 text-center">
            Get in Touch
          </p>
          <h2 className="font-garamond text-5xl font-light text-white text-center">
            Contact
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center pt-8">
          {/* Socials */}
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
                title={social.label}
              >
                <div className="h-10 w-10 text-white/50 group-hover:text-accent transition-colors duration-300">
                  {social.icon}
                </div>
                <span className="font-lato text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block h-16 w-px bg-white/10" />

          {/* Emails */}
          <div className="flex flex-col gap-3">
            {emails.map((email) => (
              <div key={email.address} className="flex items-center gap-2">
                <a
                  href={email.href}
                  className="group flex items-center gap-3 text-white/50 hover:text-accent transition-colors duration-300"
                >
                  <div className="h-5 w-5">
                    <EmailSVG />
                  </div>
                  <span className="font-lato text-sm">{email.address}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(email.address)}
                  className="relative p-2 text-white/40 hover:text-accent transition-colors duration-300 focus:outline-none"
                  aria-label="Copy email"
                >
                  {copiedEmail === email.address ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
