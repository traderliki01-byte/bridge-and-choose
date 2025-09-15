export const Navbar = () => {
  return (
    <nav className="w-full bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <h1 className="text-xl font-semibold text-foreground">
            Project Switcher
          </h1>
        </div>
      </div>
    </nav>
  );
};