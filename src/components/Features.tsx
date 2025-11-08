import { Card, CardContent } from "@/components/ui/card";
import { FileText, Zap, Brain, Lock, BarChart3, Workflow } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Document Upload",
    description: "Support for resumes, invoices, and more. Upload up to 7 documents for free.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "AI processes your documents in minutes, not hours. Get results instantly.",
  },
  {
    icon: Brain,
    title: "Smart Extraction",
    description: "Advanced AI extracts key information with high accuracy from any document.",
  },
  {
    icon: Workflow,
    title: "Custom Pipelines",
    description: "Build your own data extraction pipeline tailored to your business needs.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Monitor processing status and view extracted data in real-time.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Enterprise-grade security keeps your sensitive documents safe.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Everything You Need to Automate Document Processing
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to streamline your workflow and save hours of manual work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border border-border bg-card hover:shadow-card-hover transition-all duration-200"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
