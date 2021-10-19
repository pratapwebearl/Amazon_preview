// import logo from './logo.svg';
import React, { Component } from 'react';

import classes from './App.module.css'; 
import ProductData from './ProductData';
import ProductDetails from './ProductDetails';
import ProductPreview from './ProductPreview';
import Topbar from './Topbar';


class App extends Component {

  state= {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectdFeature: 0,
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectdFeature: pos})
  }

  render(){ 
    return (
      <div className="App">
          <Topbar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imgUrl}
            currentSelectdFeature={this.state.currentSelectdFeature} />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick = {this.onColorOptionClick} 
            currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} 
            currentSelectdFeature={this.state.currentSelectdFeature} />
          </div>
        </div>
      </div>
    );

    }

}

export default App;
