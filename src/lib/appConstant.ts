import { Blog, PortfolioItem } from "@/types";
import {
  Code,
  Smartphone,
  TrendingUp,
  Palette,
  Cloud,
  Bot,
  Zap,
  Award,
  Users,
  Target,
} from "lucide-react";

export const TeamData = [
  {
    name: "Sarat Chandra Singh",
    role: "Founder, Marketing",
    avatar: "/images/profile-1.png",
    bio: "Specializes in React, Next.js, and Node.js with 8+ years experience.",
  },
  {
    name: "Kartik Shakar",
    role: "Founder, UI/UX Designer",
    avatar: "/images/profile-2.png",
    bio: "Creates stunning user experiences with modern design principles.",
  },
  {
    name: "Naresh",
    role: "Founder, Chief Technology Officer, Software Engineering",
    avatar: "/images/profile-3.png",
    bio: "Expert in cloud infrastructure, CI/CD, and automation.",
  },
  {
    name: "Kamal Batra",
    role: "Cloud Architect, Networking Engineering",
    avatar: "/images/profile-4.png",
    bio: "Builds intelligent systems and AI-powered automation workflows.",
  },
  {
    name: "Krishna Nagpal",
    role: "Mobile Development, Software Engineering",
    avatar: "/images/profile-5.png",
    bio: "Builds intelligent systems and AI-powered automation workflows.",
  },
];

export const services = [
  { icon: Code, title: "Web Development", desc: "Custom web solutions" },
  { icon: Smartphone, title: "App Development", desc: "Mobile applications" },
  {
    icon: TrendingUp,
    title: "Internet Marketing",
    desc: "Digital marketing",
  },
  { icon: Palette, title: "Graphic Design", desc: "Visual branding" },
  { icon: Target, title: "UI/UX Design", desc: "User experience" },
  { icon: Cloud, title: "Cloud Services", desc: "Cloud infrastructure" },
  { icon: Bot, title: "AI Agents", desc: "Workflow automation" },
];

export const facts = [
  { icon: Zap, title: "Lightning Fast", desc: "95+ PageSpeed scores" },
  { icon: Award, title: "SEO Optimized", desc: "Top search rankings" },
  { icon: Users, title: "User Focused", desc: "Excellent UX/UI" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    screenshot: "/images/portfolio/artizhub.com.png",
    description: "Modern e-commerce solution with real-time inventory",
    technologies: ["Next.js", "TypeScript", "Strapi", "Razorpay Payment"],
    liveUrl: "https://artizhub.com",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    screenshot: "/images/portfolio/artizhub-dark.com.png",
    description: "Analytics dashboard for business intelligence",
    technologies: ["Next.js", "TypeScript", "Strapi", "Razorpay Payment"],
    liveUrl: "https://artizhub.com",
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    screenshot: "/images/portfolio/aishaallureboutique.com.png",
    description: "Basic E-commerce solution with real-time inventory",
    technologies: ["Wordpress", "woo-commerce"],
    liveUrl: "https://aishaallureboutique.com",
  },
  {
    id: "4",
    title: "Portfolio Website",
    screenshot: "/images/portfolio/aishagroupllc.com.png",
    description: "Company Portfolio Website",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://aishagroupllc.com",
  },
  {
    id: "5",
    title: "UI/UX E-Commerce Platform",
    screenshot: "/images/portfolio/e-com.png",
    description: "Modern e-commerce solution with real-time inventory",
    technologies: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    id: "6",
    title: "UI/UX E-Commerce Platformm",
    screenshot: "/images/portfolio/e-com2.png",
    description: "Modern e-commerce solution with real-time inventory",
    technologies: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    id: "7",
    title: "Fitness Portfolio Website",
    screenshot: "/images/portfolio/fitness.png",
    description: "Company Portfolio Website",
    technologies: ["React", "Material UI", "MySQL"],
  },
  {
    id: "8",
    title: "Game",
    screenshot: "/images/portfolio/game.png",
    description: "Rollete Wheel Game for giveaways",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "9",
    title: "Portfolio Website",
    screenshot: "/images/portfolio/kgmiec.in.png",
    description: "Company Portfolio Website",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://kgmiec.in",
  },
];

