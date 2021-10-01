import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    if (dish !== null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}

function RenderComment(comments){
    console.log('comments',comments);
    if(comments==null){
        return(<div></div>)
    }
    const cmts = comments.map(comment =>{
        return (
            <div key={comment.id}>
                <li>{comment.comment} </li>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </p>
            </div>
        )
    });
    return (
        <div className='col-12 col-md-7'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmts}
            </ul>

        </div>
    )
}

const DishDetail = (props) => {
    const dish = props.dish;
    if(dish==null){
        return (
            <div></div>
        )
    }else{
        return(
            <div className="container">
                <div className='row m-1'>
                    <div className="col-12 col-md-5">
                        <RenderDish dish={dish}/>
                    </div>
                    <div className="col-12 col-md-7">
                        <RenderComment comments={dish.comments}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail;