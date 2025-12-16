import { useState } from "react";
import LinkedInSVG from "../svgs/LinkedIn";
import GitHubSVG from "../svgs/GitHub";
import TikTokSVG from "../svgs/TikTok";
import InstagramSVG from "../svgs/Instagram";
import EmailSVG from "../svgs/Email";
import CheckmarkSVG from "../svgs/Checkmark";
import CopySVG from "../svgs/Copy";

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
    {
      address: "ryan.williams@mail.mcgill.ca",
      href: "mailto:ryan.williams@mail.mcgill.ca",
    },
  ];

  return (
    <footer className="w-full py-12 px-8 bg-primary/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="font-garamond text-4xl font-light text-white">
            Contact Me
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mt-3" />
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Socials */}
          <div className="flex gap-6 items-center justify-center">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title={social.label}
                aria-label={social.name}
              >
                <div className="h-8 w-8 text-white/50 group-hover:text-accent transition-colors duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Emails */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {emails.map((email) => (
              <div key={email.address} className="flex items-center gap-2">
                <a
                  href={email.href}
                  className="group flex items-center gap-2 text-white/50 hover:text-accent transition-colors duration-300"
                >
                  <div className="h-4 w-4">
                    <EmailSVG />
                  </div>
                  <span className="font-lato text-xs">{email.address}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(email.address)}
                  className="relative p-1 text-white/40 hover:text-accent transition-colors duration-300 focus:outline-none"
                  aria-label="Copy email"
                >
                  {copiedEmail === email.address ? (
                    <CheckmarkSVG />
                  ) : (
                    <CopySVG />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
