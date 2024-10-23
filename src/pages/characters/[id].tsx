import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCharacters } from '@/queries/characters'
import { getCharacterById } from '@/queries/characterById'
import { getIsFollowingCharacter } from '@/queries/followedCharacters'
import { followCharacter } from '@/mutations/follow'
import { Character } from '@/components/characters/Character'

const CharactersPage = ({ character }) => {
	const router = useRouter()
	const [isFollowing, setIsFollowing] = useState(false)

	useEffect(() => {
		if (!router.query.id) {
			return
		}

		const id = router.query.id

		getIsFollowingCharacter({ id }).then(setIsFollowing).catch(console.error)
	}, [router.query.id])

	function handleFollow() {
		const id = router.query.id
		setIsFollowing(true)
		followCharacter({ id }).catch(() => setIsFollowing(false))
	}

	return (
		<div> {character && <Character character={character} onFollow={handleFollow} isFollowing={isFollowing} />}</div>
	)
}

export default CharactersPage

export async function getStaticPaths() {
	const data = await getCharacters()
	const characters = data.characters.results

	const paths = characters.map((item) => ({
		params: { id: item.id.toString() },
	}))

	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const { character } = await getCharacterById({ id: params.id })

	if (!character) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			character,
		},
		revalidate: 60,
	}
}
