import Card from '../card/card.component';
import '../card-list/card-list.styles.css';

const CardList = ({monsters}) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return <Card key={monster.id} monsters={monster}/>
        })}
    </div>
);

export default CardList;