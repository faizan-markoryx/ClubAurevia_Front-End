// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   Font
// } from "@react-pdf/renderer";

// /* ------------------ */
// /* FONT REGISTER */
// /* ------------------ */

// // Font.register({
// //   family: "Poppins",
// //   fonts: [
// //     {
// //       src: import.meta.env.VITE_ENVIRONMENT == "Production" ? "/Poppins-Regular.ttf" : "../../public/Poppins-Regular.ttf"
// //     },
// //     {
// //       src: import.meta.env.VITE_ENVIRONMENT == "Production" ? "/Poppins-Bold.ttf" : "../../public/Poppins-Bold.ttf",
// //       fontWeight: "bold"
// //     }
// //   ]
// // });

// // Font.register({
// //   family: "PresqueElegante",
// //   src: import.meta.env.VITE_ENVIRONMENT == "Production" ? "/PresqueElegante.otf" : "../../public/PresqueElegante.otf"
// // });



// /* ------------------ */
// /* FONT REGISTER */
// /* ------------------ */

// Font.register({
//   family: "Poppins",
//   fonts: [
//     {
//       src: "/Poppins-Regular.ttf"
//     },
//     {
//       src: "/Poppins-Bold.ttf",
//       fontWeight: "bold"
//     }
//   ]
// });

// Font.register({
//   family: "PresqueElegante",
//   src: "/PresqueElegante.otf"
// });





// /* ------------------ */
// /* STYLES */
// /* ------------------ */

// const styles = StyleSheet.create({

//   page: {
//     padding: 0,
//     margin: 0,
//     fontFamily: "Poppins",
//     backgroundColor: "#E0E1E0",
//     fontSize: 11
//   },

//   container: {
//     paddingLeft: 40,
//     paddingRight: 40,
//     paddingTop: 37,
//     paddingBottom: 20
//   },

//   header: {
//     backgroundColor: "#16302C",
//     color: "#fff",
//     textAlign: "center",
//     padding: 20,
//     fontSize: 34,
//     fontFamily: "PresqueElegante"
//   },

//   section: {
//     marginTop: 14
//   },

//   title: {
//     fontSize: 13,
//     fontWeight: "600",
//     marginBottom: 10
//   },

//   secoundTitle: {
//     fontSize: 12,
//     fontWeight: "500",
//     marginBottom: 10
//   },

//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     borderBottom: "1px solid #737270",
//     paddingTop: 6,
//     paddingBottom: 6
//   },

//   label: {
//     color: "#303234"
//   },

//   value: {
//     fontWeight: "bold"
//   },

//   paragraph: {
//     marginBottom: 5,
//     marginTop: 5,
//     lineHeight: 1
//   },

//   guidelines: {
//     marginBottom: 1,
//     marginTop: 1,
//     lineHeight: 1
//   },

//   footer: {
//     // marginTop: 30,
//     backgroundColor: "#16302C",
//     color: "#fff",
//     paddingLeft: 40,
//     paddingRight: 40,
//     paddingTop: 15,
//     paddingBottom: 15,
//     flexDirection: "row",
//     justifyContent: "space-between"
//   }

// });

// /* ------------------ */
// /* PDF COMPONENT */
// /* ------------------ */

// const WelcomeLetterPDF = ({ user, membership }: any) => (

//   <Document>

//     {/* PAGE 1 */}

//     <Page size="A4" style={styles.page}>

//       <View style={styles.header}>
//         <Text>CLUB AUREVIA</Text>
//       </View>

//       <View style={{
//         height: "7px",
//         width: "100%",
//         backgroundColor: "#DBA800",

//       }}>
//         <Text></Text>
//       </View>

//       <View style={styles.container}>

//         <View style={styles.section}>

//           <Text style={styles.secoundTitle}>Welcome Letter</Text>

//           <Text style={styles.paragraph}>
//             Dear {`${user?.firstName} ${user?.lastName}`},
//           </Text>

//           <Text style={styles.paragraph}>
//             A warm welcome to Club Aurevia Pvt Ltd.
//           </Text>

//           <Text style={styles.paragraph}>
//             We are delighted to have you as a valued member of the Club Aurevia family, where luxury
//             travel meets curated hospitality experiences. Your membership opens the door to a world of
//             premium stays, handpicked destinations, and exceptional service designed to create
//             unforgettable journeys.
//           </Text>

//           <Text style={styles.paragraph}>
//             Through Club Aurevia, you gain access to a curated collection of 4-star and 5-star partner hotels
//             and resorts across India and international destinations. Our goal is to provide seamless holiday
//             planning, comfortable stays, and memorable travel experiences for you and your loved ones.
//           </Text>

//           <Text style={styles.paragraph}>
//             We look forward to hosting you and your family on many incredible vacations ahead.
//           </Text>

//         </View>


//         {/* USER DETAILS */}

//         <View style={styles.section}>

//           <Text style={styles.title}>YOUR DETAILS AS CONFIRMED</Text>

//           <View style={styles.row}>
//             <Text style={styles.label}>Member ID</Text>
//             <Text style={styles.value}>{user?.memberId}</Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.label}>Membership in the Name of</Text>
//             <Text style={styles.value}>{`${user?.firstName} ${user?.lastName}`}</Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.label}>Name of the Co-applicant</Text>
//             <Text style={styles.value}>{`${user?.firstName} ${user?.lastName}`}</Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.label}>Registered Email ID</Text>
//             <Text style={styles.value}>{user?.email}</Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.label}>Registered Contact Number</Text>
//             <Text style={styles.value}>{user?.phone}</Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.label}>Registered Address</Text>
//             <Text style={styles.value}>{user?.address || "--"}</Text>
//           </View>

//         </View>


//         {/* PAYMENT */}

//         <View style={styles.section}>

//           <Text style={styles.title}>PAYMENT DETAILS</Text>

//           <View style={styles.row}>
//             <Text style={styles.label}>Membership Fees</Text>
//             <Text style={styles.value}>{`₹${membership?.pricePaid}`}</Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.label}>Payment Mode</Text>
//             <Text style={styles.value}>{membership?.paymentMode || "--"}</Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.label}>Transaction ID</Text>
//             <Text style={styles.value}>{membership?.transactionId || "--"}</Text>
//           </View>

//         </View>

//       </View>

//       <View style={{
//         height: "7px",
//         width: "100%",
//         backgroundColor: "#DBA800",

//       }}>
//         <Text></Text>
//       </View>
//       <View style={styles.footer}>
//         <Text>info@clubaurevia.com</Text>
//         <Text>+91 81411 12028</Text>
//         <Text>clubaurevia.com</Text>
//       </View>

//     </Page>


//     {/* PAGE 2 */}

//     <Page size="A4" style={styles.page}>

//       <View style={styles.header}>
//         <Text>CLUB AUREVIA</Text>
//       </View>

//       <View style={{
//         height: "7px",
//         width: "100%",
//         backgroundColor: "#DBA800",

//       }}>
//         <Text></Text>
//       </View>

//       <View style={styles.container}>

//         {/* MEMBERSHIP DETAILS */}

//         <View style={styles.section}>

//           <Text style={styles.title}>MEMBERSHIP DETAILS</Text>

//           {/* <View style={styles.row}>
//             <Text>Membership Tenure</Text>
//             <Text>{membership?.tenure || "--"}</Text>
//           </View> */}

//           <View style={styles.row}>
//             <Text>Membership Nights Per Year</Text>
//             {/* <Text>{membership?.totalNights}</Text> */}
//             <Text>{`${membership?.totalNights + 1} Days / ${membership?.totalNights} Nights`}</Text>
//           </View>

//           <View style={styles.row}>
//             <Text>Meal Plan</Text>
//             <Text>{`Breakfast + Dinner`}</Text>
//           </View>

//           <View style={styles.row}>
//             <Text>Membership Validity</Text>
//             <Text>{membership?.validity || "--"}</Text>
//           </View>

//           {/* <View style={styles.row}>
//             <Text>Room Occupancy</Text>
//             <Text>{`2 Adults + 2 Children below 12 years OR 3 Adults`}</Text>
//           </View> */}

//         </View>


//         {/* BOOKING */}
//         <View style={styles.section}>

//           <Text style={{
//             marginBottom: 40,
//           }}></Text>
//           <Text style={styles.title}>TERM AND CONDITIONS</Text>
//           {/* <Text style={{
//             marginBottom: 10,
//           }}></Text> */}

//           <Text style={styles.guidelines}>• Booking cancellations must be made 72 hours before check-in</Text>
//           <Text style={styles.guidelines}>• Cancellation policies may vary depending on the hotel property</Text>
//           <Text style={styles.guidelines}>• Failure to cancel within the allowed time may result in deduction of nights from your membership</Text>
//           <Text style={styles.guidelines}>• Non Refundable Membership</Text>
//           <Text style={styles.guidelines}>• There must be a minimum gap of 60 days between two consecutive holidays</Text>
//           <Text style={styles.guidelines}>• You will be eligible for the service one month after joining</Text>
//           <Text style={styles.guidelines}>• Complimentary nights may be gifted to a third party, The member and the gift recipient cannot utilize gifted nights during the same booking period</Text>
//           <Text style={styles.guidelines}>• Members are advised to book holidays 7–10 days in advance</Text>
//           <Text style={styles.guidelines}>• During peak season and festivals, bookings should be made at least 45 days prior</Text>
//           <Text style={styles.guidelines}>• All bookings are subject to availability of partner properties</Text>
//           <Text style={styles.guidelines}>• If a selected property is unavailable, a similar category property may be offered</Text>
//         </View>

//         {/* BOOKING */}
//         <View style={styles.section}>

//           <Text style={{
//             marginBottom:25,
//           }}></Text>
//           <Text style={styles.title}>CUSTOMER SUPPORT</Text>
//           <Text style={{
//             marginBottom: 10
//           }}>If you require assistance with bookings or travel planning, please contact us:</Text>

//           <Text style={styles.guidelines}>Customer Care: +91 81411 12028</Text>
//           <Text style={styles.guidelines}>Reservations: +91 81411 12028</Text>
//           <Text>info@clubaurevia.com</Text>
//           <Text style={styles.guidelines}>Website: www.clubaurevia.com</Text>
//         </View>

//       </View>

//       <View style={{
//         height: "7px",
//         width: "100%",
//         backgroundColor: "#DBA800",

//       }}>
//         <Text></Text>
//       </View>
//       <View style={styles.footer}>
//         <Text>info@clubaurevia.com</Text>
//         <Text>+91 81411 12028</Text>
//         <Text>clubaurevia.com</Text>
//       </View>

//     </Page>

//   </Document>

// );

// export default WelcomeLetterPDF;








import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image
} from "@react-pdf/renderer";

/* ------------------ */
/* FONT REGISTER */
/* ------------------ */

Font.register({
  family: "Poppins",
  fonts: [
    {
      src: "/Poppins-Regular.ttf"
    },
    {
      src: "/Poppins-Bold.ttf",
      fontWeight: "bold"
    }
  ]
});

Font.register({
  family: "PresqueElegante",
  src: "/PresqueElegante.otf"
});

/* ------------------ */
/* STYLES */
/* ------------------ */

