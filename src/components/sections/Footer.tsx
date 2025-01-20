import { Container } from "../ui/Container";
import { Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-goldAccent/20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">
              <span className="text-goldAccent">Sol</span>TimeHigh
            </span>
          </div>

          {/* social links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/soltimehigh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-full hover:bg-goldAccent/20"
            >
              <Twitter className="w-5 h-5 text-goldAccent" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} SolTimeHigh. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
