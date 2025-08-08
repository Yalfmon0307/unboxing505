// ...existing code...
import { Ship, Plane, Clock, Package } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      type: "Marítimo",
      icon: Ship,
      duration: "25-35 días",
      price: "$2.50",
      unit: "por libra",
      features: [
        "Hasta 50 lbs por caja",
        "Seguro incluido",
        "Tracking completo",
        "Entrega a domicilio"
      ],
      badge: "Económico",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      type: "Aéreo",
      icon: Plane,
      duration: "5-7 días",
      price: "$7.00",
      unit: "por libra",
      features: [
        "Hasta 50 lbs por caja",
        "Seguro premium",
        "Tracking en tiempo real",
        "Entrega express"
      ],
      badge: "Rápido",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-20 bg-[#10121a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#dfae47]">
            Nuestras Tarifas
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Elige el servicio que mejor se adapte a tus necesidades y presupuesto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div key={index} className="relative overflow-hidden border-2 border-[#dfae47] bg-[#181a23] hover:shadow-xl transition-all duration-300 group rounded-xl">
                <div className={`absolute top-0 left-0 w-full h-1 ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-[#dfae47]'}`}></div>
                <div className="text-center pb-4 pt-6">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-[#dfae47]'} flex items-center justify-center shadow-lg`}>
                      <IconComponent className={`w-8 h-8 ${index === 0 ? 'text-white' : 'text-[#10121a]'}`} />
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <span className="border border-[#dfae47] text-[#dfae47] px-3 py-1 rounded-full text-sm font-semibold bg-[#10121a]">{plan.badge}</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    Envío {plan.type}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    {plan.duration}
                  </div>
                </div>
                <div className="text-center pb-6">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#dfae47]">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.unit}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-3 text-gray-300">
                        <Package className="w-4 h-4 text-[#ffe066] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            * Precios sujetos a cambios según dimensiones y destino final
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;