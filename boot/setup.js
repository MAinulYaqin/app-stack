import React from 'react';
import { Root, StyleProvider } from 'native-base';
import { Font, AppLoading } from 'expo';

// import components
import App from '../apps/Biodata/App';
import getTheme from '../native-base-theme/components';
import variables from '../native-base-theme/variables/commonColor';

export default class Setup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}

	async componentWillMount() {
		await Font.loadAsync({
			Roboto: await require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: await require('native-base/Fonts/Roboto_medium.ttf'),
		});
		this.setState({ loaded: true });
	}

	render() {
		if (this.state.loaded) {
			return (
				<StyleProvider style={getTheme(variables)}>
					<App />
				</StyleProvider>
			);
		} else {
			return (
				<Root>
					<AppLoading />
				</Root>
			);
		}
	}
}
