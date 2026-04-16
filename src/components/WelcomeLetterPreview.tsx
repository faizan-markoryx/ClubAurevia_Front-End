import { PDFViewer } from "@react-pdf/renderer";
import WelcomeLetterPDF from "./WelcomeLetterPDF";

const WelcomeLetterPreview = ({ user, membership, onClose }:any) => {

  return (

    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">

      <div className="w-[90%] h-[90%] bg-white rounded-lg overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b">

          <h2 className="text-lg font-semibold">
            Welcome Letter Preview
          </h2>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black"
          >
            ✕
          </button>

        </div>

        {/* PDF Viewer */}
        <div className="h-full">

          <PDFViewer width="100%" height="100%">
            <WelcomeLetterPDF
              user={user}
              membership={membership}
            />
          </PDFViewer>

        </div>

      </div>

    </div>

  );

};

export default WelcomeLetterPreview;