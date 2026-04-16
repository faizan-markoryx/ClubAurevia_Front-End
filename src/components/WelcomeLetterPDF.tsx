import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font
} from "@react-pdf/renderer";

/* ------------------ */
/* FONT REGISTER */
/* ------------------ */

Font.register({
  family: "Poppins",
  fonts: [
    {
      src: import.meta.env.VITE_ENVIRONMENT == "Production" ? "/Poppins-Regular.ttf" : "../../public/Poppins-Regular.ttf"
    },
    {
      src: import.meta.env.VITE_ENVIRONMENT == "Production" ? "/Poppins-Bold.ttf" : "../../public/Poppins-Bold.ttf",
      fontWeight: "bold"
    }
  ]
});

Font.register({
  family: "PresqueElegante",
  src: import.meta.env.VITE_ENVIRONMENT == "Production" ? "/PresqueElegante.otf" : "../../public/PresqueElegante.otf"
});

/* ------------------ */
/* STYLES */
/* ------------------ */

const styles = StyleSheet.create({

  page: {
    padding: 0,
    margin: 0,
    fontFamily: "Poppins",
    backgroundColor: "#E0E1E0",
    fontSize: 11
  },

  container: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 37,
    paddingBottom: 20
  },

  header: {
    backgroundColor: "#16302C",
    color: "#fff",
    textAlign: "center",
    padding: 20,
    fontSize: 34,
    fontFamily: "PresqueElegante"
  },

  section: {
    marginTop: 14
  },

  title: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 10
  },

  secoundTitle: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 10
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #737270",
    paddingTop: 6,
    paddingBottom: 6
  },

  label: {
    color: "#303234"
  },

  value: {
    fontWeight: "bold"
  },

  paragraph: {
    marginBottom: 5,
    marginTop: 5,
    lineHeight: 1
  },

  guidelines: {
    marginBottom: 1,
    marginTop: 1,
    lineHeight: 1
  },

  footer: {
    // marginTop: 30,
    backgroundColor: "#16302C",
    color: "#fff",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  }

});

/* ------------------ */
/* PDF COMPONENT */
/* ------------------ */

