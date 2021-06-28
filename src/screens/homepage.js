import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/homepageStyles";
import { Images } from "../theme/images";
import { homeText } from "../text/text";
import AssetHistory from "../components/assetHistory";
import HomepageTab from "../navigator/homepageTab";

const _assetArray = [
  {
    price: homeText.price200,
    color: styles.blackRp,
    stock: homeText.buyappl,
    time: homeText.time,
  },
  {
    price: homeText.price150,
    color: styles.greenRp,
    stock: homeText.tlkm,
    time: homeText.time,
  },
  {
    price: homeText.price1000,
    color: styles.blackRp,
    stock: homeText.fb,
    time: homeText.time,
  },
  {
    price: homeText.price1000,
    color: styles.greenRp,
    stock: homeText.sellappl,
    time: homeText.time,
  },
];

const Homepage = () => {
  const [modalVisible, setModalVisible] = useState("");

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.homepage}>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.menuButton}>
              <Image source={Images.menu} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notifButton}>
              <Image source={Images.notif} />
            </TouchableOpacity>
          </View>
          <View style={styles.text}>
            <Text style={styles.title}>{homeText.title}</Text>
          </View>
          <View style={styles.portofolio}>
            <LinearGradient
              colors={["#31A05F", "#31A078"]}
              start={[0, 0.4947]}
              end={[0.9575, 0]}
              style={styles.portofolioGradient}
            >
              <Text style={styles.portofolioText}>{homeText.portofolio}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.money}>{homeText.money}</Text>
                <View style={styles.investButton}>
                  <TouchableOpacity>
                    <Text style={styles.investButtonText}>
                      {homeText.invest}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.plans}>
            <View style={styles.plansText}>
              <Text style={styles.bestPlansText}>{homeText.best}</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>
                  {homeText.seeAll}
                  <Image source={Images.redRight} />
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <ImageBackground
                    source={Images.gradient1}
                    style={styles.plansSize}
                  >
                    <View style={styles.insidePlansText}>
                      <Text style={styles.gradeReturnText}>
                        {homeText.gold}
                      </Text>
                      <Text style={styles.returnText}>{homeText.return30}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <ImageBackground
                  source={Images.gradient2}
                  style={styles.plansSize}
                >
                  <View style={styles.insidePlansText}>
                    <Text style={styles.gradeReturnText}>
                      {homeText.silver}
                    </Text>
                    <Text style={styles.returnText}>{homeText.return60}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity>
                <LinearGradient
                  colors={["#BA8DF3", "#615EE2"]}
                  start={[0, 0.1081]}
                  end={[0, 0.9879]}
                  style={styles.plansSize}
                >
                  <View style={styles.insidePlansText}>
                    <Text style={styles.gradeReturnText}>
                      {homeText.platinum}
                    </Text>
                    <Text style={styles.returnText}>{homeText.return90}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.guide}>
            <Text style={styles.guideText}>{homeText.gdTitle}</Text>
            <View style={{ borderColor: "#4A4A4A", borderBottomWidth: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.guideTextContainer}>
                  <Text style={styles.guideTitle}>{homeText.gdBasic}</Text>
                  <Text style={styles.guideSubText}>{homeText.gd2020}</Text>
                </View>
                <View style={styles.image}>
                  <Image source={Images.ellipse1} />
                </View>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.guideTextContainer}>
                  <Text style={styles.guideTitle}>{homeText.gdHowMuch}</Text>
                  <Text style={styles.guideSubText}>{homeText.gd2018}</Text>
                </View>
                <View style={styles.image}>
                  <Image source={Images.ellipse2} />
                </View>
              </View>
            </View>
          </View>
          <Modal animationType="slide" visible={modalVisible}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.assetPage}>
                <View style={styles.topAsset}>
                  <Text> </Text>
                  <Text style={styles.assetTitle}>{homeText.assetTitle}</Text>
                  <TouchableOpacity
                    style={styles.exitButton}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Image source={Images.exit} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.subTitle}>{homeText.portofolio}</Text>
                <View style={styles.moneyRow}>
                  <Text style={styles.moneyCount}>{homeText.money}</Text>
                  <Text style={styles.profit}>
                    <Image source={Images.up} /> {homeText.percent}
                  </Text>
                </View>
                <Text style={styles.currentPlans}>{homeText.assetPlans}</Text>
                <ImageBackground
                  style={styles.planImageSize}
                  source={Images.assetImg}
                >
                  <Text style={styles.goldText}>{homeText.gold}</Text>
                  <Text style={styles.profitReturn}>{homeText.return30}</Text>
                </ImageBackground>
                <TouchableOpacity>
                  <Text style={styles.seeAllPlans}>
                    {homeText.seePlans}
                    <Image source={Images.redRight} />
                  </Text>
                </TouchableOpacity>
                <Text style={styles.historyTitle}>{homeText.historyTitle}</Text>
                {_assetArray.map((x, index) => (
                  <AssetHistory
                    key={index}
                    price={x.price}
                    color={x.color}
                    stock={x.stock}
                    time={x.time}
                  />
                ))}
              </View>
            </ScrollView>
          </Modal>
        </View>
      </ScrollView>
    </>
  );
};

<View>
  <HomepageTab></HomepageTab>
</View>;

export default Homepage;
