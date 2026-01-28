import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Shield,
  Zap,
  BarChart3,
  Headphones,
  Globe,
  Lock,
  ArrowRight,
  CheckCircle,
  Target,
  Building,
  Network,
} from "lucide-react";

export default function ForBusiness() {
  const enterpriseFeatures = [
    {
      icon: Building2,
      title: "White-Label Solution",
      description:
        "Complete branding customization with your company's identity",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Advanced user roles and permissions for your entire team",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliance, SSO, and advanced security features",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Custom reporting and business intelligence dashboards",
    },
    {
      icon: Globe,
      title: "Multi-Region Support",
      description: "Deploy across multiple regions with local compliance",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "24/7 priority support with dedicated account manager",
    },
  ];

  const useCases = [
    {
      title: "Digital Marketing Agencies",
      description:
        "Scale your affiliate marketing services for multiple clients with our white-label platform.",
      benefits: [
        "Manage multiple client accounts",
        "Custom branding for each client",
        "Automated reporting and analytics",
        "Team collaboration tools",
      ],
      icon: Target,
    },
    {
      title: "Large Enterprises",
      description:
        "Enterprise-grade affiliate marketing solution with advanced security and compliance.",
      benefits: [
        "Enterprise-level security",
        "Custom integrations",
        "Compliance management",
        "Dedicated infrastructure",
      ],
      icon: Building,
    },
    {
      title: "Affiliate Networks",
      description:
        "Power your entire affiliate network with our scalable infrastructure.",
      benefits: [
        "Unlimited affiliate sites",
        "Network management tools",
        "Revenue sharing features",
        "API access for integrations",
      ],
      icon: Network,
    },
  ];

  const stats = [
    { number: "200+", label: "Websites Created" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support Available" },
    { number: "10M+", label: "Monthly Visitors" },
  ];

  return (
    <section
      id="for-business"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enterprise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scale your affiliate marketing operations with enterprise-grade
            features, security, and dedicated support designed for businesses.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Enterprise Features
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to run affiliate marketing at scale with
              enterprise-grade reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-gray-600 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Perfect for Every Business
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Whether you're an agency, enterprise, or network, we have the
              right solution for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700 rounded-3xl p-8 backdrop-blur-sm hover:border-gray-600 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {useCase.title}
                  </h4>
                <p className="text-gray-300 mb-6">{useCase.description}</p>

                <ul className="space-y-3 mb-6">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800/50 bg-transparent rounded-full group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
            })}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700 rounded-3xl p-8 md:p-12 backdrop-blur-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Enterprise Security & Compliance
              </h3>
              <p className="text-gray-300 mb-6">
                Built with security-first architecture and compliance frameworks
                that meet the highest industry standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">SOC 2 Type II Certified</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">GDPR & CCPA Compliant</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">End-to-end Encryption</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Single Sign-On (SSO)</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-black/30 rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center">
                    <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-sm text-green-400 font-medium">
                      Security Score
                    </div>
                    <div className="text-2xl font-bold text-white">A+</div>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 text-center">
                    <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm text-blue-400 font-medium">
                      Uptime
                    </div>
                    <div className="text-2xl font-bold text-white">99.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-3xl border border-pink-500/20 p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Scale Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of enterprises who trust us with their affiliate
              marketing operations. Get a custom demo and see how we can help
              you scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 py-3 text-lg">
                Schedule Demo
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800/50 bg-transparent rounded-full px-8 py-3 text-lg"
              >
                Contact Sales
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Custom pricing available. No setup fees for annual contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
