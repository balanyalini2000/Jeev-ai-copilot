import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";
import founder3 from "@/assets/founder-3.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Indumathi S",
      role: "CEO",
      credentials: ["MBA, IIM Calcutta", "MBBS, MAMC Delhi"],
      image: founder1,
    },
    {
      name: "Nupur Kokate",
      role: "COO",
      credentials: ["MBA, IIM Calcutta", "MSc Mathematics, BITS Pilani"],
      image: founder2,
    },
    {
      name: "Yalini Balan",
      role: "CTO",
      credentials: ["MBA, IIM Calcutta", "BTech IT, CIT"],
      image: founder3,
    },
  ];

  return (
    <section
      id="team"
      className="min-h-screen flex items-center justify-center gradient-hero py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient animate-fade-in mx-auto">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-soft transition-all duration-300 group-hover:shadow-glow group-hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-2">{member.role}</p>
                  <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.credentials.map((cred) => (
                      <p key={cred} className="text-sm text-white/90">
                        {cred}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
