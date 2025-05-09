import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mensegem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/mensagem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Mensagem enviada com sucesso!");
        setFormData({ name: '', email: '', mensegem: '' });
      } else {
        alert("Erro ao enviar: " + data.error);
      }
    } catch (err) {
      alert("Erro na requisição");
      console.error("Erro:", err);
    }
  };

  return (
    <div className='contact-container'>
      <h2>ENTRE EM CONTATO COM A NF VEÍCULOS</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <input
          type="text"
          name='name'
          placeholder='Seu nome'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensegem"
          placeholder="Digite sua mensagem"
          value={formData.mensegem}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <a href="https://wa.me/message/7NSFUX4IFYWRB1" className="whatsapp-btn">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ContactForm;
