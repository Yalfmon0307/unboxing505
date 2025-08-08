// ...existing code...
import { Copy, Container, MapPin, Clock } from "lucide-react";
// ...existing code...

const ContainerInfo = () => {
  const toast = ({ title, description }) => {
    alert(`${title}\n${description || ''}`);
  };

  const containerData = {
    address: "1234 Warehouse Blvd, Los Angeles, CA 90201",
    company: "UNBOXING 505 USA",
    phone: "+1 (323) 555-0123",
    hours: "Lunes a Viernes: 9:00 AM - 6:00 PM PST",
    instructions: [
      "Usar el nombre completo del destinatario final",
      "Incluir número de teléfono en el paquete",
      "Indicar 'UNBOXING 505' en la dirección",
      "Notificar recepción al +1 (323) 555-0123"
    ]
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado al portapapeles",
      description: "La información ha sido copiada",
    });
  };

  return (
    <section className="py-20 bg-[#10121a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#dfae47]">
            Datos del Contenedor
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Usa esta información para enviar directamente a nuestro contenedor en Estados Unidos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-[#dfae47] bg-[#181a23] shadow-xl rounded-xl">
            <div className="text-center p-6 pb-0">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center shadow-lg">
                  <Container className="w-8 h-8 text-[#10121a]" />
                </div>
              </div>
              <div className="text-2xl font-bold mb-1 text-[#dfae47]">Información de Envío Directo</div>
              <div className="text-gray-300 mb-2">Copia estos datos para usar en tus compras online</div>
            </div>
            <div className="space-y-6 p-6 pt-0">
              {/* Address Section */}
              <div className="bg-[#10121a] rounded-lg p-6 border border-[#dfae47]">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#FFD700]" />
                  <h3 className="text-lg font-semibold text-[#dfae47]">Dirección de Envío</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#dfae47] font-medium">Empresa:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">{containerData.company}</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(containerData.company)}
                        className="h-8 w-8 p-0 flex items-center justify-center bg-transparent hover:bg-yellow-500/10 rounded"
                        title="Copiar"
                      >
                        <Copy className="w-4 h-4 text-[#FFD700]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#dfae47] font-medium">Dirección:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 text-right">{containerData.address}</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(containerData.address)}
                        className="h-8 w-8 p-0 flex items-center justify-center bg-transparent hover:bg-yellow-500/10 rounded"
                        title="Copiar"
                      >
                        <Copy className="w-4 h-4 text-[#FFD700]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#dfae47] font-medium">Teléfono:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">{containerData.phone}</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(containerData.phone)}
                        className="h-8 w-8 p-0 flex items-center justify-center bg-transparent hover:bg-yellow-500/10 rounded"
                        title="Copiar"
                      >
                        <Copy className="w-4 h-4 text-[#FFD700]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hours Section */}
              <div className="bg-[#10121a] rounded-lg p-6 border border-[#dfae47]">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#FFD700]" />
                  <h3 className="text-lg font-semibold text-[#dfae47]">Horarios de Recepción</h3>
                </div>
                <p className="text-gray-300">{containerData.hours}</p>
              </div>
              {/* Instructions Section */}
              <div className="bg-[#10121a] rounded-lg p-6 border border-[#dfae47]">
                <h3 className="text-lg font-semibold text-[#dfae47] mb-4">Instrucciones Importantes</h3>
                <ul className="space-y-3">
                  {containerData.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#dfae47] text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-300">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Copy All Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    const fullInfo = `UNBOXING 505 - Datos del Contenedor\n\nEmpresa: ${containerData.company}\nDirección: ${containerData.address}\nTeléfono: ${containerData.phone}\nHorarios: ${containerData.hours}\n\nInstrucciones:\n${containerData.instructions.map((inst, i) => `${i + 1}. ${inst}`).join('\n')}`;
                    copyToClipboard(fullInfo);
                  }}
                  className="bg-[#dfae47] hover:bg-yellow-400 text-[#10121a] shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg px-6 py-3 text-lg font-semibold flex items-center justify-center"
                >
                  <Copy className="w-5 h-5 mr-2" />
                  Copiar Toda la Información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerInfo;