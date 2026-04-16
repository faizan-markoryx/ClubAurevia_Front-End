// import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import WelcomeLetterPDF from "./WelcomeLetterPDF";
// import WelcomeLetterPreview from "./WelcomeLetterPreview";
import { MdDownload } from "react-icons/md";

const WelcomeLetterActions = ({ user, membership }:any) => {
    // const [previewOpen, setPreviewOpen] = useState(false);
    
    console.log("Start Welcom component")

    return (

        <div className="flex gap-4">

            {/* Preview Button */}
            {/* <button
                onClick={() => setPreviewOpen(true)}
                className="bg-gray-800 text-white px-5 py-2 rounded-lg"
            >
                Preview Welcome Letter
            </button> */}


            {/* Download Button */}
            <PDFDownloadLink
                document={<WelcomeLetterPDF
                    user={user}
                    membership={membership}

                />}
                fileName="welcome-letter.pdf"
            >

                {({ loading }) => (
                    loading ? <>
                    <button className="border border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-lg flex justify-start items-center gap-2">
                        Loading...
                    </button>
                    </> : <>
                    <button className="border border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-lg flex justify-start items-center gap-2">
                        <MdDownload className="w-4 h-4" /> Welcome Letter
                    </button>
                    </>
                )}

            </PDFDownloadLink>


            {/* Preview Modal */}
            {/* {previewOpen && (
                <WelcomeLetterPreview
                    user={{
                        firstName: "Sunil",
                        memberId: "CAH000101",
                        name: "Sunil Joshi",
                        email: "suniljoshi48@gmail.com",
                        phone: "+91 87874 85497",
                        address: "Bangalore, India"
                    }}
                    membership={{
                        price: "₹39,999",
                        paymentMode: "Online / Card",
                        transactionId: "TXN12345",
                        tenure: "3 Years",
                        nights: "6 Days / 5 Nights",
                        mealPlan: "Breakfast + Dinner",
                        validity: "2026 - 2029"
                    }}
                    onClose={() => setPreviewOpen(false)}
                />
            )} */}

        </div>

    );

};

export default WelcomeLetterActions;