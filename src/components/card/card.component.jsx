import '../card/card.styles.css';

const Card = ({monsters}) => {
    const {id, name, email, phone, website} = monsters;
    return(
        <div className='card-container'>
            <img 
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    );
};

export default Card;