import { Upload, Cpu, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Documents",
    description: "Drag and drop your resumes or invoices. Support for PDF, DOC, and more.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Processing",
    description: "Our AI extracts and predicts key information in seconds with high accuracy.",
  },
  {
    icon: Download,
    number: "03",
    title: "Get Results",
    description: "Download structured data or integrate with your existing systems via API.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">How IndoHire Works</h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform your document processing workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/20" />
                )}
                <div className="relative bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-card-hover transition-all">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="text-5xl font-bold text-muted/20">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
