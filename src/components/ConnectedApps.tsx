import { Smartphone, Watch, Apple, Activity, Utensils } from "lucide-react";

const ConnectedApps = () => {
  const apps = [
    { name: "Samsung Health", icon: <Smartphone className="h-12 w-12" /> },
    { name: "Google Fit", icon: <Activity className="h-12 w-12" /> },
    { name: "Apple Health", icon: <Apple className="h-12 w-12" /> },
    { name: "HealthifyMe", icon: <Utensils className="h-12 w-12" /> },
    { name: "Fittr", icon: <Watch className="h-12 w-12" /> },
  ];

  return (
    <section
      id="connected"
      className="min-h-screen flex items-center justify-center gradient-hero py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient animate-fade-in mx-auto">
          Our Users Are Connected Using
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Seamlessly integrate with your favorite health apps
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {apps.map((app, index) => (
            <div
              key={app.name}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-110 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary group-hover:text-secondary transition-colors mb-4">
                {app.icon}
              </div>
              <p className="text-center font-semibold text-foreground">{app.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectedApps;
