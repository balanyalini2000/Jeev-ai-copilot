import { X, Check, Dna, Watch, Cloud, Utensils, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const AIAdvantage = () => {
  const oldWay = [
    "Hospital-First Approach",
    "You feel fine",
    "Symptom appears",
    "Wait 3 days",
    "Doctor Visit",
    "Lab Tests",
    "Diagnosis: Problem Found",
    "Reactive Treatment",
  ];

  const jeevWay = [
    "AI spots the pattern",
    "Smart nudge delivered",
    "You take action",
    "Risk stabilizes",
  ];

  const dataSources = [
    { icon: <Dna className="h-6 w-6" />, label: "Genetics" },
    { icon: <Watch className="h-6 w-6" />, label: "Wearables & Devices" },
    { icon: <Cloud className="h-6 w-6" />, label: "Environment" },
    { icon: <Utensils className="h-6 w-6" />, label: "Diet" },
    { icon: <FileText className="h-6 w-6" />, label: "Questionnaires" },
  ];

  return (
    <section
      id="ai-advantage"
      className="min-h-screen flex items-center justify-center gradient-hero py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient animate-fade-in mx-auto">
          The AI Advantage
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Old Way */}
          <Card className="p-6 shadow-soft animate-slide-in-left bg-muted/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-destructive flex items-center gap-2">
              <X className="h-6 w-6" />
              The Old Way
            </h3>
            <div className="space-y-2 mb-6">
              {oldWay.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-background/50 transition-colors"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-destructive/50 flex-shrink-0" />
                  <p className="text-foreground">{step}</p>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-destructive/10 border-2 border-destructive/20">
              <p className="font-semibold text-lg text-destructive mb-1">
                Linear. Broken. Reactive.
              </p>
              <p className="text-muted-foreground">One-size-fits-all medicine</p>
            </div>
          </Card>

          {/* Jeev Way */}
          <Card className="p-6 shadow-glow animate-slide-in-right gradient-card">
            <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
              <Check className="h-6 w-6" />
              The Jeev Way
            </h3>
            
            {/* Data Sources */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3 text-muted-foreground">
                5 Data Sources, One Intelligence
              </p>
              <div className="flex flex-wrap gap-2">
                {dataSources.map((source) => (
                  <div
                    key={source.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {source.icon}
                    <span>{source.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {jeevWay.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-background/30 transition-colors"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground font-medium">{step}</p>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl gradient-primary text-white">
              <p className="font-semibold text-lg mb-1">
                Continuous. Intelligent. Personal.
              </p>
              <p>Built for YOUR unique body & lifestyle</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIAdvantage;
