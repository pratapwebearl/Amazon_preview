import React from 'react';

import classes from './ProductDetails.module.css';

// import ProductData from './ProductData';

const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imgUrl: 'https://i.imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imgUrl: 'https://i.imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imgUrl: 'https://i.imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imgUrl: 'https://i.imgur.com/xSIK4M8.png'
        }
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

const ProductDetails = (props) => {

     
    const colorOptions = props.data.colorOptions.map((item, pos) => {
            // const classArr = [] 
            // if(pos === 0){
            //     classArr.push(classes.SelectedProductImage);
                
            // }
         return(
             <img key={pos} className={classes.ProductImage} src={item.imageUrl} alt={item.styleName} />

         );
     })
    

    return(
        <div className={classes.ProductData}>
          {/* <h1 className={classes.ProductTitle}>{ProductData.title}</h1> */}
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
               {colorOptions}
         {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://i.imgur.com/iOeUBV7.png" alt="Black Colored Watch" />
            <img className={classes.ProductImage} src="https://i.imgur.com/PTgQlim.png" alt="Red Colored Watch" />
            <img className={classes.ProductImage} src="https://i.imgur.com/Mplj1YR.png" alt="Blue Colored Watch" />
            <img className={classes.ProductImage} src="https://i.imgur.com/xSIK4M8.png" alt="Purple Colored Watch" />  */}
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    )
}
export default ProductDetails;