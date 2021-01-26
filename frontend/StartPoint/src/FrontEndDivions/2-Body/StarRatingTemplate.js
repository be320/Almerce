import StarRatings from 'react-star-ratings';

const StarRatingTemplate =(props)=> {
 
  return<>
  <div className=" messageTemplateContainer ">
  <div className='fixingSizeOrientationRight' >
      <div className="messageOrientationRight d-flex justify-content-center flex-wrap" style={{backgroundColor : "rgb(110, 72, 170)"}} >
      <StarRatings
          starRatedColor="rgb(209, 209, 224)"
          changeRating={props.changeRating}
          numberOfStars={6}
          name='rating'
          starDimension="20px"
        />
      </div>
  </div>
</div>
  </>
  };



  

export default StarRatingTemplate;
