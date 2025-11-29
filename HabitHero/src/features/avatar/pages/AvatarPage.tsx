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

type Props = {
  goToMissions: () => void;
  goToRewards: () => void;
};

const AvatarPage: React.FC<Props> = ({ goToMissions, goToRewards }) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  
  const shirts = [
    { id: 1, image: require("../../../assets/shirt1.png"), price: 20 },
    { id: 2, image: require("../../../assets/shirt2.png"), price: 20 },
    { id: 3, image: require("../../../assets/shirt3.png"), price: 20 },
    { id: 4, image: require("../../../assets/shirt4.png"), price: 20 },
    { id: 5, image: require("../../../assets/shirt5.png"), price: 20 },
    { id: 6, image: require("../../../assets/shirt6.png"), price: 20 },
  ];


  const hats = [
    { id: 1, image: require("../../../assets/hat1.png"), price: 20 },
    { id: 2, image: require("../../../assets/hat2.png"), price: 20 },
    { id: 3, image: require("../../../assets/hat3.png"), price: 20 },
  ];

  
  const pants = [
    { id: 1, image: require("../../../assets/pants.png"), price: 20 },
    { id: 2, image: require("../../../assets/pants2.png"), price: 20 },
    { id: 3, image: require("../../../assets/pants3.png"), price: 20 },
  ];

  
  const shoes = [
    { id: 1, image: require("../../../assets/shoes.png"), price: 20 },
    { id: 2, image: require("../../../assets/shoes2.png"), price: 20 },
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
    <Text style={styles.priceText}>{item.price} 🟡</Text>
  </View>
));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/avatar-bg.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.panelWrapper}>
          
          <View style={styles.borderOverlay} pointerEvents="none">
            <View style={[styles.cornerDot, styles.topLeft]} />
            <View style={[styles.cornerDot, styles.topRight]} />
            <View style={[styles.cornerDot, styles.bottomLeft]} />
            <View style={[styles.cornerDot, styles.bottomRight]} />
          </View>

          <ImageBackground
            source={require("../../../assets/wood-bg.jpg")}
            style={styles.panel}
            imageStyle={styles.panelImage}
            resizeMode="cover"
          >
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
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AvatarPage;