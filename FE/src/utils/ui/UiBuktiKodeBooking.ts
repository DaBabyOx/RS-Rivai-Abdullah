import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    alignItems: "center",
    width: "100%",
    gap: 30,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  profileInfoBox: {
    backgroundColor: "#0BAF9A",
    width: "100%",
    height: 120,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 20,
    paddingLeft: 20,
    marginTop: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "white",
  },
  profileDetails: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  userNameStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  userRecordNoStyle: {
    fontSize: 17,
    color: "#ffffff",
    fontWeight: "semibold",
  },
  qrCodeSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "100%",
  },
  bookingCodeText: {
    fontSize: 20,
  },
  separatorLine: {
    borderWidth: 0.7,
    borderColor: "lightgrey",
    width: "100%",
  },
  scheduleSection: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scheduleItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  iconContainer: {
    backgroundColor: "#0BAF9A",
    borderRadius: 10,
    padding: 7,
  },
  scheduleTextContainer: {
    flexDirection: "column",
  },
  scheduleLabel: {
    fontSize: 15,
    opacity: 0.7,
  },
  scheduleDetail: {
    fontSize: 18,
  },
  registrationDetailsBox: {
    backgroundColor: "#E5E5E5",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 15,
    width: "100%",
  },
  registrationDetailsHeader: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  registrationDetailsContainer: {
    paddingVertical: 10,
  },
  registrationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  registrationLabel: {
    color: "grey",
    fontSize: 18,
  },
  registrationValue: {
    color: "grey",
    fontSize: 18,
  },
  infoTextContainer: {
    gap: 10,
  },
  infoText: {
    color: "black",
    fontSize: 16,
  },
  menuContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    width: "100%",
  },
  btnStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    borderRadius: 10,
    paddingVertical: 5,
    marginBottom: 1,
    gap: 10,
    width: "100%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  menuLabel: {
    fontSize: 17,
  },
  arrowContainer: {
    backgroundColor: "lightgray",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  scheduleInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
