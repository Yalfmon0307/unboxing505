
import { Package, Truck, Plane } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#10121a] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ffd600] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#ffd600] rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-[#ffd600] rounded-lg flex items-center justify-center shadow-xl shadow-yellow-400/30 transform rotate-3">
                <Package className="w-12 h-12 text-[#10121a]" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#ffd600]">
            UNBOXING 505
          </h1>
          <div className="w-32 h-1 bg-[#ffd600] mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Agencia de Envíos
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Conectamos Estados Unidos con tu hogar. Envíos marítimos y aéreos confiables, 
            compras personalizadas y servicio premium para todos tus paquetes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ffd600] hover:bg-yellow-500 text-[#10121a] shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 rounded-lg flex items-center justify-center font-semibold">
              <Truck className="w-5 h-5 mr-2" />
              Cotizar Envío
            </button>
            <button className="border-2 border-[#ffd600] text-[#ffd600] hover:bg-[#ffd600] hover:text-[#10121a] shadow-lg transition-all duration-300 px-6 py-3 rounded-lg flex items-center justify-center font-semibold">
              <Plane className="w-5 h-5 mr-2" />
              Compra Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;