import * as React from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import {Search} from '../components/search.component'
import {LocationContext} from '../../../services/location/location.context'
import {RestaurantContext} from '../../../services/restaurants/restaurants.context'
import {MapCallout} from '../components/map-callout.component'

export const Map = ({navigation}) => {
  const {location} = React.useContext(LocationContext)
  const {restaurants = []} = React.useContext(RestaurantContext)
  const [latitudeDelta, setLatitudeDelta] = React.useState(0)
  const { lat, lng, viewport } = location

  React.useEffect(() => {
    const northeastLat = viewport.northeast.lat
    const southwestLat = viewport.southwest.lat
    setLatitudeDelta(northeastLat - southwestLat)
  }, [location, viewport])

  return (
    <View style={styles.container}>
			<Search/>
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta,
          longitudeDelta: 0.02
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <Callout onPress={() => navigation.navigate('RestaurantDetail', { restaurant })}>
              <MapCallout restaurant={restaurant}/>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
