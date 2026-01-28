import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Zap, 
  TrendingUp,
  Download,
  ExternalLink
} from "lucide-react";

export default function Resources() {
  const resourceCategories = [
    {
      title: "Getting Started",
      description: "Everything you need to launch your first affiliate site",
      icon: Zap,
      color: "from-pink-500 to-purple-600",
      resources: [
        {
          title: "Quick Start Guide",
          description: "Set up your first affiliate site in 15 minutes",
          type: "Guide",
          icon: BookOpen
        },
        {
          title: "Video Tutorial Series",
          description: "Step-by-step video walkthroughs",
          type: "Video",
          icon: Video
        },
        {
          title: "Template Library",
          description: "Pre-built templates for different niches",
          type: "Templates",
          icon: FileText
        }
      ]
    },
    {
      title: "Growth & Optimization",
      description: "Advanced strategies to scale your affiliate business",
      icon: TrendingUp,
      color: "from-purple-500 to-blue-600",
      resources: [
        {
          title: "SEO Best Practices",
          description: "Rank higher and get more organic traffic",
          type: "Guide",
          icon: BookOpen
        },
        {
          title: "Conversion Optimization",
          description: "Increase your affiliate commissions",
          type: "Course",
          icon: Video
        },
        {
          title: "Analytics Deep Dive",
          description: "Track and improve your performance",
          type: "Webinar",
          icon: FileText
        }
      ]
    },
    {
      title: "Community & Support",
      description: "Connect with other affiliates and get help",
      icon: Users,
      color: "from-blue-500 to-green-600",
      resources: [
        {
          title: "Community Forum",
          description: "Join thousands of successful affiliates",
          type: "Community",
          icon: Users
        },
        {
          title: "Live Q&A Sessions",
          description: "Weekly sessions with our experts",
          type: "Live",
          icon: Video
        },
        {
          title: "Success Stories",
          description: "Learn from top-performing affiliates",
          type: "Case Study",
          icon: BookOpen
        }
      ]
    }
  ];

  const downloadableResources = [
    {
      title: "Affiliate Marketing Checklist",
      description: "Complete checklist for launching successful campaigns",
      downloads: "2.3k",
      format: "PDF"
    },
    {
      title: "Casino Niche Keywords",
      description: "High-converting keywords for casino affiliates",
      downloads: "1.8k",
      format: "CSV"
    },
    {
      title: "Email Templates Pack",
      description: "Proven email templates for affiliate promotions",
      downloads: "3.1k",
      format: "ZIP"
    },
    {
      title: "Landing Page Examples",
      description: "High-converting landing page designs",
      downloads: "4.2k",
      format: "PSD"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Resources to{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Accelerate Growth
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our comprehensive library of guides, tutorials, and tools designed 
            to help you succeed in affiliate marketing.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-gray-900/50 border border-gray-700 rounded-3xl p-8 backdrop-blur-sm hover:border-gray-600 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>

                <div className="space-y-4">
                  {category.resources.map((resource, resourceIndex) => {
                    const ResourceIcon = resource.icon;
                    return (
                      <div
                        key={resourceIndex}
                        className="flex items-start gap-3 p-4 rounded-xl bg-black/30 hover:bg-black/50 transition-colors cursor-pointer group"
                      >
                        <ResourceIcon className="w-5 h-5 text-gray-400 mt-0.5 group-hover:text-white transition-colors" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-white group-hover:text-pink-400 transition-colors">
                              {resource.title}
                            </h4>
                            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                          </div>
                          <p className="text-sm text-gray-400 mt-1">{resource.description}</p>
                          <span className="text-xs text-purple-400 font-medium">{resource.type}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Downloadable Resources */}
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-gray-700 p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Free Downloads</h3>
            <p className="text-gray-300">
              Get instant access to our most popular resources and templates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadableResources.map((resource, index) => (
              <div
                key={index}
                className="bg-black/30 rounded-2xl p-6 hover:bg-black/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <Download className="w-8 h-8 text-pink-400" />
                  <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">
                    {resource.format}
                  </span>
                </div>
                
                <h4 className="font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {resource.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{resource.downloads} downloads</span>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-4"
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-3xl border border-pink-500/20 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Personalized Help?
            </h3>
            <p className="text-gray-300 mb-6">
              Our expert team is here to help you succeed. Book a free consultation 
              and get personalized advice for your affiliate business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800/50 bg-transparent rounded-full px-8"
              >
                Browse All Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