const WelcomeLetterPDF = ({ user, membership }: any) => (

  <Document>

    {/* PAGE 1 */}

    <Page size="A4" style={styles.page}>

      <View style={styles.header}>
        <Text>CLUB AUREVIA</Text>
      </View>

      <View style={{
        height: "7px",
        width: "100%",
        backgroundColor: "#DBA800",

      }}>
        <Text></Text>
      </View>

      <View style={styles.container}>

        <View style={styles.section}>

          <Text style={styles.secoundTitle}>Welcome Letter</Text>

          <Text style={styles.paragraph}>
            Dear {`${user?.firstName} ${user?.lastName}`},
          </Text>

          <Text style={styles.paragraph}>
            A warm welcome to Club Aurevia Hospitality Pvt Ltd.
          </Text>

          <Text style={styles.paragraph}>
            We are delighted to have you as a valued member of the Club Aurevia family, where luxury
            travel meets curated hospitality experiences. Your membership opens the door to a world of
            premium stays, handpicked destinations, and exceptional service designed to create
            unforgettable journeys.
          </Text>

          <Text style={styles.paragraph}>
            Through Club Aurevia, you gain access to a curated collection of 4-star and 5-star partner hotels
            and resorts across India and international destinations. Our goal is to provide seamless holiday
            planning, comfortable stays, and memorable travel experiences for you and your loved ones.
          </Text>

          <Text style={styles.paragraph}>
            We look forward to hosting you and your family on many incredible vacations ahead.
          </Text>

        </View>


        {/* USER DETAILS */}

        <View style={styles.section}>

          <Text style={styles.title}>YOUR DETAILS AS CONFIRMED</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Member ID</Text>
            <Text style={styles.value}>{user?.memberId}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Membership in the Name of</Text>
            <Text style={styles.value}>{`${user?.firstName} ${user?.lastName}`}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Name of the Co-applicant</Text>
            <Text style={styles.value}>{`${user?.firstName} ${user?.lastName}`}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Registered Email ID</Text>
            <Text style={styles.value}>{user?.email}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Registered Contact Number</Text>
            <Text style={styles.value}>{user?.phone}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Preferred Mailing Address</Text>
            <Text style={styles.value}>{user?.address || "--"}</Text>
          </View>

        </View>


        {/* PAYMENT */}

        <View style={styles.section}>

          <Text style={styles.title}>PAYMENT DETAILS</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Membership Fees</Text>
            <Text style={styles.value}>{`₹${membership?.pricePaid}`}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Payment Mode</Text>
            <Text style={styles.value}>{membership?.paymentMode || "--"}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Transaction ID</Text>
            <Text style={styles.value}>{membership?.transactionId || "--"}</Text>
          </View>

        </View>

      </View>

      <View style={{
        height: "7px",
        width: "100%",
        backgroundColor: "#DBA800",

      }}>
        <Text></Text>
      </View>
      <View style={styles.footer}>
        <Text>info@clubaurevia.com</Text>
        <Text>+91 85472 85478</Text>
        <Text>clubaurevia.com</Text>
      </View>

    </Page>


    {/* PAGE 2 */}

    <Page size="A4" style={styles.page}>

      <View style={styles.header}>
        <Text>CLUB AUREVIA</Text>
      </View>

      <View style={{
        height: "7px",
        width: "100%",
        backgroundColor: "#DBA800",

      }}>
        <Text></Text>
      </View>

      <View style={styles.container}>

        {/* MEMBERSHIP DETAILS */}

        <View style={styles.section}>

          <Text style={styles.title}>MEMBERSHIP DETAILS</Text>

          <View style={styles.row}>
            <Text>Membership Tenure</Text>
            <Text>{membership?.tenure || "--"}</Text>
          </View>

          <View style={styles.row}>
            <Text>Membership Nights Per Year</Text>
            {/* <Text>{membership?.totalNights}</Text> */}
            <Text>{`${membership?.totalNights + 1} Days / ${membership?.totalNights} Nights`}</Text>
          </View>

          <View style={styles.row}>
            <Text>Meal Plan</Text>
            <Text>{`Breakfast + Dinner`}</Text>
          </View>

          <View style={styles.row}>
            <Text>Membership Validity</Text>
            <Text>{membership?.validity || "--"}</Text>
          </View>

          <View style={styles.row}>
            <Text>Room Occupancy</Text>
            <Text>{`2 Adults + 2 Children below 12 years OR 3 Adults`}</Text>
          </View>

        </View>


        {/* BOOKING */}
        <View style={styles.section}>

          <Text style={styles.title}>BOOKING GUIDELINES</Text>
          <Text style={{
            marginBottom: 10
          }}>To ensure a smooth travel experience:</Text>

          <Text style={styles.guidelines}>• Members are advised to book holidays 7–10 days in advance</Text>
          <Text style={styles.guidelines}>• During peak season and festivals, bookings should be made at least 45 days prior</Text>
          <Text style={styles.guidelines}>• All bookings are subject to availability of partner properties</Text>
          <Text style={styles.guidelines}>• If a selected property is unavailable, a similar category property may be offered</Text>
        </View>

        {/* CANCELLATION */}
        <View style={styles.section}>
          <Text style={styles.title}>CANCELLATION POLICY</Text>
          <Text style={styles.guidelines}>• Booking cancellations must be made 72 hours before check-in</Text>
          <Text style={styles.guidelines}>• Cancellation policies may vary depending on the hotel property</Text>
          <Text style={styles.guidelines}>• Failure to cancel within the allowed time may result in deduction of nights from your membershi</Text>
          <Text style={styles.guidelines}>• Non Refundable Membership</Text>
        </View>


        {/* BOOKING */}
        <View style={styles.section}>

          <Text style={styles.title}>CUSTOMER SUPPORT</Text>
          <Text style={{
            marginBottom: 10
          }}>If you require assistance with bookings or travel planning, please contact us:</Text>

          <Text style={styles.guidelines}>Customer Care: +91 98974 98972</Text>
          <Text style={styles.guidelines}>Reservations: +91 98974 98972</Text>
          <Text>info@clubaurevia.com</Text>
          <Text style={styles.guidelines}>Website: www.clubaurevia.com</Text>
        </View>

      </View>

      <View style={{
        height: "7px",
        width: "100%",
        backgroundColor: "#DBA800",

      }}>
        <Text></Text>
      </View>
      <View style={styles.footer}>
        <Text>info@clubaurevia.com</Text>
        <Text>+91 85472 85478</Text>
        <Text>clubaurevia.com</Text>
      </View>

    </Page>

  </Document>

);

export default WelcomeLetterPDF;