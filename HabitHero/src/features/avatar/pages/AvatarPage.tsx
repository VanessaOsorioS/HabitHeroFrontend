import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./AvatarPage.styles";



const AvatarPage = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  const shirts = [
    { id: 1, image: require("../../../assets/shirt1.png"), price: 20 },
    { id: 2, image: require("../../../assets/shirt2.png"), price: 20 },
    { id: 3, image: require("../../../assets/shirt3.png"), price: 20 },
    { id: 4, image: require("../../../assets/shirt4.png"), price: 20 },
    { id: 5, image: require("../../../assets/shirt5.png"), price: 20 },
  ];


  const hats = [
    { id: 1, image: require("../../../assets/hat1.png"), price: 50 },
    { id: 2, image: require("../../../assets/hat2.png"), price: 40 },
  ];

  
  const pants = [
    { id: 1, image: require("../../../assets/pants.png"), price: 10 },
    { id: 2, image: require("../../../assets/pants3.png"), price: 15 },
    { id: 3, image: require("../../../assets/skirt.png"), price: 35 },
  ];

  
  const shoes = [
    { id: 1, image: require("../../../assets/shoes.png"), price: 20 },
  ];

  const handleSlotPress = (slotName: string) => {
    setSelectedSlot(slotName);
  };

  
  const renderStoreItems = () => {
    let items: any[] = [];

    switch (selectedSlot) {
      case "shirt":
        items = shirts;
        break;
      case "hat":
        items = hats;
        break;
      case "pants":
        items = pants;
        break;
      case "shoes":
        items = shoes;
        break;
      default:
        return null; 
    }

    return items.map((item) => (
      <View key={item.id} style={styles.storeItem}>
        <Image
          source={item.image}
          style={styles.storeItemImage}
          resizeMode="contain"
        />
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{item.price}</Text>
          <Image
            source={require("../../../assets/coin.png")}
            style={styles.coinImage}
            resizeMode="contain"
          />
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerPanel}>
        <View style={styles.avatarRow}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../../assets/first-avatar.png")}
              style={styles.avatar}
              resizeMode="contain"
            />
            <Text style={styles.avatarName}>Nomo</Text>
          </View>

          <View style={styles.slotsContainer}>
            <View style={styles.rowSlots}>
              {/* Slot superior izquierdo - Camisas */}
              <TouchableOpacity onPress={() => handleSlotPress("shirt")}>
                <ImageBackground
                  source={require("../../../assets/leaf-bg.jpg")}
                  style={styles.slotBox}
                  imageStyle={styles.slotImage}
                >
                  <View style={styles.slotOverlay} />
                </ImageBackground>
              </TouchableOpacity>

              {/* Slot superior derecho - Sombreros */}
              <TouchableOpacity onPress={() => handleSlotPress("hat")}>
                <ImageBackground
                  source={require("../../../assets/leaf-bg.jpg")}
                  style={styles.slotBox}
                  imageStyle={styles.slotImage}
                >
                  <View style={styles.slotOverlay} />
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.rowSlots}>
              {/* Slot inferior izquierdo - Pantalones */}
              <TouchableOpacity onPress={() => handleSlotPress("pants")}>
                <ImageBackground
                  source={require("../../../assets/leaf-bg.jpg")}
                  style={styles.slotBox}
                  imageStyle={styles.slotImage}
                >
                  <View style={styles.slotOverlay} />
                </ImageBackground>
              </TouchableOpacity>

              {/* Slot inferior derecho - Zapatos */}
              <TouchableOpacity onPress={() => handleSlotPress("shoes")}>
                <ImageBackground
                  source={require("../../../assets/leaf-bg.jpg")}
                  style={styles.slotBox}
                  imageStyle={styles.slotImage}
                >
                  <View style={styles.slotOverlay} />
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* ScrollView horizontal con el catálogo - Solo se muestra si hay un slot seleccionado */}
      {selectedSlot && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storeScroll}
        >
          {renderStoreItems()}
        </ScrollView>
      )}
    </View>
  );
};

export default AvatarPage;