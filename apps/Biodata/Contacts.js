import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Contacts extends React.Component {
	render() {
		return (
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
		);
	}
}
