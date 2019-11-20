import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = { numero: 0, textoBotao: 'INICIAR' }
		this.timer = null
		this.iniciarParar = this.iniciarParar.bind(this)
		this.limpar = this.limpar.bind(this)
	}

	iniciarParar() {
		let s = this.state

		if (this.timer != null) {
			clearInterval(this.timer)
			this.timer = null
			s.textoBotao = 'INICIAR'
		} else {
			this.timer = setInterval(() => {
				let s = this.state
				s.numero += 0.1
				s.textoBotao = 'PARAR'
				this.setState(s)

			}, 100);
		}
		this.setState(s)
	}

	limpar() {
		if (this.timer != null) {
			clearInterval(this.timer)
			this.timer = null
		}
		let s = this.state
		s.numero = 0
		s.textoBotao = 'INICIAR'
		this.setState(s)
	}


	render() {
		return (
			<View style={styles.body}>
				<Image source={require('./images/relogio.png')}></Image>
				<Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
				<View style={styles.buttonArea}>
					<TouchableOpacity style={styles.button} onPress={this.iniciarParar}>
						<Text style={styles.buttonText}>{this.state.textoBotao}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={this.limpar}>
						<Text style={styles.buttonText}>Limpar</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2c1f30',
	},
	timer: {
		color: '#baa07a',
		fontSize: 35,
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: -125
	},
	buttonArea: {
		flexDirection: 'row',
		height: 80,
		marginTop: 100
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#886532',
		borderRadius: 5,
		margin: 10,
	},
	buttonText: {
		fontSize: 17,
		fontWeight: 'bold',
		color: '#FFFFFF'
	}

})