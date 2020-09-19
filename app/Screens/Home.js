import { Icon } from "native-base";
import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import WebViewContainer from "../containers/WebViewContainers";
import WithHeaderContainer from "../containers/WithHeaderContainer";
import Carousel, { Pagination } from "react-native-snap-carousel";

export default class Home extends Component {
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.carouselItem}>
        <Image
          style={{ width: "100%", height: 150, position: "absolute" }}
          source={{ uri: item }}
        />
      </View>
    );
  };

  state = {
    carouselImages: [
      "https://cdn.pixabay.com/photo/2017/08/30/17/12/waffle-heart-2697904_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/05/02/18/20/blueberries-2278921_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/06/09/16/39/carrots-2387394_960_720.jpg",
    ],
    activeCarousel: 0,
    resturants: [
      {
        title: "spice of india",
        image:
          "https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/logos/original/1507273008_SpiceOfIndiaLogo1.jpg",
      },
      {
        title: "big chef",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/0a/c2/97/a0/entree-du-big-chef-dans.jpg",
      },
      {
        title: "ritual coffee house",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/05/81/3c/75/ritual-coffee-house.jpg",
      },
      {
        title: "food centre",
        image:
          "https://pakistani.pk/uploads/reviews/photos/original/78/21/b2/Food20Centre20Logo-36-1432340344.png",
      },
    ],
  };

  render() {
    return (
      <WithHeaderContainer>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.searchIcon}>
              <Icon
                name="search1"
                type="AntDesign"
                style={{ color: "red", fontSize: 25 }}
              />
            </View>
            <View style={styles.searchBar}>
              <TextInput
                style={{ width: "100%" }}
                placeholder="Resturant Name"
                placeholderTextColor="gray"
              />
            </View>
            <View
              style={{
                width: "10%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                name="sliders"
                type="FontAwesome"
                style={{ color: "red", fontSize: 25 }}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.container,
            { width: "100%", justifyContent: "flex-end" },
          ]}
        >
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            onSnapToItem={(index) => this.setState({ activeCarousel: index })}
            layout="default"
            data={this.state.carouselImages}
            renderItem={this._renderItem}
            sliderWidth={Dimensions.get("window").width}
            itemWidth={Dimensions.get("window").width}
            layoutCardOffset={0}
            loop
          />
          <View style={{ marginTop: 20 }} />
          <Pagination
            dotsLength={this.state.carouselImages.length}
            activeDotIndex={this.state.activeCarousel}
            containerStyle={{
              position: "absolute",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "red",
            }}
            inactiveDotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "white",
            }}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
          />
        </View>

        <View style={[styles.container, { marginTop: 0 }]}>
          <View style={{ width: "95%" }}>
            <View style={styles.resturantContainer}>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Featured Resturants
              </Text>

              <TouchableOpacity
                style={{
                  width: 100,
                  paddingVertical: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "red",
                  borderStyle: "solid",
                  borderRadius: 100,
                }}
                activeOpacity={0.7}
              >
                <Text style={{ fontSize: 14, color: "red" }}>Show All</Text>
              </TouchableOpacity>
            </View>

            <View style={{ width: "100%", marginTop: 20 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ width: Dimensions.get("window").width }}
              >
                {this.state.resturants.map((item, i) => (
                  <View
                    key={i}
                    style={{
                      width: 150,
                      marginLeft: i == 0 ? 0 : 10,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ width: "100%", height: 100, borderRadius: 5 }}
                      source={{ uri: item.image }}
                    />
                    <Text style={{ fontSize: 12, marginTop: 10 }}>
                      {item.title}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </WithHeaderContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginTop: 20, alignItems: "center", width: "100%" },
  searchContainer: {
    width: "90%",
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    padding: 5,
    borderRadius: 50,
  },
  searchIcon: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderColor: "red",
  },
  searchBar: { width: "70%", justifyContent: "center", marginLeft: 10 },
  carouselItem: {
    width: "100%",
    height: 150,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  resturantContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