export const blogs: Blog[] = [
  {
    id: "1",
    title: "The Importance of Website Speed in SEO",
    excerpt:
      "Fast websites rank better and improve user experience. Learn why performance matters for your business success.",
    content: `
      <article class="prose prose-lg dark:prose-invert max-w-none">
        <div class="mb-8">
          <p class="text-sm text-muted-foreground">
            By <span class="font-semibold text-primary">Sarat Chandra Singh</span> • 
            <time datetime="2024-01-15" class="ml-1">January 15, 2024</time>
          </p>
        </div>
  
        <p class="text-lg text-muted-foreground leading-relaxed mb-8">
          Fast websites rank better and improve user experience. Learn why performance matters for your business success.
        </p>
  
        <hr class="my-8 border-muted" />
  
        <section class="space-y-6">
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-4">Why Website Speed Matters</h2>
            <p class="text-foreground leading-relaxed mb-4">
              Website speed is no longer just a technical metric — it is one of the most important ranking factors for modern SEO. 
              A fast website not only delivers a better user experience but also directly improves your search engine visibility, 
              conversions, and overall brand trust.
            </p>
          </div>
  
          <div class="bg-muted p-6 rounded-lg space-y-4">
            <div>
              <h3 class="text-2xl font-semibold text-foreground mb-3">First Impressions Matter</h3>
              <p class="text-foreground leading-relaxed">
                Your website has <strong class="text-primary">less than 3 seconds</strong> to make a good impression. 
                Slow websites increase bounce rates dramatically, and once users leave, they rarely return.
              </p>
            </div>
  
            <div>
              <h3 class="text-2xl font-semibold text-foreground mb-3">Google Uses Speed as a Ranking Factor</h3>
              <p class="text-foreground leading-relaxed">
                Since Google's Page Experience Update, website performance plays a crucial role in how your site ranks.
              </p>
            </div>
  
            <div>
              <h3 class="text-2xl font-semibold text-foreground mb-3">Better User Experience = Better Conversions</h3>
              <ul class="space-y-2 ml-6 list-disc marker:text-primary">
                <li class="text-foreground">
                  A <strong class="text-primary">1-second delay</strong> reduces conversions by <strong>~7%</strong>
                </li>
                <li class="text-foreground">Website revenue drops with every additional second of load time</li>
                <li class="text-foreground">Faster sites increase average session duration</li>
              </ul>
            </div>
          </div>
  
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-4">How Website Speed Affects SEO</h2>
            
            <div class="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl border border-primary/20 mb-6">
              <h3 class="text-2xl font-semibold text-primary mb-4">Core Web Vitals</h3>
              <p class="text-foreground mb-4">Google evaluates speed using three key metrics:</p>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-background p-4 rounded-lg">
                  <h4 class="font-semibold text-primary mb-2">⚡ LCP</h4>
                  <p class="text-sm font-medium mb-1">Largest Contentful Paint</p>
                  <p class="text-xs text-muted-foreground">Measures loading performance</p>
                </div>
                <div class="bg-background p-4 rounded-lg">
                  <h4 class="font-semibold text-primary mb-2">🎯 FID/INP</h4>
                  <p class="text-sm font-medium mb-1">First Input Delay / INP</p>
                  <p class="text-xs text-muted-foreground">Measures interactivity</p>
                </div>
                <div class="bg-background p-4 rounded-lg">
                  <h4 class="font-semibold text-primary mb-2">📊 CLS</h4>
                  <p class="text-sm font-medium mb-1">Cumulative Layout Shift</p>
                  <p class="text-xs text-muted-foreground">Measures visual stability</p>
                </div>
              </div>
            </div>
  
            <div class="bg-accent/10 dark:bg-accent/20 p-6 rounded-lg border border-accent/20">
              <h3 class="text-2xl font-semibold text-accent mb-3">Crawl Budget Optimization</h3>
              <p class="text-foreground leading-relaxed">
                Search engines crawl fast websites more frequently and more efficiently. Slow websites waste crawl budget, 
                affecting the indexing of important pages.
              </p>
            </div>
          </div>
  
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-4">Practical Ways to Improve Website Speed</h2>
            
            <div class="space-y-4">
              <div class="border-l-4 border-primary pl-6 bg-muted p-4 rounded-r-lg">
                <h4 class="font-semibold text-primary mb-2">🖼️ Optimize Images</h4>
                <p class="text-sm text-foreground">Use next-gen formats like WebP and compress images</p>
              </div>
              
              <div class="border-l-4 border-accent pl-6 bg-muted p-4 rounded-r-lg">
                <h4 class="font-semibold text-accent mb-2">🌐 Use a CDN</h4>
                <p class="text-sm text-foreground">Reduce latency with a Content Delivery Network</p>
              </div>
              
              <div class="border-l-4 border-secondary pl-6 bg-muted p-4 rounded-r-lg">
                <h4 class="font-semibold text-secondary mb-2">📦 Minify CSS/JS/HTML</h4>
                <p class="text-sm text-foreground">Remove unused bytes from your code</p>
              </div>
              
              <div class="border-l-4 border-primary pl-6 bg-muted p-4 rounded-r-lg">
                <h4 class="font-semibold text-primary mb-2">💾 Enable Browser Caching</h4>
                <p class="text-sm text-foreground">Speed up repeat visits for returning users</p>
              </div>
              
              <div class="border-l-4 border-accent pl-6 bg-muted p-4 rounded-r-lg">
                <h4 class="font-semibold text-accent mb-2">⏳ Use Lazy Loading</h4>
                <p class="text-sm text-foreground">Load only what the user needs immediately</p>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 p-6 rounded-xl border border-primary/20">
            <h2 class="text-3xl font-bold text-foreground mb-4">Final Thoughts</h2>
            <p class="text-foreground leading-relaxed mb-4">
              Website speed is a critical SEO factor that directly impacts your traffic, engagement, and conversions. 
              By optimizing performance, you satisfy search algorithms and create a superior experience for your audience.
            </p>
            <p class="text-foreground leading-relaxed">
              Start with quick wins like image optimization and caching, then move to more advanced techniques. 
              Every millisecond counts in today's competitive digital landscape.
            </p>
          </div>
  
          <div class="border-t border-muted pt-6 mt-8">
            <p class="text-sm text-muted-foreground text-center">
              Need help improving your website speed? 
              <a href="#contact" class="text-primary font-semibold hover:underline ml-1">Get a free performance audit</a>
            </p>
          </div>
        </section>
      </article>
    `,
    date: "2024-01-15",
    author: "Sarat Chandra Singh",
    image: "/images/blogs/seo.jpg",
  },
  {
    id: "2",
    title: "Top 5 Web Development Trends in 2025",
    excerpt:
      "Discover the cutting-edge technologies and methodologies that are revolutionizing web development and shaping the digital landscape of tomorrow.",
    content: `
      <article class="prose prose-lg dark:prose-invert max-w-none">
        <div class="mb-8">
          <p class="text-sm text-muted-foreground">
            By <span class="font-semibold text-primary">Naresh</span> • 
            <time datetime="2024-01-10" class="ml-1">January 10, 2024</time>
          </p>
        </div>
  
        <p class="text-lg text-muted-foreground leading-relaxed mb-8">
          Discover the cutting-edge technologies and methodologies that are revolutionizing web development 
          and shaping the digital landscape of tomorrow.
        </p>
  
        <hr class="my-8 border-muted" />
  
        <section class="space-y-8">
          <div class="bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 p-6 rounded-xl border border-primary/20">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-primary">1</span>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-foreground mb-3">🤖 AI-Driven Development</h2>
                <p class="text-foreground leading-relaxed mb-4">
                  AI is integrated into every stage of web development — from code generation to automated testing 
                  and UX personalization. Expect faster development cycles and smarter apps.
                </p>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div class="bg-background p-3 rounded-lg">
                    <p class="text-sm font-semibold text-primary mb-1">Code Generation</p>
                    <p class="text-xs text-muted-foreground">AI assistants write boilerplate code</p>
                  </div>
                  <div class="bg-background p-3 rounded-lg">
                    <p class="text-sm font-semibold text-primary mb-1">Smart Testing</p>
                    <p class="text-xs text-muted-foreground">Automated bug detection & fixes</p>
                  </div>
                  <div class="bg-background p-3 rounded-lg">
                    <p class="text-sm font-semibold text-primary mb-1">Personalization</p>
                    <p class="text-xs text-muted-foreground">Dynamic UX based on user behavior</p>
                  </div>
                  <div class="bg-background p-3 rounded-lg">
                    <p class="text-sm font-semibold text-primary mb-1">Performance</p>
                    <p class="text-xs text-muted-foreground">AI-powered optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-accent/10 to-secondary/10 dark:from-accent/20 dark:to-secondary/20 p-6 rounded-xl border border-accent/20">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-accent">2</span>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-foreground mb-3">⚡ WebAssembly (Wasm) Adoption</h2>
                <p class="text-foreground leading-relaxed mb-4">
                  WebAssembly offers near-native performance for web apps, making it ideal for compute-heavy 
                  experiences like video editing, games, and complex visualizations.
                </p>
                <ul class="space-y-2 ml-6 list-disc marker:text-accent">
                  <li class="text-foreground">Run C++, Rust, and Go code in browsers</li>
                  <li class="text-foreground">10-20x faster than JavaScript for heavy tasks</li>
                  <li class="text-foreground">Perfect for gaming, CAD tools, and video processing</li>
                  <li class="text-foreground">Growing ecosystem and tooling support</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 p-6 rounded-xl border border-secondary/20">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-secondary">3</span>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-foreground mb-3">🚀 No-Code & Low-Code Platforms</h2>
                <p class="text-foreground leading-relaxed mb-4">
                  No-code and low-code tools accelerate delivery for non-technical teams and help developers 
                  build MVPs faster.
                </p>
                <div class="bg-muted p-4 rounded-lg space-y-3">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">✅</span>
                    <p class="text-sm text-foreground">Faster time-to-market for simple applications</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">✅</span>
                    <p class="text-sm text-foreground">Empowers non-developers to build solutions</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">✅</span>
                    <p class="text-sm text-foreground">Reduces development costs significantly</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">✅</span>
                    <p class="text-sm text-foreground">Great for prototyping and validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-6 rounded-xl border border-primary/20">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-primary">4</span>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-foreground mb-3">📱 Progressive Web Apps (PWA)</h2>
                <p class="text-foreground leading-relaxed mb-4">
                  PWAs deliver app-like experiences in the browser, work offline, and tend to have higher 
                  engagement than traditional websites.
                </p>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="border-l-4 border-primary pl-4">
                    <h4 class="font-semibold text-primary mb-2">Key Benefits</h4>
                    <ul class="space-y-1 text-sm text-foreground">
                      <li>• Install on home screen</li>
                      <li>• Works offline</li>
                      <li>• Push notifications</li>
                      <li>• Fast loading times</li>
                    </ul>
                  </div>
                  <div class="border-l-4 border-accent pl-4">
                    <h4 class="font-semibold text-accent mb-2">Business Impact</h4>
                    <ul class="space-y-1 text-sm text-foreground">
                      <li>• Higher conversion rates</li>
                      <li>• Better engagement</li>
                      <li>• Lower development costs</li>
                      <li>• Cross-platform reach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 p-6 rounded-xl border border-accent/20">
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-accent">5</span>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-foreground mb-3">🧩 Micro-Frontends Architecture</h2>
                <p class="text-foreground leading-relaxed mb-4">
                  Breaking the frontend into smaller, independently deployable pieces improves team velocity 
                  and scalability.
                </p>
                <div class="bg-background p-5 rounded-lg">
                  <h4 class="font-semibold text-foreground mb-3">Why Micro-Frontends?</h4>
                  <div class="space-y-3">
                    <div class="flex items-start gap-3">
                      <span class="text-xl">🎯</span>
                      <div>
                        <p class="font-medium text-foreground">Team Independence</p>
                        <p class="text-sm text-muted-foreground">Teams work on separate modules without conflicts</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-xl">🔄</span>
                      <div>
                        <p class="font-medium text-foreground">Faster Deployments</p>
                        <p class="text-sm text-muted-foreground">Deploy individual features independently</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-xl">📈</span>
                      <div>
                        <p class="font-medium text-foreground">Better Scalability</p>
                        <p class="text-sm text-muted-foreground">Scale teams and features as needed</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-xl">🛠️</span>
                      <div>
                        <p class="font-medium text-foreground">Technology Flexibility</p>
                        <p class="text-sm text-muted-foreground">Use different frameworks for different modules</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-white">
            <h2 class="text-3xl font-bold mb-4">Final Thoughts</h2>
            <p class="leading-relaxed mb-4">
              By embracing performance-first technologies, AI-powered workflows, and modular architectures, 
              teams can deliver robust digital products that scale well into 2025 and beyond.
            </p>
            <p class="leading-relaxed">
              The key is not to adopt everything at once, but to strategically choose technologies that 
              align with your team's goals and user needs.
            </p>
          </div>
  
          <div class="border-t border-muted pt-6 mt-8">
            <p class="text-sm text-muted-foreground text-center">
              Ready to modernize your web development stack? 
              <a href="#contact" class="text-primary font-semibold hover:underline ml-1">Let's build the future together</a>
            </p>
          </div>
        </section>
      </article>
    `,
    date: "2024-01-10",
    author: "Naresh",
    image: "/images/blogs/web-development.png",
  },
  {
    id: "3",
    title: "The Complete Guide to Web Vitals: Benefits for Your Business",
    excerpt:
      "Discover how Google's Core Web Vitals can transform your website's performance, boost SEO rankings, and drive significant business growth through improved user experience.",
    content: `
      <article class="prose prose-lg dark:prose-invert max-w-none">
        <div class="mb-8">
          <p class="text-sm text-muted-foreground">
            By <span class="font-semibold text-primary">Naresh</span> • 
            <time datetime="2024-01-05" class="ml-1">January 05, 2024</time>
          </p>
        </div>
  
        <p class="text-lg text-muted-foreground leading-relaxed mb-8">
          Discover how Google's Core Web Vitals can transform your website's performance, boost SEO rankings, and drive significant business growth through improved user experience.
        </p>
  
        <hr class="my-8 border-muted" />
  
        <section class="space-y-6">
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-4">What Are Core Web Vitals?</h2>
            <p class="text-foreground leading-relaxed mb-4">
              Core Web Vitals are Google's set of performance metrics that measure how users experience a webpage. The three main metrics are:
            </p>
  
            <ul class="space-y-3 ml-6 list-disc marker:text-primary">
              <li class="text-foreground">
                <strong class="font-semibold text-primary">Largest Contentful Paint (LCP):</strong> 
                <span class="ml-2">Measures loading performance. <em class="text-muted-foreground">Good: &lt; 2.5s</em></span>
              </li>
              <li class="text-foreground">
                <strong class="font-semibold text-primary">INP (Interaction to Next Paint):</strong> 
                <span class="ml-2">Measures interactivity. <em class="text-muted-foreground">Good: &lt; 200ms</em></span>
              </li>
              <li class="text-foreground">
                <strong class="font-semibold text-primary">Cumulative Layout Shift (CLS):</strong> 
                <span class="ml-2">Measures visual stability. <em class="text-muted-foreground">Good: &lt; 0.1</em></span>
              </li>
            </ul>
          </div>
  
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-4">Why Core Web Vitals Matter</h2>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-muted p-4 rounded-lg">
                <h4 class="font-semibold text-primary mb-2">📈 SEO Rankings</h4>
                <p class="text-sm text-muted-foreground">Google uses Web Vitals as a ranking factor</p>
              </div>
              <div class="bg-muted p-4 rounded-lg">
                <h4 class="font-semibold text-primary mb-2">⚡ Lower Bounce Rate</h4>
                <p class="text-sm text-muted-foreground">Fast sites keep users engaged</p>
              </div>
              <div class="bg-muted p-4 rounded-lg">
                <h4 class="font-semibold text-primary mb-2">💰 Higher Conversions</h4>
                <p class="text-sm text-muted-foreground">Better UX leads to more sales</p>
              </div>
              <div class="bg-muted p-4 rounded-lg">
                <h4 class="font-semibold text-primary mb-2">🌟 Brand Reputation</h4>
                <p class="text-sm text-muted-foreground">Professional experience builds trust</p>
              </div>
            </div>
          </div>
  
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-4">How to Improve Your Web Vitals</h2>
            
            <div class="space-y-6">
              <div class="border-l-4 border-primary pl-6">
                <h3 class="text-2xl font-semibold text-foreground mb-3">Improve LCP (Loading)</h3>
                <ul class="space-y-2 ml-6 list-disc marker:text-primary">
                  <li class="text-foreground">Optimize and compress images (WebP format)</li>
                  <li class="text-foreground">Use fast hosting with CDN</li>
                  <li class="text-foreground">Reduce render-blocking scripts</li>
                  <li class="text-foreground">Implement lazy loading for images</li>
                  <li class="text-foreground">Minify CSS and JavaScript</li>
                </ul>
              </div>
  
              <div class="border-l-4 border-accent pl-6">
                <h3 class="text-2xl font-semibold text-foreground mb-3">Improve INP (Interactivity)</h3>
                <ul class="space-y-2 ml-6 list-disc marker:text-accent">
                  <li class="text-foreground">Minimize JavaScript execution time</li>
                  <li class="text-foreground">Reduce third-party scripts</li>
                  <li class="text-foreground">Use efficient event listeners</li>
                  <li class="text-foreground">Implement code splitting</li>
                  <li class="text-foreground">Use web workers for heavy tasks</li>
                </ul>
              </div>
  
              <div class="border-l-4 border-secondary pl-6">
                <h3 class="text-2xl font-semibold text-foreground mb-3">Improve CLS (Visual Stability)</h3>
                <ul class="space-y-2 ml-6 list-disc marker:text-secondary">
                  <li class="text-foreground">Set dimensions for images and videos</li>
                  <li class="text-foreground">Reserve space for ads and embeds</li>
                  <li class="text-foreground">Avoid inserting content above existing content</li>
                  <li class="text-foreground">Use CSS transforms for animations</li>
                  <li class="text-foreground">Preload critical fonts</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl border border-primary/20">
            <h3 class="text-2xl font-semibold text-primary mb-3">Tools to Measure Web Vitals</h3>
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-background p-4 rounded-lg">
                <h4 class="font-semibold mb-2">🔍 Google PageSpeed Insights</h4>
                <p class="text-sm text-muted-foreground">Comprehensive analysis with suggestions</p>
              </div>
              <div class="bg-background p-4 rounded-lg">
                <h4 class="font-semibold mb-2">🛠️ Chrome DevTools</h4>
                <p class="text-sm text-muted-foreground">Real-time performance monitoring</p>
              </div>
              <div class="bg-background p-4 rounded-lg">
                <h4 class="font-semibold mb-2">📊 Search Console</h4>
                <p class="text-sm text-muted-foreground">Track Core Web Vitals over time</p>
              </div>
              <div class="bg-background p-4 rounded-lg">
                <h4 class="font-semibold mb-2">⚡ Lighthouse</h4>
                <p class="text-sm text-muted-foreground">Automated auditing tool</p>
              </div>
            </div>
          </div>
  
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-4">Real-World Impact</h2>
            <div class="space-y-4">
              <div class="bg-muted p-5 rounded-lg">
                <p class="text-foreground mb-2">
                  <strong class="text-primary">Case Study:</strong> A major e-commerce site improved their LCP from 4.5s to 2.0s
                </p>
                <p class="text-sm text-muted-foreground">
                  Result: <span class="text-green-600 dark:text-green-400 font-semibold">24% increase in conversions</span> and 
                  <span class="text-green-600 dark:text-green-400 font-semibold">18% decrease in bounce rate</span>
                </p>
              </div>
              <div class="bg-muted p-5 rounded-lg">
                <p class="text-foreground mb-2">
                  <strong class="text-primary">Research Finding:</strong> Every 100ms delay in mobile load time
                </p>
                <p class="text-sm text-muted-foreground">
                  Impact: <span class="text-red-600 dark:text-red-400 font-semibold">Can hurt conversion rates by up to 7%</span>
                </p>
              </div>
            </div>
          </div>
  
          <div class="bg-accent/10 dark:bg-accent/20 p-6 rounded-xl border border-accent/20">
            <h2 class="text-3xl font-bold text-accent mb-4">Conclusion</h2>
            <p class="text-foreground leading-relaxed mb-4">
              Core Web Vitals are no longer optional—they're essential for modern web development. By optimizing these metrics, 
              you're not just improving technical scores; you're creating better experiences for your users, which directly translates 
              to business success.
            </p>
            <p class="text-foreground leading-relaxed">
              Start measuring your site's Web Vitals today and implement improvements gradually. Even small optimizations can lead 
              to significant improvements in user satisfaction and business metrics.
            </p>
          </div>
  
          <div class="border-t border-muted pt-6 mt-8">
            <p class="text-sm text-muted-foreground text-center">
              Need help optimizing your website's Web Vitals? 
              <a href="#contact" class="text-primary font-semibold hover:underline ml-1">Contact our team</a> for a free audit.
            </p>
          </div>
        </section>
      </article>
    `,
    date: "2024-01-05",
    author: "Naresh",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
  }
];
