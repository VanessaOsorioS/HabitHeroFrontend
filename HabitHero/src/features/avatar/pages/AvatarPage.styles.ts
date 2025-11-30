import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },

  panelWrapper: {
    width: width * 0.55,
    height: height * 0.88,
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
  },

  borderOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 60,
    borderColor: "rgba(39, 35, 35, 0.6)",
    borderRadius: 5,
    zIndex: 2,
  },

  cornerDot: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#fff",
    borderWidth: 2.5,
    borderColor: "rgba(0,0,0,0.25)",
    zIndex: 3,
  },

  topLeft: { top: -44, left: -44 },
  topRight: { top: -44, right: -44 },
  bottomLeft: { bottom: -44, left: -44 },
  bottomRight: { bottom: -44, right: -44 },

  panel: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 40,
    alignItems: "center",
  },

  panelImage: {
    borderRadius: 5,
    opacity: 0.95,
  },

  innerPanel: {
    width: "95%",
    backgroundColor: "#ffe9a9",
    borderRadius: 0,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginTop: 20,
  },

  avatarRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },

  avatarContainer: {
    alignItems: "center",
    width: "48%",
  },

  avatar: {
    width: 210,
    height: 210,
  },

  avatarName: {
    marginTop: 5,
    backgroundColor: "#F5C469",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 12,
    fontWeight: "bold",
    color: "#333",
  },

  slotsContainer: {
    width: "48%",
    alignItems: "flex-end",
  },

  rowSlots: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },

  slotBox: {
    width: 110,
    height: 95,
    borderRadius: 14,
    marginHorizontal: 8,
    overflow: "hidden", 
  },

  slotImage: {
    borderRadius: 14,
    resizeMode: "cover",
  },

  
  slotOverlay: {
  backgroundColor: "rgba(0, 0, 0, 0.2)", 
  width: "100%",
  height: "100%",
},


  storeScroll: {
    marginTop: 20,
    maxHeight: 130,
  },

  storeItem: {
    marginRight: 15,
    alignItems: "center",
  },

  storeBox: {
    width: 70,
    height: 70,
    
    borderRadius: 10,
  },

  priceText: {
    marginTop: 5,
    color: "#fff",
  },

  navBtn: {
    marginTop: 20,
    backgroundColor: "#f4a261",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  navBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  navBtnSecondary: {
    marginTop: 10,
    backgroundColor: "#457b9d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  navBtnSecondaryText: {
    color: "#fff",
    fontWeight: "bold",
  },


  storeItemImage: {
    width: 100,   
    height: 100,  
  },
  

  storeItemCentered: {
  marginRight: 15,
  alignItems: "center",
},

storeItemLeft: {
  marginRight: 15,
  alignItems: "flex-start",
},


priceContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
},
coinImage: {
  width: 20,
  height: 20,
},


slotPreviewImage: {
  width: "100%",
  height: "100%",
  position: "absolute",
  opacity: 0.5, 
},

slotPreviewImageSelected: {
  opacity: 1, 
},


});
