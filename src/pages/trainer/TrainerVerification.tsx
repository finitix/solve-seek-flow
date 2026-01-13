import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Upload, Camera, Check } from "lucide-react";

const TrainerVerification = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    idType: "",
    primarySkill: "",
    experience: "",
    portfolio: "",
  });

  const steps = [
    { num: 1, title: "Personal Details" },
    { num: 2, title: "Identity Verification" },
    { num: 3, title: "Live Verification" },
    { num: 4, title: "Professional Details" },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      toast({
        title: "Verification Submitted",
        description: "Your application is under review. Status: Under Verification",
      });
      navigate("/trainer/login");
    }
  };

  return (
    <div className="min-h-screen bg-secondary py-8 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold">Trainer Verification</h1>
          <p className="text-muted-foreground mt-2">Complete your verification to start helping users</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((s, index) => (
            <div key={s.num} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                step > s.num
                  ? "bg-success text-success-foreground"
                  : step === s.num
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}>
                {step > s.num ? <Check size={18} /> : s.num}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 sm:w-20 h-1 mx-1 ${
                  step > s.num ? "bg-success" : "bg-muted"
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="content-card animate-fade-in">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">Step 1: Personal Details</h2>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Your full legal name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">Step 2: Identity Verification</h2>
              <div className="space-y-2">
                <Label>ID Type</Label>
                <Select
                  value={formData.idType}
                  onValueChange={(value) => setFormData({ ...formData, idType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="drivers">Driver's License</SelectItem>
                    <SelectItem value="national">National ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Upload Front Image</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="mx-auto text-muted-foreground mb-2" size={24} />
                  <p className="text-sm text-muted-foreground">Click to upload front image</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Upload Back Image</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="mx-auto text-muted-foreground mb-2" size={24} />
                  <p className="text-sm text-muted-foreground">Click to upload back image</p>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">Step 3: Live Verification</h2>
              <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Camera className="mx-auto text-muted-foreground mb-2" size={48} />
                  <p className="text-muted-foreground">Camera Preview</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Please record a short video of yourself saying "I am [Your Name] and I want to be a TechSolve trainer"
              </p>
              <Button variant="outline" className="w-full">
                <Camera size={18} />
                Record Verification Video
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">Step 4: Professional Details</h2>
              <div className="space-y-2">
                <Label>Primary Skill Category</Label>
                <Select
                  value={formData.primarySkill}
                  onValueChange={(value) => setFormData({ ...formData, primarySkill: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary skill" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="software">Software Installation</SelectItem>
                    <SelectItem value="network">Network Issues</SelectItem>
                    <SelectItem value="hardware">Hardware Problems</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="cloud">Cloud Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Certifications (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="mx-auto text-muted-foreground mb-2" size={20} />
                  <p className="text-sm text-muted-foreground">Upload certifications</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Experience (Years)</Label>
                <Input
                  id="experience"
                  type="number"
                  placeholder="5"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio Link (Optional)</Label>
                <Input
                  id="portfolio"
                  placeholder="https://your-portfolio.com"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                />
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-6">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                Back
              </Button>
            )}
            <Button onClick={handleNext} className="flex-1">
              {step === 4 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already verified?{" "}
          <Link to="/trainer/login" className="text-primary font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TrainerVerification;
