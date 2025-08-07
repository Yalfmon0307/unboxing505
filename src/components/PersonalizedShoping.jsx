import { useState } from "react";
// ...existing code...
import { ShoppingCart, MessageCircle, MapPin } from "lucide-react";
// ...existing code...

const PersonalizedShopping = () => {
  const toast = ({ title, description }) => {
    alert(`${title}\n${description || ''}`);
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productLink: "",
    productDescription: "",
    budget: "",
    notes: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    const message = `🛍️ *SOLICITUD DE COMPRA PERSONALIZADA - UNBOXING 505*

👤 *Datos del Cliente:*
• Nombre: ${formData.name}
• Teléfono: ${formData.phone}
• Email: ${formData.email}

🛒 *Detalles del Producto:*
• Link del producto: ${formData.productLink}
• Descripción: ${formData.productDescription}
• Presupuesto: $${formData.budget}

📝 *Notas adicionales:*
${formData.notes || "Ninguna"}

🏢 *Ubicación de compra:* Los Ángeles, California

¡Gracias por confiar en nuestro servicio de compra personalizada!`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.productLink) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa los campos obligatorios",
        variant: "destructive"
      });
      return;
    }

    const whatsappMessage = generateWhatsAppMessage();
    const whatsappNumber = "50588888888"; // Replace with actual WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    toast({
      title: "¡Solicitud enviada!",
      description: "Te contactaremos pronto por WhatsApp",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      productLink: "",
      productDescription: "",
      budget: "",
      notes: ""
    });
  };

  return (
    <section className="py-20 bg-[#10121a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#ffd600]">
            Compra Personalizada
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#ffd600]" />
            <span className="text-xl text-gray-300">Los Ángeles, California</span>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ¿Quieres que pidamos tu producto? Nos encargamos de comprarlo y enviártelo directamente
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-[#ffd600] bg-[#181a23] shadow-xl rounded-xl">
            <div className="text-center p-6 pb-0">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#ffd600] flex items-center justify-center shadow-lg">
                  <ShoppingCart className="w-8 h-8 text-[#10121a]" />
                </div>
              </div>
              <div className="text-2xl font-bold mb-1 text-[#ffd600]">Solicitud de Compra</div>
              <div className="text-gray-300 mb-2">Completa el formulario y nos contactaremos contigo vía WhatsApp</div>
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-[#ffd600]">Nombre completo *</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      required
                      className="bg-[#10121a] border border-[#ffd600] rounded-lg px-4 py-2 w-full text-gray-200 placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-[#ffd600]">Teléfono *</label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+505 8888-8888"
                      required
                      className="bg-[#10121a] border border-[#ffd600] rounded-lg px-4 py-2 w-full text-gray-200 placeholder-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[#ffd600]">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="bg-[#10121a] border border-[#ffd600] rounded-lg px-4 py-2 w-full text-gray-200 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="productLink" className="block text-sm font-medium text-[#ffd600]">Link del producto *</label>
                  <input
                    id="productLink"
                    name="productLink"
                    value={formData.productLink}
                    onChange={handleInputChange}
                    placeholder="https://amazon.com/producto..."
                    required
                    className="bg-[#10121a] border border-[#ffd600] rounded-lg px-4 py-2 w-full text-gray-200 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="productDescription" className="block text-sm font-medium text-[#ffd600]">Descripción del producto</label>
                  <textarea
                    id="productDescription"
                    name="productDescription"
                    value={formData.productDescription}
                    onChange={handleInputChange}
                    placeholder="Describe el producto que quieres que compremos..."
                    className="bg-[#10121a] border border-[#ffd600] rounded-lg px-4 py-2 w-full min-h-[100px] text-gray-200 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-sm font-medium text-[#ffd600]">Presupuesto (USD)</label>
                  <input
                    id="budget"
                    name="budget"
                    type="number"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="100"
                    className="bg-[#10121a] border border-[#ffd600] rounded-lg px-4 py-2 w-full text-gray-200 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-[#ffd600]">Notas adicionales</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Cualquier información adicional..."
                    className="bg-[#10121a] border border-[#ffd600] rounded-lg px-4 py-2 w-full text-gray-200 placeholder-gray-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#ffd600] hover:bg-yellow-500 text-[#10121a] shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg px-4 py-3 flex items-center justify-center text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedShopping;