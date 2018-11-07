import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

// COMPONENTS
import ImageApp from './components/Image';

import Contacts from './Contacts';

class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<ImageApp />
				<View
					style={{
						width: Dimensions.get('window').width,
						paddingTop: 20,
						paddingLeft: 50
					}}>
					<Text>Nama : Nathanel ifanda</Text>
					<Text>Sekolah : SMKN 2</Text>
					<Text>Hobby : baca manga di nhentai, hentai.cave, tsumino.book 💛</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const routes = createBottomTabNavigator(
	{
		Home: App,
		Contacts: Contacts
	},
	{
		initialRouteName: 'Home'
	}
);

export default routes