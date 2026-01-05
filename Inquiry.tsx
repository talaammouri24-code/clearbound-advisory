import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  role: z.string({ required_error: "Please select your role." }),
  projectType: z.string({ required_error: "Please select project type." }),
  status: z.string({ required_error: "Please select project status." }),
  challenge: z
    .string()
    .min(10, { message: "Please describe your challenge briefly." }),
});

export default function Inquiry() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      challenge: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://formspree.io/f/mkonppoj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          role: values.role,
          projectType: values.projectType,
          status: values.status,
          message: values.challenge,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast({
        title: "Inquiry received",
        description:
          "Your submission has been received. We will review it and respond if we believe we can add value.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Submission error",
        description:
          "There was an issue submitting your inquiry. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-secondary/10">
          <div className="container-wide text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              Start an Intake Review
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Please provide initial details about your project. We review all
              inquiries to ensure we are the right fit before scheduling a
              consultation.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 max-w-2xl mx-auto">
            <div className="bg-yellow-50/50 border border-yellow-900/10 p-4 mb-10 flex gap-4 rounded-sm">
              <AlertCircle className="w-5 h-5 text-yellow-700 shrink-0 mt-0.5" />
              <div className="text-sm text-yellow-900/80">
                <p className="font-semibold mb-1">Please Note:</p>
                <p>
                  We are strictly an advisory firm. We do not provide
                  construction execution, material supply, or design services.
                  We do not respond to solicitations for vendor representation.
                </p>
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="bg-card"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@company.com"
                            {...field}
                            className="bg-card"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>I am a...</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-card">
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="owner">
                              Property Owner
                            </SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="family_office">
                              Family Office Rep
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-card">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">
                              Private Residential
                            </SelectItem>
                            <SelectItem value="commercial">
                              Commercial / Office
                            </SelectItem>
                            <SelectItem value="hospitality">
                              Hospitality
                            </SelectItem>
                            <SelectItem value="mixed_use">Mixed Use</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Stage</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-card">
                            <SelectValue placeholder="Where is the project now?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="concept">
                            Concept / Feasibility
                          </SelectItem>
                          <SelectItem value="design">
                            Design / Pre-construction
                          </SelectItem>
                          <SelectItem value="tender">
                            Tendering / Vendor Selection
                          </SelectItem>
                          <SelectItem value="construction">
                            Under Construction
                          </SelectItem>
                          <SelectItem value="distressed">
                            Stalled / Distressed
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="challenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Challenge or Goal</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe what you need advisory support with..."
                          className="resize-none bg-card min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Please keep this high-level. Do not share confidential
                        data yet.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full md:w-auto px-8 py-6 rounded-none text-base font-serif italic bg-primary hover:bg-primary/90"
                >
                  Submit for Review
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
