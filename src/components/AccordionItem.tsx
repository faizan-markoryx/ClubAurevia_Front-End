import { useRef } from "react";

const AccordionItem = ({ title = "", content = "", isOpen = false, onClick = () => {} }) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-300">
      {/* Header */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="text-[16px] sm:text-xl text-primary">
          {title}
        </span>

        <span
          className={`text-primary text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 text-sm sm:text-base pr-6">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;