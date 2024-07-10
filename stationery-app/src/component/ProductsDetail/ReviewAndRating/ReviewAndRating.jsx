import React, { useState } from 'react';
import './ReviewAndRatingStylees.scss';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import reviews from "../../../data/Product/Review";




function ReviewAndRating({ productId }) {
    const [reviewsList, setReviewsList] = useState(reviews); // Initialize state with reviews array
    const [rating, setRating] = useState(0);


    const handleStarClick = (starRating) => {
        setRating(starRating);
    };


    const handleSubmitReview = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newReview = {
            id: reviewsList.length + 1,
            text: formData.get('review'),
            productID: productId,
            email: formData.get('email'),
            rating: rating,
            state: [],
        };
        setReviewsList([...reviewsList, newReview]); // Update reviewsList state with new review
        reviews.push(newReview); // Update original reviews array in Review.js
        setRating(0); // Reset rating after submit
        event.target.reset();
    };


    const renderReviews = () => {
        const filteredReviews = reviewsList.filter(review => review.productID === productId);


        return filteredReviews.map((review) => (
            <div key={review.id} className="review_item">
                <p>Email: {review.email}</p>
                <p>Đánh giá: {review.text}</p>
                <div className="rating_stars">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon
                            key={index}
                            style={{ color: index < review.rating ? '#ffc107' : '#e4e5e9' }}
                        />
                    ))}
                </div>
            </div>
        ));
    };




    return (
        <div className="review_container">
            <div className="write_review">
                <h2>Viết đánh giá sản phẩm</h2>
                <form onSubmit={handleSubmitReview} className="review_form">
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                    />
                    <textarea
                        required
                        id="review"
                        name="review"
                        placeholder="Đánh giá"
                        rows={4}
                    />
                    <div className="rating_input">
                        <span>Rating:</span>
                        <div className="star_rating">
                            {[...Array(5)].map((_, index) => (
                                <StarBorderIcon
                                    key={index}
                                    className={index < rating ? 'filled' : ''}
                                    onClick={() => handleStarClick(index + 1)}
                                />
                            ))}
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>


            <div className="cus_review">
                <h2>Đánh giá sản phẩm</h2>
                <div className="warp_review">
                    {renderReviews()}
                </div>
            </div>
        </div>
    );
}


export default ReviewAndRating;