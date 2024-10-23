import { getFollowedCharacters } from '@/queries/followedCharacters'
import { EmptyPlaceholder } from '@/components/EmptyPlaceholder'
import CharacterList from '@/components/characters/CharacterList'

const FollowingPage = ({ followed }) => {
	if (followed.length > 0) return <CharacterList characters={followed} />
	else return <EmptyPlaceholder />
}

export default FollowingPage

export const getServerSideProps = async () => {
	const followed = await getFollowedCharacters()
	return { props: { followed } }
}