const styles = StyleSheet.create({
  page: {
    padding: 0,
    margin: 0,
    fontFamily: "Poppins",
    fontSize: 10,
    color: "#2C3E50",
    position: "relative"
  },

  headerImg: {
    width: "100%",
    height: 150,
    objectFit: "fill"
  },

  // PAGE 1 STYLES
  page1Container: {
    paddingHorizontal: 42,
    paddingTop: 0
  },
  salutation: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#16302C",
    marginBottom: 8,
    marginTop: 16
  },
  welcomeLine: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#16302C",
    marginBottom: 10
  },
  paragraph: {
    fontSize: 11,
    lineHeight: 1.5,
    color: "#303234",
    marginBottom: 8,
    textAlign: "left"
  },
  bottomEnvelopeImg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 380,
    objectFit: "cover"
  },

  // PAGE 2 & 3 CONTAINER
  bodyContainer: {
    paddingHorizontal: 42,
    paddingTop: 0,
    paddingBottom: 50
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#16302C",
    marginBottom: 6,
    marginTop: 10,
    letterSpacing: 0.5
  },

  // CARD / PILL DESIGN
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 7
  },
  rowLabel: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "500",
    width: "45%"
  },
  rowValue: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "normal",
    width: "55%",
    textAlign: "right"
  },

  // PAGE 3 TERMS & CONDITIONS
  termsListContainer: {
    marginTop: 4
  },
  termItem: {
    flexDirection: "row",
    marginBottom: 4.5,
    paddingRight: 10
  },
  termBullet: {
    width: 10,
    fontSize: 11,
    color: "#16302C"
  },
  termText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 1.35,
    color: "#2A2A2A"
  },

  thankyouBannerImg: {
    width: "100%",
    height: 70,
    marginTop: 18,
    objectFit: "fill"
  },

  // REUSABLE FOOTER
  footerWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  goldDivider: {
    height: 5.5,
    width: "100%",
    backgroundColor: "#DBA800"
  },
  footer: {
    backgroundColor: "#16302C",
    color: "#FFFFFF",
    paddingHorizontal: 42,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 9
  }
});

/* ------------------ */
/* PDF COMPONENT */
/* ------------------ */

