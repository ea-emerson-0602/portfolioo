import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


export default function ContactSection() {
  return (
<section className=" pt-28   ">
<div className=' border-y-3 bg-skills-grey border-y-primary-yellow '>
  <div className=" flex justify-center">
    <h1 className="font-bold text-center bg-dark-grey p-4">
      Contact Me
    </h1>
  </div>

  <div className="flex flex-col items-center gap-8 mb-12 mt-8">
    <div className="flex justify-center gap-8">
      <ContactItem icon={<FaEnvelope />} text="aghoghoemerson7@email.com" />
      <ContactItem icon={<FaPhoneAlt />} text="(234) 810-581-9021" />
    </div>
    <div className="flex justify-center">
      <ContactItem icon={<FaMapMarkerAlt />} text="Benin City, Nigeria" />
    </div>
  </div>
  
  <div className="justify-center gap-6 text-primary-yellow my-12 bg-dark-grey flex px-4">
    <SocialIcon href="#" icon={<FaFacebook />} />
    <SocialIcon href="#" icon={<FaTwitter />} />
    <SocialIcon href="#" icon={<FaLinkedin />} />
    <SocialIcon href="#" icon={<FaWhatsapp />} />
  </div>
</div>

</section>


  );
}


function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex  items-center space-x-4 bg-dark-primary-grey px-6 py-4 rounded-lg shadow-md">
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
