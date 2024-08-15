import Link from "next/link"
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background px-4 py-3 shadow-sm md:px-6 md:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <GlassWaterIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">VodaMark</span>
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Contact
            </Link>
          </nav>
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Get Started</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button>Dashboard</Button>
          </SignedIn>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary-foreground py-12 md:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4">
              <h1 className="text-3xl font-bold text-background md:text-4xl lg:text-5xl">
                Watermark Your Content with Ease
              </h1>
              <p className="text-background/80 md:text-lg">
                VodaMark is an AI-powered watermarking service that helps you protect your digital content with a single
                click.
              </p>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button>Try for Free</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button>Dashboard</Button>
              </SignedIn>
            </div>
            <Image
              src="/placeholder.svg"
              width={800}
              height={600}
              alt="Hero Image"
              className="mx-auto rounded-xl object-cover"
              style={{ aspectRatio: "800/600", objectFit: "cover" }}
              priority
            />
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:gap-12 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <UploadIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Upload Your Content</h3>
              <p className="text-muted-foreground">Simply drag and drop your files or select them from your device.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <WandIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Apply Watermark</h3>
              <p className="text-muted-foreground">
                Our AI-powered watermarking tool will add your custom watermark to your content.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <DownloadIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Download Watermarked Files</h3>
              <p className="text-muted-foreground">Download your watermarked content and share it with confidence.</p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Who Uses VodaMark?</h2>
              <p className="text-muted-foreground md:text-lg">
                VodaMark is trusted by a variety of users to protect their digital content.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col space-y-4 rounded-lg bg-muted p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-md bg-primary p-3 text-primary-foreground">
                    <PencilIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Content Creator</h3>
                </div>
                <p className="text-muted-foreground">
                  Protect your digital artwork, designs, and other creative content with VodaMark&apos;s secure watermarking
                  solution.
                </p>
                <Link href="#" className="text-primary hover:underline" prefetch={false}>
                  Learn More
                </Link>
              </Card>
              <Card className="flex flex-col space-y-4 rounded-lg bg-muted p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-md bg-primary p-3 text-primary-foreground">
                    <BriefcaseIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Business Owner</h3>
                </div>
                <p className="text-muted-foreground">
                  Safeguard your company&apos;s digital assets, such as marketing materials and product images, with
                  VodaMark&apos;s watermarking solution.
                </p>
                <Link href="#" className="text-primary hover:underline" prefetch={false}>
                  Learn More
                </Link>
              </Card>
              <Card className="flex flex-col space-y-4 rounded-lg bg-muted p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-md bg-primary p-3 text-primary-foreground">
                    <CameraIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Photographer</h3>
                </div>
                <p className="text-muted-foreground">
                  Protect your professional photography portfolio with VodaMark&apos;s discreet and customizable watermarking
                  options.
                </p>
                <Link href="#" className="text-primary hover:underline" prefetch={false}>
                  Learn More
                </Link>
              </Card>
              <Card className="flex flex-col space-y-4 rounded-lg bg-muted p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-md bg-primary p-3 text-primary-foreground">
                    <VideoIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Live Streamer</h3>
                </div>
                <p className="text-muted-foreground">
                  Easily watermark your live streams and recorded videos to prevent unauthorized use and distribution.
                </p>
                <Link href="#" className="text-primary hover:underline" prefetch={false}>
                  Learn More
                </Link>
              </Card>
            </div>
          </div>
        </section>
        <SignedOut>
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold md:text-4xl">VodaMark Pricing</h2>
                <p className="text-muted-foreground md:text-lg">
                  Protect your digital content with our affordable plans.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col space-y-4 rounded-lg bg-muted p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-primary p-3 text-primary-foreground">
                      <ImageIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Anon Tier</h3>
                  </div>
                  <p className="text-muted-foreground">Protect your images with basic watermarking.</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Anon Tier</span>
                      <span>$0/month</span>
                    </div>
                    <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                      <li>Up to 50 images/month</li>
                      <li>Basic watermark customization</li>
                    </ul>
                  </div>
                  <Button>Get Started</Button>
                </Card>
                <Card className="flex flex-col space-y-4 rounded-lg bg-muted p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-primary p-3 text-primary-foreground">
                      <ImageIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Free Tier</h3>
                  </div>
                  <p className="text-muted-foreground">Protect your images with AI-generated watermarks.</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Free Tier</span>
                      <span>$0/month</span>
                    </div>
                    <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                      <li>Up to 50 images/month</li>
                      <li>Basic watermark customization</li>
                    </ul>
                  </div>
                  <Button>Get Started</Button>
                </Card>
                <Card className="flex flex-col space-y-4 rounded-lg bg-muted p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-primary p-3 text-primary-foreground">
                      <ImageIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Premium Tier</h3>
                  </div>
                  <p className="text-muted-foreground">Protect your images with advanced watermarking.</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Premium Tier</span>
                      <span>$9.99/month</span>
                    </div>
                    <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                      <li>Up to 500 images/month</li>
                      <li>Advanced watermark customization</li>
                      <li>Priority support</li>
                    </ul>
                  </div>
                  <Button>Get Started</Button>
                </Card>
              </div>
            </div>
          </section>
        </SignedOut>
      </main>
      <footer className="bg-muted py-6 text-muted-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm">&copy; 2024 VodaMark. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:text-primary transition-colors" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function GlassWaterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  )
}


function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function PencilIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}


function WandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  )
}
