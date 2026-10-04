"use client";

import { Building, Calendar, FileText, HelpCircle, School, Send, Users } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialIntent = searchParams?.get("intent") || "";

  const [formData, setFormData] = useState({
    intent: initialIntent,
    name: "",
    email: "",
    phone: "",
    region: "",
    message: "",
    consent: false,

    institution: "",
    courseYear: "",
    campusChapter: "",
    interestGroups: "",
    organization: "",
    organizationType: "",
    focusArea: "",
    timeline: "",
    budget: "",
    programType: "",
    targetCohort: "",
    role: "",
    skills: "",
    numberOfHires: "",
    eventName: "",
    eventDate: "",
    outlet: "",
    deadline: "",
    issueCategory: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const intents = [
    { value: "", label: "Select one", disabled: true },
    { value: "student", label: "Join the student community" },
    { value: "partner", label: "Partner with μLearn" },
    { value: "program", label: "Run a challenge or program" },
    { value: "hiring", label: "Hiring & Launchpad" },
    { value: "events", label: "Events & Speaking" },
    { value: "media", label: "Media & Press" },
    { value: "support", label: "Technical support" },
    { value: "other", label: "Something else" },
  ];

  const organizationTypes = [
    { value: "", label: "Select organization type" },
    { value: "company", label: "Company" },
    { value: "ngo", label: "NGO" },
    { value: "academia", label: "Academia" },
    { value: "government", label: "Government" },
  ];

  const focusAreas = [
    { value: "", label: "Select focus area" },
    { value: "csr", label: "CSR Skilling" },
    { value: "caas", label: "CaaS (Community as a Service)" },
    { value: "research", label: "Research" },
    { value: "product-testing", label: "Product Testing" },
    { value: "venture-support", label: "Venture Support" },
    { value: "social-impact", label: "Social Impact" },
  ];

  const programTypes = [
    { value: "", label: "Select program type" },
    { value: "innovation", label: "Innovation Challenge" },
    { value: "learning-sprint", label: "Learning Sprint" },
    { value: "product-testing", label: "Product Testing" },
    { value: "research", label: "Research-as-a-Service" },
    { value: "govtech", label: "GovTech Pilot" },
  ];

  const issueCategories = [
    { value: "", label: "Select issue category" },
    { value: "login", label: "Login/Access" },
    { value: "profile", label: "Profile Issues" },
    { value: "bug", label: "Bug Report" },
    { value: "other-tech", label: "Other Technical Issue" },
  ];

  useEffect(() => {
    const intentParam = searchParams?.get("intent");
    if (intentParam && intents.some((i) => i.value === intentParam)) {
      setFormData((prev) => ({ ...prev, intent: intentParam }));
    }
  }, [searchParams]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.intent) {
      newErrors.intent = "Please select your purpose";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone.trim()) {
      const phone = formData.phone.trim();
      const digits = phone.replace(/\D/g, "");
      if (!/^\+?[0-9\s\-().]{7,20}$/.test(phone) || digits.length < 7 || digits.length > 15) {
        newErrors.phone =
          "Please enter a valid phone number — include your country code for international numbers (e.g. +91 9876543210)";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length > 5000) {
      newErrors.message = "Message must be less than 5000 characters";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const isHuman = await verifyRecaptcha();
    if (!isHuman) {
      toast.error("ReCaptcha verification failed.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || "Thank you for your message! We'll get back to you soon.");

        // Reset form on success
        setFormData({
          intent: "",
          name: "",
          email: "",
          phone: "",
          region: "",
          message: "",
          consent: false,
          institution: "",
          courseYear: "",
          campusChapter: "",
          interestGroups: "",
          organization: "",
          organizationType: "",
          focusArea: "",
          timeline: "",
          budget: "",
          programType: "",
          targetCohort: "",
          role: "",
          skills: "",
          numberOfHires: "",
          eventName: "",
          eventDate: "",
          outlet: "",
          deadline: "",
          issueCategory: "",
        });
        setErrors({});
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");

        // Handle validation errors
        if (data.errors && Array.isArray(data.errors)) {
          const errorMap: Record<string, string> = {};
          data.errors.forEach((error: string) => {
            const e = error.toLowerCase();
            if (e.includes("phone")) errorMap.phone = error;
            else if (e.includes("name")) errorMap.name = error;
            else if (e.includes("email")) errorMap.email = error;
            else if (e.includes("message")) errorMap.message = error;
            else if (e.includes("intent")) errorMap.intent = error;
            else if (e.includes("consent") || e.includes("privacy policy"))
              errorMap.consent = error;
          });
          setErrors(errorMap);
        }
      }
    } catch (_error) {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifyRecaptcha = async (): Promise<boolean> => {
    if (!executeRecaptcha) {
      toast.error("ReCaptcha not ready. Please try again.");
      return false;
    }

    let token: string;

    try {
      token = await executeRecaptcha("contact_form");
    } catch (err) {
      console.error("Failed to execute reCAPTCHA", err);
      toast.error("ReCaptcha failed. Please retry.");
      return false;
    }

    try {
      const res = await fetch("/api/captcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gReCaptchaToken: token,
        }),
      });

      if (!res.ok) return false;
      const data = await res.json();
      return data.success && data.score > 0.5;
    } catch (err) {
      console.error("reCAPTCHA verification error", err);
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const renderConditionalFields = () => {
    switch (formData.intent) {
      case "student":
        return (
          <div className="space-y-4 p-4 bg-mulearn-gray-50 rounded-lg">
            <h4 className="font-semibold text-mulearn-blackish flex items-center gap-2">
              <School className="w-4 h-4" />
              Student Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Input
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="Your college/university"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="courseYear">Course & Year</Label>
                <Input
                  id="courseYear"
                  name="courseYear"
                  value={formData.courseYear}
                  onChange={handleChange}
                  placeholder="e.g., B.Tech CSE, 2nd Year"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="campusChapter">Campus Chapter Status</Label>
                <Select
                  value={formData.campusChapter}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, campusChapter: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="existing">Existing chapter</SelectItem>
                    <SelectItem value="starting">Starting new chapter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="interestGroups">Interest Groups</Label>
                <Input
                  id="interestGroups"
                  name="interestGroups"
                  value={formData.interestGroups}
                  onChange={handleChange}
                  placeholder="e.g., Web Dev, AI, Design"
                />
              </div>
            </div>
          </div>
        );

      case "partner":
        return (
          <div className="space-y-4 p-4 bg-mulearn-gray-50 rounded-lg">
            <h4 className="font-semibold text-mulearn-blackish flex items-center gap-2">
              <Building className="w-4 h-4" />
              Organization Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="organization">Organization Name</Label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your organization name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organizationType">Organization Type</Label>
                <Select
                  value={formData.organizationType}
                  onValueChange={(value) => {
                    setFormData((prev) => ({ ...prev, organizationType: value }));
                    if (errors.organizationType) setErrors((p) => ({ ...p, organizationType: "" }));
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select organization type" />
                  </SelectTrigger>
                  <SelectContent>
                    {organizationTypes
                      .filter((option) => option.value !== "")
                      .map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="focusArea">Focus Area</Label>
                <Select
                  value={formData.focusArea}
                  onValueChange={(value) => {
                    setFormData((prev) => ({ ...prev, focusArea: value }));
                    if (errors.focusArea) setErrors((p) => ({ ...p, focusArea: "" }));
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select focus area" />
                  </SelectTrigger>
                  <SelectContent>
                    {focusAreas
                      .filter((option) => option.value !== "")
                      .map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Input
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="Expected timeline"
                />
              </div>
            </div>
          </div>
        );

      case "program":
        return (
          <div className="space-y-4 p-4 bg-mulearn-gray-50 rounded-lg">
            <h4 className="font-semibold text-mulearn-blackish flex items-center gap-2">
              <Users className="w-4 h-4" />
              Program Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="programType">Program Type</Label>
                <Select
                  value={formData.programType}
                  onValueChange={(value) => {
                    setFormData((prev) => ({ ...prev, programType: value }));
                    if (errors.programType) setErrors((p) => ({ ...p, programType: "" }));
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select program type" />
                  </SelectTrigger>
                  <SelectContent>
                    {programTypes
                      .filter((option) => option.value !== "")
                      .map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetCohort">Target Cohort</Label>
                <Input
                  id="targetCohort"
                  name="targetCohort"
                  value={formData.targetCohort}
                  onChange={handleChange}
                  placeholder="e.g., 1000 students, working professionals"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Input
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="Program duration"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Estimated budget"
                />
              </div>
            </div>
          </div>
        );

      case "hiring":
        return (
          <div className="space-y-4 p-4 bg-mulearn-gray-50 rounded-lg">
            <h4 className="font-semibold text-mulearn-blackish flex items-center gap-2">
              <Users className="w-4 h-4" />
              Hiring Requirements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role">Role/Position</Label>
                <Input
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g., Frontend Developer, Data Scientist"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Required Skills</Label>
                <Input
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Key skills and technologies"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numberOfHires">Number of Hires</Label>
                <Input
                  id="numberOfHires"
                  name="numberOfHires"
                  value={formData.numberOfHires}
                  onChange={handleChange}
                  placeholder="Estimated number of positions"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Compensation Range</Label>
                <Input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Stipend/CTC range"
                />
              </div>
            </div>
          </div>
        );

      case "events":
        return (
          <div className="space-y-4 p-4 bg-mulearn-gray-50 rounded-lg">
            <h4 className="font-semibold text-mulearn-blackish flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Event Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="eventName">Event Name</Label>
                <Input
                  id="eventName"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  placeholder="Event title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  placeholder="Expected date"
                />
              </div>
            </div>
          </div>
        );

      case "media":
        return (
          <div className="space-y-4 p-4 bg-mulearn-gray-50 rounded-lg">
            <h4 className="font-semibold text-mulearn-blackish flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Media Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="outlet">Media Outlet</Label>
                <Input
                  id="outlet"
                  name="outlet"
                  value={formData.outlet}
                  onChange={handleChange}
                  placeholder="Your publication/channel"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline</Label>
                <Input
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  placeholder="Submission deadline"
                />
              </div>
            </div>
          </div>
        );

      case "support":
        return (
          <div className="space-y-4 p-4 bg-mulearn-gray-50 rounded-lg">
            <h4 className="font-semibold text-mulearn-blackish flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              Support Details
            </h4>
            <div className="space-y-2">
              <Label htmlFor="issueCategory">Issue Category</Label>
              <Select
                value={formData.issueCategory}
                onValueChange={(value) => {
                  setFormData((prev) => ({ ...prev, issueCategory: value }));
                  if (errors.issueCategory) setErrors((p) => ({ ...p, issueCategory: "" }));
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select issue category" />
                </SelectTrigger>
                <SelectContent>
                  {issueCategories
                    .filter((option) => option.value !== "")
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-mulearn-whitish rounded-xl shadow-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="intent" className="text-base font-semibold">
            I am here to...
          </Label>
          <Select
            value={formData.intent}
            onValueChange={(value) => {
              setFormData((prev) => ({ ...prev, intent: value }));
              if (errors.intent) setErrors((p) => ({ ...p, intent: "" }));
            }}
          >
            <SelectTrigger className={`w-full ${errors.intent ? "border-destructive" : ""}`}>
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              {intents
                .filter((option) => option.value !== "")
                .map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          {errors.intent && <p className="text-sm text-destructive">{errors.intent}</p>}
        </div>

        {formData.intent && renderConditionalFields()}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 9876543210 or +1 555 123 4567"
                className={errors.phone ? "border-red-500" : ""}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Country/Region</Label>
              <Input
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                placeholder="Your country/region"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message / Brief Description *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your query or provide a brief description..."
            rows={5}
            className={`w-full ${errors.message ? "border-destructive" : ""}`}
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
        </div>

        <div className="space-y-2">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm text-mulearn-gray-700 font-normal">
              I agree to the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                privacy policy
              </a>{" "}
              and to be contacted about my query. <span className="text-red-500">*</span>
            </Label>
          </div>
          {errors.consent && <p className="text-sm text-destructive">{errors.consent}</p>}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-mulearn text-mulearn-whitish py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-mulearn-whitish mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
