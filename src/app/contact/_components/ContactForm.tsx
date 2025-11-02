"use client";

import { useState } from "react";
import {
  Send,
  Building,
  School,
  Users,
  Calendar,
  FileText,
  HelpCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.intent) {
      newErrors.intent = "Please select your purpose";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);

      const successMessages = {
        student:
          "Thank you! Our community team will contact you within 48 hours.",
        partner:
          "Thank you! Our partnerships team will contact you within 72 hours.",
        program:
          "Thank you! Our programs team will contact you within 72 hours.",
        hiring:
          "Thank you! Our Launchpad team will contact you within 48 hours.",
        events: "Thank you! Our events team will contact you within 48 hours.",
        media: "Thank you! Our media team will contact you within 24-48 hours.",
        support:
          "Thank you! Our support team will contact you within 24-48 hours.",
        other: "Thank you! We'll get back to you as soon as possible.",
      };

      alert(
        successMessages[formData.intent as keyof typeof successMessages] ||
          "Thank you for your message!"
      );

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
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

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
                <select
                  id="campusChapter"
                  name="campusChapter"
                  value={formData.campusChapter}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-mulearn-gray-300 rounded-lg focus:ring-2 focus:ring-mulearn-trusty-blue focus:border-transparent"
                >
                  <option value="">Select status</option>
                  <option value="existing">Existing chapter</option>
                  <option value="starting">Starting new chapter</option>
                </select>
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
                <select
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-mulearn-gray-300 rounded-lg focus:ring-2 focus:ring-mulearn-trusty-blue focus:border-transparent"
                >
                  {organizationTypes.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.value === ""}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="focusArea">Focus Area</Label>
                <select
                  id="focusArea"
                  name="focusArea"
                  value={formData.focusArea}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-mulearn-gray-300 rounded-lg focus:ring-2 focus:ring-mulearn-trusty-blue focus:border-transparent"
                >
                  {focusAreas.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.value === ""}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
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
                <select
                  id="programType"
                  name="programType"
                  value={formData.programType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-mulearn-gray-300 rounded-lg focus:ring-2 focus:ring-mulearn-trusty-blue focus:border-transparent"
                >
                  {programTypes.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.value === ""}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
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
              <select
                id="issueCategory"
                name="issueCategory"
                value={formData.issueCategory}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-mulearn-gray-300 rounded-lg focus:ring-2 focus:ring-mulearn-trusty-blue focus:border-transparent"
              >
                {issueCategories.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ""}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
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
          <select
            id="intent"
            name="intent"
            value={formData.intent}
            onChange={handleChange}
            required
            className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-mulearn-trusty-blue focus:border-transparent text-base ${
              errors.intent ? "border-red-500" : "border-mulearn-gray-300"
            }`}
          >
            {intents.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          {errors.intent && (
            <p className="text-sm text-red-600">{errors.intent}</p>
          )}
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
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}
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
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
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
                placeholder="Enter your phone number"
              />
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
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your query or provide a brief description..."
            rows={5}
            className={`w-full px-3 py-2 border border-mulearn-gray-300 rounded-lg focus:ring-2 focus:ring-mulearn-trusty-blue focus:border-transparent transition-all duration-300 resize-none text-sm ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 rounded border-mulearn-gray-300 text-mulearn-trusty-blue focus:ring-mulearn-trusty-blue"
            />
            <span className="text-sm text-mulearn-gray-700">
              I agree to the privacy policy and to be contacted about my query.
              *
            </span>
          </label>
          {errors.consent && (
            <p className="text-sm text-red-600">{errors.consent}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple text-mulearn-whitish py-3"
        >
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </form>
    </div>
  );
}
