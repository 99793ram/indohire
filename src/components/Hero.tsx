import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Zap, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <Zap className="w-4 h-4" />
              AI-Powered Document Processing
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Process Documents in{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Minutes, Not Hours
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Upload resumes and invoices, let AI extract and predict information automatically. 
              Build custom pipelines in minutes without any coding.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                No credit card required
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                Up to 7 documents free
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-border bg-card shadow-card-hover overflow-hidden">
              <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
              <div className="relative p-8 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Quick Upload</h3>
                    <p className="text-sm text-muted-foreground">Drag & drop your documents</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Resume_John_Doe.pdf", status: "Processing..." },
                    { name: "Invoice_2024_001.pdf", status: "Complete" },
                    { name: "Resume_Jane_Smith.pdf", status: "Complete" },
                  ].map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm font-medium">{doc.name}</span>
                      </div>
                      <span
                        className={`text-xs font-medium ${
                          doc.status === "Complete" ? "text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FileText = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

export default Hero;
