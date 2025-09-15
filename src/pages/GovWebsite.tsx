import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const GovWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <Button 
          onClick={() => window.location.href = "/"}
          variant="outline"
          className="mb-8 group hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Project Switcher
        </Button>
        
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Gov Website
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Welcome to the official government portal. Access resources, services, and important information for citizens.
          </p>
          <div className="bg-card rounded-lg shadow-elevated p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Portal Under Development
            </h2>
            <p className="text-muted-foreground">
              Government services and resources will be available here. This page serves as a placeholder for official portal features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovWebsite;