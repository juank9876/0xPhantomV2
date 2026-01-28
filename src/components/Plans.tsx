import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Enterprise",
      price: "$800",
      period: "/month",
      description: "Ideal for growing affiliates who need more power",
      features: [
        "Your affiliate site",
        "Premium templates",
        "Priority support",
        "Advanced analytics",
        "A/B testing tools",
        "Custom domain support",
        "SEO optimization tools",
        "Social media integration",
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
    {
      name: "Managed",
      price: "$1499",
      period: "/month",
      description: "For serious affiliates and agencies",
      features: [
        "Your affiliate site",
        "White-label solution",
        "24/7 phone support",
        "Custom integrations",
        "Advanced automation",
        "Team collaboration",
        "API access",
        "Dedicated account manager",
        "Custom training sessions",
      ],
      popular: true,
      buttonText: "Contact Sales",
      buttonVariant: "default" as const,
    },
  ];

  return (
    <section
      id="plans"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scale your affiliate business with our flexible pricing options.
            Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-2 border-pink-500/50"
                  : "bg-gray-900/50 border border-gray-700"
              } backdrop-blur-sm transition-all duration-300 hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-full font-medium ${
                  plan.popular
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                    : plan.buttonVariant === "outline"
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800/50 bg-transparent"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
                variant={plan.popular ? "default" : plan.buttonVariant}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
