import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-screen overflow-x-hidden px-2 border-x border-edge">
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="py-8 md:py-12 max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <p className="text-sm text-muted-foreground">
              Designed and built by Chirag Sharma
            </p>
            
            <div className="flex gap-4 text-sm">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a 
                href="mailto:iamchrag182@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              © {currentYear} Chirag Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
