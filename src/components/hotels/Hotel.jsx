import styled from 'styled-components';

// Estilos para la sección principal
const Wrapper = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

// Sección de Servicios
const ServicesSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const ServiceItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 250px;
  margin: 15px;
  padding: 20px;
  text-align: center;
`;

const ServiceIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Sección de Contacto
const ContactSection = styled.section`
  padding: 50px 20px;
  background-color: #1868b8;
  color: white;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
`;

const TextArea = styled.textarea`
  width: 300px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #1868b8;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

// Imagen principal del hotel
const HeroSection = styled.section`
  background-image: url('https://via.placeholder.com/1500x600'); /* Imagen de fondo */
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 20px;
  max-width: 600px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;

// Componente principal
const Hotel = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <div>
          <HeroTitle>Bienvenidos al Hotel Paraíso</HeroTitle>
          <HeroSubtitle>Una experiencia única en el corazón de la ciudad, con todas las comodidades que puedas imaginar.</HeroSubtitle>
        </div>
      </HeroSection>

      {/* Servicios */}
      <ServicesSection>
        <h2>Nuestros Servicios</h2>
        <ServiceList>
          <ServiceItem>
            <ServiceIcon>🏊‍♂️</ServiceIcon>
            <ServiceTitle>Piscina</ServiceTitle>
            <ServiceDescription>Relájate en nuestra piscina con vista al mar.</ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>🍽️</ServiceIcon>
            <ServiceTitle>Restaurante Gourmet</ServiceTitle>
            <ServiceDescription>Disfruta de platos exclusivos preparados por chefs de clase mundial.</ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>🏋️</ServiceIcon>
            <ServiceTitle>Gimnasio</ServiceTitle>
            <ServiceDescription>Mantén tu rutina de ejercicio con nuestro gimnasio equipado.</ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>🛏️</ServiceIcon>
            <ServiceTitle>Habitaciones de Lujo</ServiceTitle>
            <ServiceDescription>Despierta con vistas impresionantes en nuestras elegantes habitaciones.</ServiceDescription>
          </ServiceItem>
        </ServiceList>
      </ServicesSection>

      {/* Contacto */}
      <ContactSection>
        <h2>Contacto</h2>
        <p>¿Tienes alguna pregunta? ¡Envíanos un mensaje!</p>
        <ContactForm>
          <Input type="text" placeholder="Nombre" />
          <Input type="email" placeholder="Email" />
          <TextArea placeholder="Mensaje" />
          <SubmitButton type="submit">Enviar</SubmitButton>
        </ContactForm>
      </ContactSection>
    </Wrapper>
  );
}

export default Hotel;
