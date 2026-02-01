export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 John Doe. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with <span className="text-primary">React</span> & <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
