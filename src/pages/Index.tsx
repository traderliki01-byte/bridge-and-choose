import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Choose Your Project
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the project you'd like to access from the options below
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto animate-scale-in">
          <ProjectCard
            title="Cocolevio Leadgen Pro"
            description="Smart lead generation tools to grow your business. Access powerful analytics, automated campaigns, and conversion tracking."
            buttonText="Go to Cocolevio Leadgen Pro"
            href="/cocolevio"
          />
          <ProjectCard
            title="Gov Website"
            description="Official portal with resources and services. Find government information, submit applications, and access citizen services."
            buttonText="Go to Gov Website"
            href="/govwebsite"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
