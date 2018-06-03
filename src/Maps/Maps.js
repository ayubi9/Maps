import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.129810,
          longitude: 115.062445
        },
        title: 'Indomaret Buleleng',
        subtitle: 'Berlokasi di Pemaron, Kec. Buleleng, Kabupaten Buleleng, Bali 81119'
      },
      {
        key:2,
        latlng: {
          latitude:-8.569325,
          longitude:  115.138994
        },
        title: 'Indomart',
        subtitle: 'Berlokasi di No., Jl. Raya Tanah Lot No.8, Pandak Bandung, Kediri, Kabupaten Tabanan, Bali 82121'
      },
      {
        key:3,
        latlng: {
          latitude: -8.684904,
          longitude: 115.226027
        },
        title: 'Indomart',
        subtitle: 'Berlokasi di Jl. Tukad Pakerisan, Dauh Puri Klod, Denpasar Bar., Kota Denpasar, Bali 80225'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.419114,
          longitude: 115.244538
        },
        title: 'Indomaret Payangan',
        subtitle: 'Berlokasi di Jl. Raya Payangan, Melinggih, Payangan, Kabupaten Gianyar, Bali 80572'
      },
      {
        key:5,
        latlng: {
          latitude:-8.159394,
          longitude: 115.031390
        },
        title: 'Indomaret',
        subtitle: 'Berlokasi di Jl. Raya Singaraja, Anturan, Kec. Buleleng, Kabupaten Buleleng, Bali 81152'
      },
      {
        key:6,
        latlng: {
          latitude:-8.506360,
          longitude: 115.179798
        },
        title: 'Indomaret Banjar Sayan',
        subtitle: 'Berlokasi di Jl. Raya Denpasar, Werdi Bhuwana, Mengwi, Kabupaten Badung, Bali 80351'
      },
      {
        key:7,
        latlng: {
          latitude:-8.114931,
          longitude: 115.091103
        },
        title: 'Indomaret Udayana Sra',
        subtitle: 'Berlokasi di Jl. Udayana, Banjar Jawa, Kec. Buleleng, Kabupaten Buleleng, Bali 81113'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
            Lokasi Indomaret di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>AYUBI@Copyright </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
