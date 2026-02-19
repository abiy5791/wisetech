"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        id="contact-form"
        className="flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-card p-12 text-center transition-all duration-500 animate-in fade-in-0 zoom-in-95"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shadow-lg shadow-primary/10">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-semibold text-foreground">
          Thank You!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your message has been received. One of our consultants will be in touch
          within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" required className="transition-all duration-200 focus:border-primary/50" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" required className="transition-all duration-200 focus:border-primary/50" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Work Email</Label>
          <Input id="email" type="email" placeholder="john@company.com" required className="transition-all duration-200 focus:border-primary/50" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="Company name" className="transition-all duration-200 focus:border-primary/50" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="service">Service of Interest</Label>
          <Select>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="assessment">Cybersecurity Assessment</SelectItem>
              <SelectItem value="training">Security Awareness Training</SelectItem>
              <SelectItem value="compliance">Compliance & Regulatory Support</SelectItem>
              <SelectItem value="strategy">Security Strategy & Governance</SelectItem>
              <SelectItem value="cloud">Cloud Security</SelectItem>
              <SelectItem value="outsourcing">IT Service Outsourcing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your security needs..."
            rows={5}
            required
            className="transition-all duration-200 focus:border-primary/50"
          />
        </div>

        <Button type="submit" size="lg" className="group w-full shadow-lg shadow-primary/20">
          Send Message
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          By submitting this form, you agree to our privacy policy. Your information
          will be treated as confidential.
        </p>
      </div>
    </form>
  )
}
