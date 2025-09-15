import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Building2, type LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  icon?: LucideIcon;
}

export const ProjectCard = ({ title, description, buttonText, href, icon: Icon }: ProjectCardProps) => {
  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-hover border-0 shadow-elevated bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon className="h-6 w-6 text-primary" aria-hidden="true" />}
          <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleClick}
          className="w-full group/button bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-elevated transition-all duration-300"
          aria-label={`Navigate to ${title}`}
        >
          <span className="mr-2">{buttonText}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};