import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
// mx-auto md:px-16 lg:px-24 lg:py-32 md:py-24 px-6
export default function ContactSection() {
  return (
    <div>
      <main className="md:block hidden mx-auto h-fit bg-skills-grey  lg:mt-32 md:mt-24">
        <div className="flex flex-col items-center w-full">
          {/* Top Border */}
          <div className="border-t-3 border-primary-yellow w-full"></div>
          <div className="flex items-center justify-center w-full py-8">
            <h1 className="px-4 ">Contact Me</h1>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center gap-8 my-8">
            <div className="flex justify-center gap-8">
              <ContactItem
                icon={<FaEnvelope />}
                text="aghoghoemerson7@email.com"
              />
              <ContactItem icon={<FaPhoneAlt />} text="(234) 810-581-9021" />
            </div>
            <div className="flex justify-center">
              <ContactItem
                icon={<FaMapMarkerAlt />}
                text="Benin City, Nigeria"
              />
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center justify-center w-full py-8">
            <div className="flex justify-center gap-6 text-primary-yellow px-4 z-10">
                
                  <SocialIcon
                  target="_blank"
                rel="noopener noreferrer"
               href="https://facebook.com/EmersonAghogho"
                icon={<FaFacebook />}
              />
              
              <SocialIcon
                href="https://x.com/emerrson7"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaTwitter />}
              />
              <SocialIcon
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaLinkedin />}
              />
              <SocialIcon
                href="https://wa.me/2348105819021"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaWhatsapp />}
              />
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t-3 border-primary-yellow w-full"></div>
      </main>

      <main className="block md:hidden mx-auto h-fit bg-skills-grey mt-10">
        <div className="flex flex-col items-center w-full">
          {/* Top Border */}
          <div className="border-t-3 border-primary-yellow w-full"></div>
          <div className="flex items-center justify-center w-full py-4">
            <span className="font-bold justify-center w-fit mx-auto flex text-4xl h1 border-b-3 border-b-primary-yellow">
              Contact Me
            </span>
          </div>

          {/* Contact Information */}
          <div className="flex  flex-col gap-8 my-4">
            <ContactItem
              icon={<FaEnvelope />}
              text="aghoghoemerson7@email.com"
            />
            <ContactItem icon={<FaPhoneAlt />} text="(234) 810-581-9021" />
            <ContactItem icon={<FaMapMarkerAlt />} text="Benin City, Nigeria" />
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center justify-center w-full py-4">
          <div className="flex justify-center gap-4 text-primary-yellow px-4 z-10">
          <SocialIcon
                  target="_blank"
                rel="noopener noreferrer"
               href="https://facebook.com/EmersonAghogho"
                icon={<FaFacebook />}
              />
              
              <SocialIcon
                href="https://x.com/emerrson7"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaTwitter />}
              />
              <SocialIcon
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaLinkedin />}
              />
              <SocialIcon
                href="https://wa.me/2348105819021"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaWhatsapp />}
              />
          </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t-3 border-primary-yellow w-full"></div>
      </main>
    </div>
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

function SocialIcon({ href, icon, rel, target }: { href: string; icon: React.ReactNode; rel:string; target:string }) {
  return (
    <a
      href={href}
      rel={rel}
      target={target}
      className="text-2xl hover:text-white transition duration-300"
    >
      {icon}
    </a>
  );
}
