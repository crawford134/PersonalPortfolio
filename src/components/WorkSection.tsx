import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Shield, Lightbulb } from 'lucide-react';

const WorkSection = () => {
  const achievements = [
    {
      icon: Shield,
      title: "Security Program Transformation",
      description: "Led comprehensive security program overhaul resulting in 40% reduction in security incidents and improved compliance posture",
      metrics: ["40% incident reduction", "100% compliance achievement", "6-month timeline"]
    },
    {
      icon: TrendingUp,
      title: "Identity Management Implementation",
      description: "Designed and deployed enterprise identity management solution for 10,000+ users across multiple platforms",
      metrics: ["10,000+ users", "99.9% uptime", "50% faster onboarding"]
    },
    {
      icon: Lightbulb,
      title: "Security Culture Development",
      description: "Built organization-wide security awareness program that increased security incident reporting by 300%",
      metrics: ["300% reporting increase", "95% training completion", "Zero major breaches"]
    }
  ];

  const skills = [
    "Cybersecurity Strategy",
    "Identity & Access Management",
    "Application Security",
    "Risk Management",
    "Security Architecture",
    "Compliance & Governance",
    "Team Leadership",
    "Executive Communication",
    "Vendor Management",
    "Security Training",
    "Incident Response",
    "Security Operations"
  ];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Work & Impact</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering measurable security outcomes that enable business growth and innovation.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Key Achievements</h3>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-8">
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <achievement.icon className="h-12 w-12 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-primary mb-3">{achievement.title}</h4>
                      <p className="text-foreground mb-4">{achievement.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {achievement.metrics.map((metric, metricIndex) => (
                          <Badge key={metricIndex} variant="secondary" className="bg-teal-light text-navy">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm py-2 px-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Impact Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Security Incident Reduction</span>
                <span className="text-xl font-bold text-accent">40%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Team Productivity Increase</span>
                <span className="text-xl font-bold text-accent">25%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Compliance Score</span>
                <span className="text-xl font-bold text-accent">100%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Cost Optimization</span>
                <span className="text-xl font-bold text-accent">30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;