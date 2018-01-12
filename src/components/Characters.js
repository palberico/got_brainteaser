import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';
import axios from 'axios';

class Characters extends React.Component {
    state = { characters: [] }

    componentDidMount() {
        this.fetchCharacters()
    }

    fetchCharacters = () => {
        axios.get('https://api.got.show/api/characters/')
        .then( response => {
            this.setState({ Characters: response.data })
        })
    }

    render() {
        return(
            <Container>
                <Header as='h1' color='green' textAlign='center'>Game of Thrones Characters</Header>
                    <Card.Group itemsPerRow={4} >
                        { this.state.characters.map( character => {
                            return(
                                <Card>
                                    <Card.Content>
                                        <Card.Header>
                                        {character.name}
                                        </Card.Header>
                                    </Card.Content>
                                </Card>
                            )
                        })}
                    </Card.Group>
            </Container>
        )
    }
}

export default Characters 