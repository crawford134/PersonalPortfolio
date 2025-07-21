import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, TrendingUp, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security Leadership",
      description: "Leading cybersecurity initiatives with focus on identity and application security"
    },
    {
      icon: Users,
      title: "Influence Without Authority",
      description: "Building consensus and driving change across organizations through collaboration"
    },
    {
      icon: TrendingUp,
      title: "Business Value Focus",
      description: "Aligning security outcomes with business objectives and measurable value"
    },
    {
      icon: Award,
      title: "Thought Leadership",
      description: "Contributing to industry knowledge through speaking engagements and content"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate cybersecurity professional dedicated to building secure, resilient systems 
            while fostering innovation and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <highlight.icon className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">My Approach</h3>
              <p className="text-foreground mb-4">
                I believe that effective cybersecurity isn't just about implementing controls—it's about 
                building trust, enabling business outcomes, and creating sustainable security practices 
                that grow with your organization.
              </p>
              <p className="text-foreground">
                Through my experience in identity management, application security, and organizational 
                leadership, I've learned that the most impactful security work happens when we align 
                technical excellence with business strategy and human understanding.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-teal-light p-4 rounded-lg">
                <h4 className="font-semibold text-navy mb-2">Core Philosophy</h4>
                <p className="text-sm text-navy">
                  Security should enable innovation, not hinder it. Every security decision should 
                  create measurable business value while reducing risk.
                </p>
              </div>
              <div className="bg-navy-light p-4 rounded-lg">
                <h4 className="font-semibold text-navy mb-2">Leadership Style</h4>
                <p className="text-sm text-navy">
                  Building consensus through collaboration, education, and shared ownership of 
                  security outcomes across all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;