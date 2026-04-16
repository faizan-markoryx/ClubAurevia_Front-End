import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "91"; // country code ke sath number
  const message = "Hello! I would like to know more about your services."; // default message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-10 right-10 md:right-14 lg:right-24 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110 z-50"
    >
      <FaWhatsapp size={40} />
    </div>
  );
};

export default WhatsappButton;