const WelcomeLetterPDF = ({ user, membership }: any) => {
  // Format Date Helper (DD/MM/YYYY)
  const formatDate = (dateString: any) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "";
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  // Full Name Construction
  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "--";

  // Address Construction
  const addressParts = [
    user?.addressLine1,
    user?.addressLine2,
    user?.city,
    user?.state,
    user?.postalCode,
    user?.country
  ].filter(Boolean);

  const formattedAddress = addressParts.length > 0
    ? addressParts.join(", ")
    : (user?.address || "--");

  // Validity Date Construction
  let formattedValidity = "--";
  if (membership?.validityFrom && membership?.validityTo) {
    formattedValidity = `${formatDate(membership.validityFrom)} to ${formatDate(membership.validityTo)}`;
  } else if (membership?.validity) {
    formattedValidity = membership.validity;
  }

  // Total Nights and Days Construction
  const totalNightsCount = Number(membership?.totalNights) || 0;
  const nightsDisplay = totalNightsCount > 0
    ? `${totalNightsCount + 1} Days / ${totalNightsCount} Nights`
    : "--";

  // Price Construction
  const priceDisplay = membership?.pricePaid !== undefined && membership?.pricePaid !== null
    ? `₹${Number(membership.pricePaid).toLocaleString("en-IN")}/-`
    : "--";

  const termsList = [
    "Club Aurevia members can enjoy access to a selection of 4-star and 5-star hotels and resorts.",
    "Members have the flexibility to divide their allotted holiday days among multiple destinations.",
    "Membership nights may be gifted to family members, friends or relatives.",
    "Members are permitted to combine their available holiday nights for an extended stay.",
    "Complimentary indoor and outdoor activities or amenities are included as part of the membership.",
    "There are no hidden costs or additional annual subscription charges.",
    "Hotel reservations and room allocations are subject to availability at the time of booking.",
    "Breakfast and dinner arrangements may vary depending on the selected hotel or resort.",
    "A minimum interval of 90 days must be maintained between two consecutive holidays.",
    "If a property featured in the brochure is unavailable, Club Aurevia will arrange an alternative property of a similar category.",
    "Regular membership nights and complimentary nights cannot be combined or used during the same holiday.",
    "Members may choose to use their allotted nights personally or transfer them as a gift. Both options cannot be exercised simultaneously.",
    "Holiday bookings should be requested at least 7-10 days before the intended travel date.",
    "For festivals and peak travel periods, a minimum advance notice of 45 days is required.",
    "Cancellation requests must be submitted at least 72 hours before the scheduled check-in.",
    "Property-specific cancellation policies may apply, and failure to comply may result in a deduction of membership nights.",
    "Membership amount is non-refundable."
  ];

  return (
    <Document>
      {/* ================= PAGE 1 ================= */}
      <Page size="A4" style={styles.page}>
        <Image src="/header.png" style={styles.headerImg} />

        <View style={styles.page1Container}>
          <Text style={styles.salutation}>
            Dear {fullName},
          </Text>

          <Text style={styles.welcomeLine}>A warm welcome to Club Aurevia Pvt Ltd.</Text>

          <Text style={styles.paragraph}>
            We are delighted to have you as a valued member of the Club Aurevia family, where luxury travel meets curated hospitality experiences. Your membership opens the door to a world of premium stays, handpicked destinations, and exceptional service designed to create unforgettable journeys.
          </Text>

          <Text style={styles.paragraph}>
            Through Club Aurevia, you gain access to a curated collection of 4-star and 5-star partner hotels and resorts across India and international destinations. Our goal is to provide seamless holiday planning, comfortable stays, and memorable travel experiences for you and your loved ones.
          </Text>

          <Text style={styles.paragraph}>
            We look forward to hosting you and your family on many incredible vacations ahead.
          </Text>
        </View>

        <Image src="/firstpage-bottom-section.png" style={styles.bottomEnvelopeImg} />
      </Page>

      {/* ================= PAGE 2 ================= */}
      <Page size="A4" style={styles.page}>
        <Image src="/header.png" style={styles.headerImg} />

        <View style={styles.bodyContainer}>
          {/* USER DETAILS */}
          <Text style={styles.sectionTitle}>YOUR DETAILS AS CONFIRMED</Text>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Member ID:</Text>
            <Text style={styles.rowValue}>{user?.memberId || "--"}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Membership in the Name of:</Text>
            <Text style={styles.rowValue}>{fullName}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Name of the Co-applicant:</Text>
            <Text style={styles.rowValue}>{user?.coApplicant || "-"}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Registered Email ID:</Text>
            <Text style={styles.rowValue}>{user?.email || "--"}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Registered Contact Number:</Text>
            <Text style={styles.rowValue}>{user?.phone || "--"}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Registered Address:</Text>
            <Text style={styles.rowValue}>{formattedAddress}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Membership Fees:</Text>
            <Text style={styles.rowValue}>{priceDisplay}</Text>
          </View>

          {/* MEMBERSHIP DETAILS */}
          <Text style={[styles.sectionTitle, { marginTop: 12 }]}>MEMBERSHIP DETAILS</Text>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Membership Tenure</Text>
            <Text style={styles.rowValue}>{membership?.tenure || "--"}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Membership Nights</Text>
            <Text style={styles.rowValue}>{nightsDisplay}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Meal Plan</Text>
            <Text style={styles.rowValue}>{membership?.mealPlan || "--"}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Membership Validity</Text>
            <Text style={styles.rowValue}>{formattedValidity}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Room Capacity</Text>
            <Text style={styles.rowValue}>{membership?.roomCapacity || "--"}</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footerWrapper}>
          <View style={styles.goldDivider} />
          <View style={styles.footer}>
            <Text>Info@clubaurivea.com</Text>
            <Text>+91 81411 12028</Text>
            <Text>clubaurivea.com</Text>
          </View>
        </View>
      </Page>

      {/* ================= PAGE 3 ================= */}
      <Page size="A4" style={styles.page}>
        <Image src="/header.png" style={styles.headerImg} />

        <View style={styles.bodyContainer}>
          <Text style={styles.sectionTitle}>MEMBERSHIP BENEFITS & TERMS AND CONDITIONS</Text>

          <View style={styles.termsListContainer}>
            {termsList.map((term, index) => (
              <View key={index} style={styles.termItem}>
                <Text style={styles.termBullet}>•</Text>
                <Text style={styles.termText}>{term}</Text>
              </View>
            ))}
          </View>

          {/* Thank You Banner Image from Public Folder */}
          <Image src="/thankyou-image.png" style={styles.thankyouBannerImg} />
        </View>

        {/* Footer */}
        <View style={styles.footerWrapper}>
          <View style={styles.goldDivider} />
          <View style={styles.footer}>
            <Text>Info@clubaurivea.com</Text>
            <Text>+91 81411 12028</Text>
            <Text>clubaurivea.com</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default WelcomeLetterPDF;