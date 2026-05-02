import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      company: formData.get("company") || "",
      message: formData.get("message"),
    });

    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    const { name, email, phone, company, message } = result.data;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      company ? `Company: ${company}` : "",
      `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const mailtoLink = `mailto:riftnovatechnologies@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thanks — our team will be in touch within 1 business day.",
      });
      e.currentTarget?.reset();
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something meaningful together"
        description="Reach out about partnerships, demos, investment, or joining the team. We respond within one business day."
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 lg:p-10 border-border shadow-card">
                <h2 className="font-display text-2xl font-bold text-secondary">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">All fields marked * are required.</p>

                <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <Label htmlFor="name">Full name *</Label>
                    <Input id="name" name="name" required maxLength={100} className="mt-2" placeholder="Jane Doe" />
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required maxLength={255} className="mt-2" placeholder="jane@company.com" />
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" maxLength={40} className="mt-2" placeholder="+254 700 000 000" />
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" maxLength={120} className="mt-2" placeholder="Your organization" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" required maxLength={1000} rows={6} className="mt-2" placeholder="Tell us about your needs, project, or partnership idea..." />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                      {submitting ? "Sending..." : "Send message"}
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <Card className="p-6 border-border">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                     <a href="mailto:riftnovatechnologies@gmail.com" className="font-semibold text-secondary hover:text-primary">riftnovatechnologies@gmail.com</a>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-border">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                    <p className="font-semibold text-secondary">+254 700 000 000</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-border">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">HQ Africa</p>
                    <p className="font-semibold text-secondary">Eldoret, Kenya</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-border">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">HQ North America</p>
                    <p className="font-semibold text-secondary">Grand Rapids, MI</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-secondary text-secondary-foreground border-secondary">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-secondary-foreground/70">Partnerships</p>
                    <p className="font-semibold">riftnovatechnologies@gmail.com</p>
                    <p className="mt-1 text-xs text-secondary-foreground/70">Investors, county partners, NGOs welcome.</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
