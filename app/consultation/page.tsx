"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Calendar, Users, Globe2 } from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser';

const subjects = [
  { id: "english", name: "English", icon: "🇬🇧" },
  { id: "kiswahili", name: "Kiswahili", icon: "🇹🇿" },
  { id: "german", name: "German", icon: "🇩🇪" },
  { id: "french", name: "French", icon: "🇫🇷" },
  { id: "chinese", name: "Chinese", icon: "🇨🇳" },
  { id: "dutch", name: "Dutch", icon: "🇳🇱" },
  { id: "math", name: "Math", icon: "📐" },
  { id: "science", name: "Science", icon: "🔬" },
]

export default function ConsultationPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    level: '',
    goals: '',
    deliveryMode: '',
    groupSize: 'individual',
    availability: '',
    experience: '',
    specialNeeds: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const toggleSubject = (subjectId: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.goals || !formData.deliveryMode || !formData.availability) {
      alert('Please fill in all required fields.');
      return;
    }
    
    if (selectedSubjects.length === 0) {
      alert('Please select at least one subject.');
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Get subject names for display
      const selectedSubjectNames = selectedSubjects.map(id => 
        subjects.find(subject => subject.id === id)?.name
      ).filter(Boolean).join(', ');

      // Create comprehensive email content
      const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            New Consultation Request
          </h2>
          
          <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Personal Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          </div>

          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Learning Goals</h3>
            <p><strong>Subjects of Interest:</strong> ${selectedSubjectNames}</p>
            <p><strong>Current Level:</strong> ${formData.level || 'Not specified'}</p>
            <p><strong>Learning Goals:</strong></p>
            <div style="background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px;">
              ${formData.goals.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Learning Preferences</h3>
            <p><strong>Preferred Delivery Mode:</strong> ${formData.deliveryMode.charAt(0).toUpperCase() + formData.deliveryMode.slice(1)}</p>
            <p><strong>Group Size Preference:</strong> ${formData.groupSize.charAt(0).toUpperCase() + formData.groupSize.slice(1).replace('-', ' ')}</p>
            <p><strong>Preferred Schedule:</strong></p>
            <div style="background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px;">
              ${formData.availability.replace(/\n/g, '<br>')}
            </div>
          </div>

          ${formData.experience || formData.specialNeeds ? `
          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Additional Information</h3>
            ${formData.experience ? `
              <p><strong>Previous Learning Experience:</strong></p>
              <div style="background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px; margin-bottom: 15px;">
                ${formData.experience.replace(/\n/g, '<br>')}
              </div>
            ` : ''}
            ${formData.specialNeeds ? `
              <p><strong>Special Requirements:</strong></p>
              <div style="background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px;">
                ${formData.specialNeeds.replace(/\n/g, '<br>')}
              </div>
            ` : ''}
          </div>
          ` : ''}

          <div style="background-color: #065f46; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `;

      
      // Send email using EmailJS
      await emailjs.send(
        "service_k4dwqon",
        "template_2y5bwed",
        {
          to_name: 'BestED Team',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: `New Consultation Request - ${formData.firstName} ${formData.lastName}`,
          message: emailContent,
          // Individual form fields for template customization
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          subjects: selectedSubjectNames,
          level: formData.level || 'Not specified',
          goals: formData.goals,
          delivery_mode: formData.deliveryMode,
          group_size: formData.groupSize,
          availability: formData.availability,
          experience: formData.experience || 'Not provided',
          special_needs: formData.specialNeeds || 'None',
          submission_date: new Date().toLocaleString()
        },
        "gn6RCJ7AimpPDC8qL"
      );

      alert('Form submitted successfully! We will contact you within 12 hours.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        level: '',
        goals: '',
        deliveryMode: '',
        groupSize: 'individual',
        availability: '',
        experience: '',
        specialNeeds: ''
      });
      setSelectedSubjects([]);
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

        return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/20" />
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="bg-emerald-600 hover:bg-emerald-700">Book Consultation</Badge>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Book Your Consultation</h1>
              <p className="mt-3 text-muted-foreground text-lg">
                Tell us about your learning goals, availability, and preferences. We&apos;ll create a personalized learning plan tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              {/* Form */}
              <Card className="border-emerald-100">
                <CardHeader>
                  <CardTitle className="text-2xl">Consultation Request Form</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Learning Goals */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Learning Goals</h3>
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Subjects of Interest *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {subjects.map((subject) => (
                            <button
                              key={subject.id}
                              type="button"
                              onClick={() => toggleSubject(subject.id)}
                              className={`relative p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                                selectedSubjects.includes(subject.id)
                                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 shadow-md'
                                  : 'border-border hover:border-emerald-300 bg-card'
                              }`}
                            >
                              <div className="text-center space-y-2">
                                <div className="text-2xl">{subject.icon}</div>
                                <div className={`text-sm font-medium ${
                                  selectedSubjects.includes(subject.id)
                                    ? 'text-emerald-700 dark:text-emerald-300'
                                    : 'text-foreground'
                                }`}>
                                  {subject.name}
                                </div>
                                {selectedSubjects.includes(subject.id) && (
                                  <div className="absolute top-2 right-2">
                                    <Check className="h-4 w-4 text-emerald-600" />
                                  </div>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                        <input
                          type="hidden"
                          name="subjects"
                          value={selectedSubjects.join(',')}
                          required
                        />
                        <p className="mt-2 text-xs text-muted-foreground">
                          Click on subjects to select/deselect them. You can choose multiple subjects.
                        </p>
                      </div>
                      <div>
                        <label htmlFor="level" className="block text-sm font-medium mb-2">
                          Current Level
                        </label>
                        <select
                          id="level"
                          name="level"
                          value={formData.level}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select your level</option>
                          <option value="beginner">Beginner (A1)</option>
                          <option value="elementary">Elementary (A2)</option>
                          <option value="intermediate">Intermediate (B1)</option>
                          <option value="upper-intermediate">Upper Intermediate (B2)</option>
                          <option value="advanced">Advanced (C1)</option>
                          <option value="proficient">Proficient (C2)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="goals" className="block text-sm font-medium mb-2">
                          Learning Goals *
                        </label>
                        <textarea
                          id="goals"
                          name="goals"
                          rows={3}
                          value={formData.goals}
                          onChange={handleInputChange}
                          required
                          placeholder="Describe your learning objectives, timeline, and specific goals..."
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>

                    {/* Preferences */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Learning Preferences</h3>
                      <div>
                        <label htmlFor="deliveryMode" className="block text-sm font-medium mb-2">
                          Preferred Delivery Mode *
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="deliveryMode"
                              value="in-person"
                              checked={formData.deliveryMode === 'in-person'}
                              onChange={handleInputChange}
                              required
                              className="rounded-full border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="text-sm">In-person coaching</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="deliveryMode"
                              value="online"
                              checked={formData.deliveryMode === 'online'}
                              onChange={handleInputChange}
                              required
                              className="rounded-full border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="text-sm">Online/remote sessions</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="deliveryMode"
                              value="hybrid"
                              checked={formData.deliveryMode === 'hybrid'}
                              onChange={handleInputChange}
                              required
                              className="rounded-full border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="text-sm">Hybrid (both options)</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="groupSize" className="block text-sm font-medium mb-2">
                          Group Size Preference
                        </label>
                        <select
                          id="groupSize"
                          name="groupSize"
                          value={formData.groupSize}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="individual">Individual (1-on-1)</option>
                          <option value="small-group">Small Group (2-4 people)</option>
                          <option value="corporate">Corporate/Team</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="availability" className="block text-sm font-medium mb-2">
                          Preferred Schedule *
                        </label>
                        <textarea
                          id="availability"
                          name="availability"
                          rows={2}
                          value={formData.availability}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us about your preferred days, times, and frequency..."
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Additional Information</h3>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium mb-2">
                          Previous Learning Experience
                        </label>
                        <textarea
                          id="experience"
                          name="experience"
                          rows={2}
                          value={formData.experience}
                          onChange={handleInputChange}
                          placeholder="Share any previous language learning, tutoring, or educational background..."
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label htmlFor="specialNeeds" className="block text-sm font-medium mb-2">
                          Special Requirements or Accommodations
                        </label>
                        <textarea
                          id="specialNeeds"
                          name="specialNeeds"
                          rows={2}
                          value={formData.specialNeeds}
                          onChange={handleInputChange}
                          placeholder="Any specific needs, accommodations, or special considerations..."
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Submit Consultation Request
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Information Sidebar */}
              <div className="space-y-6">
                <Card className="border-emerald-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-emerald-700" />
                      What Happens Next?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>We&apos;ll review your consultation request within 12 hours</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Schedule a free 15-minute discovery call</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Receive your personalized learning plan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Begin your BestED journey</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-emerald-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-emerald-700" />
                      Learning Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300">
                        Individual
                      </Badge>
                      <span>1-on-1 personalized coaching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300">
                        Small Group
                      </Badge>
                      <span>2-4 learners, collaborative learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300">
                        Corporate
                      </Badge>
                      <span>Team training and development</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-emerald-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe2 className="h-5 w-5 text-emerald-700" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:edithevelyne77@gmail.com" className="text-emerald-700 underline underline-offset-4">
                        edithevelyne77@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+254796770947" className="text-emerald-700 underline underline-offset-4">
                        +254 796 770 947
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground">Within 12 hours</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
