import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const scrollToSection = (elementRef : any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/#skills"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Skills
      </Link>
      <Link
        href="/#projects"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Projects
      </Link>
      <Link
        href="/#publications"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Publications
      </Link>
    </nav>
  );
}
