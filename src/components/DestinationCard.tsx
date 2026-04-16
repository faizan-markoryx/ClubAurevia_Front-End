
const DestinationCard = ({ 
  imageSrc = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // Default image
  text = "Solo Travels", 
  width = "400px", 
  height = "400px" 
}) => {
  return (
    <div className="flex justify-center items-center bg-gray-100 px-2">
      {/* Main Container with dynamic props */}
      <div 
        className="relative overflow-hidden transition-transform duration-300"
        style={{ 
          width: width, 
          height: height,
          maxWidth: '100%', // Mobile responsiveness
        }}
      >
        {/* Background Image */}
        <img 
          src={imageSrc} 
          alt={text} 
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay: 
            Figma ke 180 deg rotation ke hisab se black (#000000) niche hai 
            aur transparent (#FFFFFF 0%) upar ja raha hai.
        */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          style={{ height: '100%' }}
        />

        {/* Text Styling */}
        <div className="absolute bottom-6 left-8">
          <h2 className="text-secondary text-[18px] font-thin tracking-wide">
            {text}
          </h2>
        </div>

        <div 
          className="absolute bottom-0 left-0 w-full h-[120px] bg-white opacity-10 blur-md"
          style={{ transform: 'translateY(10px)' }}
        />
      </div>
    </div>
  );
};

export default DestinationCard;