import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import { getDataFromApiPandaScore } from '../API/ESportApi'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { films: [] }
    }

    _loadFilms() {
        getDataFromApiPandaScore().then(data => this.setState({ films: data.results}))
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.TextInput} placeholder="Titre du film"/>
                <Button style={styles.Button} title="Rechercher" onPress={() => this._loadFilms()}/>
            <FlatList
                data={this.props.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    main_container: {
        marginTop: 20,
        flex: 1
    },
    Button: {
        height: 50,
    },
    TextInput: {
        marginLeft: 5, 
        marginRight: 5, 
        height: 50, 
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5
    },
})

export default Search