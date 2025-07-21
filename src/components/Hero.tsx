import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/security-hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => (
  <section className="relative min-h-screen bg-background">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
      style={{ backgroundImage: `url(${heroBackground})` }} />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Security leadership that enables{' '}
            <span className="text-accent">trust, delivery, and transformation.</span>
          </h1>

          {/* Profile section */}
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <img
                src={profilePhoto}
                alt="Professional headshot"
                className="w-32 h-32 rounded-full object-cover border-4 border-accent/20" />
            </div>
            <div className="flex-1">
              <p className="text-lg text-foreground leading-relaxed">
                Cybersecurity leader specializing in identity, application security,
                and a cross-team collaborative approach. Driving security outcomes that 
                align with business value, not just technical control.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              variant="outline"
              size="lg"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ABOUT ME
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('speaking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              SPEAKING & THOUGHT LEADERSHIP
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              WORK & IMPACT
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;