import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-dark-grey py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Contact Me</h2>

      <div className="flex flex-col items-center md:flex-row justify-center gap-8 mb-12">
        <ContactItem icon={<FaEnvelope />} text="aghoghoemerson7@email.com" />
        <ContactItem icon={<FaPhoneAlt />} text="(234) 810-581-9021" />
        <ContactItem icon={<FaMapMarkerAlt />} text="Benin City, Nigeria" />
      </div>

      <div className="flex justify-center gap-6 text-primary-yellow">
        <SocialIcon href="#" icon={<FaFacebook />} />
        <SocialIcon href="#" icon={<FaTwitter />} />
        <SocialIcon href="#" icon={<FaLinkedin />} />
        <SocialIcon href="#" icon={<FaWhatsapp />} />
      </div>
    </section>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-4 bg-dark-primary-grey px-6 py-4 rounded-lg shadow-md">
      <div className="text-primary-yellow text-2xl">{icon}</div>
      <div className="text-primary-yellow text-lg">{text}</div>
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} className="text-2xl hover:text-white transition duration-300">
      {icon}
    </a>
  );
}
