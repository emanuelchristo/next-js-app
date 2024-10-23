import React from 'react'
import CharacterList from '@/components/characters/CharacterList'
import { getCharacters } from '@/queries/characters'

const HomePage = ({ characters }) => {
	return <CharacterList characters={characters} />
}

export default HomePage

export const getStaticProps = async () => {
	const data = await getCharacters()
	const characters = data.characters.results
	return { props: { characters }, revalidate: 60 }
}
