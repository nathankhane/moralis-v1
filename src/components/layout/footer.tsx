import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-muted/50 border-t py-8 mt-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-6">
          <div className="font-serif text-2xl font-bold text-foreground">Morális</div>
        </div>

        <div className="mb-6 text-center">
          <p className="text-sm text-muted-foreground">
            Built on principle
          </p>
        </div>

        <div className="mb-4 text-center space-y-2">
          <div>
            <Link
              href="mailto:moodi@moralis.studio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              moodi@moralis.studio
            </Link>
          </div>
          <div>
            <Link
              href="mailto:nate@morales.studio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              nate@morales.studio
            </Link>
          </div>
        </div>

        <span className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Morális. All rights reserved
        </span>
      </div>
    </footer>
  );
}
