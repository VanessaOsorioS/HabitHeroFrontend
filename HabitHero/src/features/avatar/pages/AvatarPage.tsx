import React from "react";
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
                    <ImageBackground
                      source={require("../../../assets/leaf-bg.jpg")}
                      style={styles.slotBox}
                      imageStyle={styles.slotImage}
                    >
                      <View style={styles.slotOverlay} />
                    </ImageBackground>

                    <ImageBackground
                      source={require("../../../assets/leaf-bg.jpg")}
                      style={styles.slotBox}
                      imageStyle={styles.slotImage}
                    >
                      <View style={styles.slotOverlay} />
                    </ImageBackground>
                  </View>

                  <View style={styles.rowSlots}>
                    <ImageBackground
                      source={require("../../../assets/leaf-bg.jpg")}
                      style={styles.slotBox}
                      imageStyle={styles.slotImage}
                    >
                      <View style={styles.slotOverlay} />
                    </ImageBackground>

                    <ImageBackground
                      source={require("../../../assets/leaf-bg.jpg")}
                      style={styles.slotBox}
                      imageStyle={styles.slotImage}
                    >
                      <View style={styles.slotOverlay} />
                    </ImageBackground>
                  </View>

                </View>
              </View>
            </View>

           
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.storeScroll}
            >
              <View style={styles.storeItem}>
                <View style={styles.storeBox} />
                <Text style={styles.priceText}>20 🟡</Text>
              </View>

              <View style={styles.storeItem}>
                <View style={styles.storeBox} />
                <Text style={styles.priceText}>20 🟡</Text>
              </View>

              <View style={styles.storeItem}>
                <View style={styles.storeBox} />
                <Text style={styles.priceText}>20 🟡</Text>
              </View>
            </ScrollView>

           
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AvatarPage;
