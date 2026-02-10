import { MapPin, Mail, Phone, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/techshala.official?igsh=bzk2eWUyNnZmcmVs", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/techshala-official/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      <div className="container-narrow mx-auto section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display font-900 text-2xl mb-4">
              Tech<span className="text-primary">Shala</span>
            </h3>
            <p className="text-section-dark-foreground/60 text-sm leading-relaxed">
              Where Code Meets Creation. Hyderabad's premier hands-on robotics & tech education platform.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider text-section-dark-foreground/40 mb-4">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Workshops", "School Programs", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-section-dark-foreground/70 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider text-section-dark-foreground/40 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-section-dark-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Hyderabad, Telangana
              </li>
              <li className="flex items-center gap-2 text-section-dark-foreground/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                techshala2025@gmail.com
              </li>
              <li className="flex items-center gap-2 text-section-dark-foreground/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 78420 12006
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider text-section-dark-foreground/40 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 bg-section-dark-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-section-dark-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-section-dark-foreground/40">
          <p>© 2026 TechShala – Where Code Meets Creation</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-section-dark-foreground/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-section-dark-foreground/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
