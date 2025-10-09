import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Team() {
  const teamMembers = [
    {
      name: "Moodi Odat",
      description: "Former VC Investor who's helped scale two series B start-ups from $10M to $20M ARR. Highly operationally-experienced: Moodi has built automation infrastructure for multiple series A start-ups.",
      image: "/Founder Pictures/BP-Moodi Headshot-1.jpg",
      alt: "Moodi Odat, Co-founder"
    },
    {
      name: "Nathan Morales", 
      description: "Former database and UX consultant turned serial founder who specializes in creative branding. He's been a part of multiple database migrations and digital experience projects with Fortune 500 companies.",
      image: "/Founder Pictures/CG-Nate.JPG",
      alt: "Nathan Morales, Co-founder"
    }
  ];

  return (
    <section id="team" className="section-mobile-optimized bg-muted/30">
      <div className="container-mobile-optimized">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the founders behind Morálís
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="mb-6">
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 128px, 128px"
                      />
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {member.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
