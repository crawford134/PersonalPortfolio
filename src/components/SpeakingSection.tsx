import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const SpeakingSection = () => {
  const upcomingEvents = [
    {
      title: "Building Security Culture Through Influence",
      event: "CyberSec Summit 2024",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      attendees: "500+ professionals"
    },
    {
      title: "Identity Security in Modern Applications",
      event: "DevSecOps Conference",
      date: "April 22, 2024",
      location: "Virtual Event",
      attendees: "1000+ developers"
    }
  ];

  const topics = [
    "Cybersecurity Leadership & Strategy",
    "Identity & Access Management",
    "Application Security Best Practices",
    "Building Security Culture",
    "Influence Without Authority",
    "Business-Aligned Security Outcomes"
  ];

  return (
    <section id="speaking" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Speaking & Thought Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing insights and driving conversations that shape the future of cybersecurity leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Speaking Topics */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Speaking Topics</h3>
            <div className="space-y-3">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-foreground">{topic}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Request Speaking Engagement
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="space-y-3">
                    <h4 className="text-lg font-semibold text-primary">{event.title}</h4>
                    <p className="text-accent font-medium">{event.event}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Thought Leadership */}
        <div className="bg-secondary rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Thought Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-accent">50+</div>
                <p className="text-foreground">Speaking Engagements</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-accent">25+</div>
                <p className="text-foreground">Published Articles</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-accent">10K+</div>
                <p className="text-foreground">Professionals Reached</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;