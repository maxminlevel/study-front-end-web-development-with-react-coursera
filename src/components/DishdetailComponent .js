import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish) {
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

    renderComment(comments){
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

    render(){
        const dish = this.props.dish;
        if(dish==null){
            return (
                <div></div>
            )
        }else{
            //console.log('Dish',dish)
            const dishDetail = this.renderDish(dish)
            const dishComment = this.renderComment(dish.comments);
            return(
                <div className="container">
                    <div className='row m-1'>
                        <div className="col-12 col-md-5">
                            {dishDetail}
                        </div>
                        <div className="col-12 col-md-7">
                            {dishComment}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default DishDetail;