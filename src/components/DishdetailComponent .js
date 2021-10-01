import { Component } from "react";
import {Card as div} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
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
            const dishComment = this.renderComment(dish.comments);
            return(
                <div>
                    {dishComment}
                </div>
            )
        }
    }
}

export default DishDetail;