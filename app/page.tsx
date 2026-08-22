import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-zinc-950 font-sans">
      <header className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <div className="text-lg font-semibold">Paper Boat Digital</div>
            <div className="text-xs text-muted-foreground">Automated review reminders via WhatsApp & Google</div>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#features">Features</a>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#pricing">Pricing</a>
          <Button variant="outline" size="sm">Sign in</Button>
          <Button size="sm">Get started</Button>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary">New · Beta</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Turn satisfied customers into 5-star Google reviews — effortlessly</h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Paper Boat Digital helps local businesses collect more Google reviews by sending timely, personalized WhatsApp reminders and following up automatically. Integrate your Google Business Profile and WhatsApp channel, upload customers, and configure templates — the system handles the rest.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg">Start free trial</Button>
              <Button variant="ghost" size="lg">Watch demo</Button>
            </div>

            <div className="flex gap-6 pt-4 text-sm text-muted-foreground">
              <div>
                <div className="font-medium text-foreground">Automations</div>
                <div>Schedule reminders & follow-ups</div>
              </div>
              <div>
                <div className="font-medium text-foreground">Integrations</div>
                <div>WhatsApp & Google Business Profile</div>
              </div>
              <div>
                <div className="font-medium text-foreground">Privacy</div>
                <div>GDPR & opt-out support</div>
              </div>
            </div>
          </div>

          <aside className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Quick setup preview</CardTitle>
                <CardDescription>How it works for a business (example)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <Label className="mb-1">WhatsApp template</Label>
                    <Textarea readOnly rows={3} value={'Hi {name}! Thanks for visiting us. If you enjoyed your experience, could you leave us a quick review? {link}'} />
                  </div>

                  <div>
                    <Label className="mb-1">Google review message</Label>
                    <Input readOnly value={'Please share your feedback on our Google page: {link}'} />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="mb-1">Send delay</Label>
                      <Input readOnly value="2 days after purchase" />
                    </div>
                    <div>
                      <Label className="mb-1">Follow-ups</Label>
                      <Input readOnly value="2 follow-ups, 3 days apart" />
                    </div>
                  </div>

                  <Separator />

                  <div className="text-sm text-muted-foreground">
                    Import customers (CSV) with name & phone. Messages are personalized and sent from your connected WhatsApp channel. When a review is posted, an automated reply is posted via your Google Business Profile configuration.
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="text-sm text-muted-foreground">No credit card required</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View docs</Button>
                  <Button size="sm">Create account</Button>
                </div>
              </CardFooter>
            </Card>
          </aside>
        </section>

        <section id="features" className="mt-14 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold">Smart Reminders</h3>
              <p className="text-sm text-muted-foreground mt-2">Send triggered WhatsApp reminders with personalized placeholders and follow-up sequences to increase response rates.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold">Google Replies</h3>
              <p className="text-sm text-muted-foreground mt-2">Automatically post configurable replies when new reviews arrive to acknowledge feedback and encourage updates.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold">Customer Import</h3>
              <p className="text-sm text-muted-foreground mt-2">Bulk import customers (name + phone). Preview templates and test messages before sending at scale.</p>
            </CardContent>
          </Card>
        </section>

        <section id="pricing" className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="text-sm text-muted-foreground mt-2">Simple monthly plans that scale with the number of messages and connected channels.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Card>
              <CardContent>
                <div className="text-xl font-semibold">Starter</div>
                <div className="text-muted-foreground">Free · 100 messages / month</div>
                <div className="pt-4 text-sm">WhatsApp & Google integration, basic templates, email support.</div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Choose</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardContent>
                <div className="text-xl font-semibold">Pro</div>
                <div className="text-muted-foreground">$29 / month · 2,000 messages</div>
                <div className="pt-4 text-sm">Advanced templates, follow-ups, and priority support.</div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Choose</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardContent>
                <div className="text-xl font-semibold">Enterprise</div>
                <div className="text-muted-foreground">Custom · Unlimited</div>
                <div className="pt-4 text-sm">Dedicated onboarding, SLAs, and custom integrations.</div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Contact sales</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <footer className="mt-20 border-t pt-8 text-sm text-muted-foreground">
          <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
            <div>© {new Date().getFullYear()} Paper Boat Digital — Built for local businesses</div>
            <div className="flex gap-4">
              <Link className="hover:underline" href="/privacy-policy">Privacy</Link>
              <Link className="hover:underline" href="/terms-of-service">Terms</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
