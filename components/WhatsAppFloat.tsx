import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/254708412668?text=Hello%20Links%20Valuers%2C%20I%20would%20like%20to%20book%20a%20valuation."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="wa-tip">Chat with us on WhatsApp</span>
      <WhatsAppIcon />
    </a>
  );
}
