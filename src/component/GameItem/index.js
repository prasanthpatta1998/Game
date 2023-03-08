import {ListItem, Image, Button} from './styledComponent'

const GameItem = props => {
  const {CardDetails, onChangeTheValues} = props
  const {id, imageUrl} = CardDetails

  const onCheckValues = () => {
    onChangeTheValues(id)
  }

  return (
    <Button
      type="button"
      data-testid={`${id.toLowerCase()}Button`}
      onClick={onCheckValues}
    >
      <ListItem key={id}>
        <Image src={imageUrl} alt={id} />
      </ListItem>
    </Button>
  )
}

export default GameItem
