import React, { Component } from "react";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "./Images/1.jpg",
      currentIndex: 1,
      interval: "",
    };
  }
  nextImage = () => {
    let index = this.state.currentIndex;
    if (this.state.currentIndex !== 6) {
      index++;
    }
    this.updateImage(index);
  };
  updateImage = (index) => {
    let src = "./Images/" + index + ".jpg";
    this.setState({ currentIndex: index });
    this.setState({ src: src });
  };

  previousImage = () => {
    let index = this.state.currentIndex;
    console.log(this.state.currentIndex);
    if (this.state.currentIndex !== 1) {
      index--;
    }
    this.updateImage(index);
  };
  startSlideShow = () => {
    let index = this.state.currentIndex;
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
    let int = setInterval(() => {
      if (this.state.currentIndex === 6) {
        index = 0;
      }
      index++;
      this.updateImage(index);
    }, 1000);
    this.setState({ interval: int });
  };

  stopSlideShow() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <div>
        <div>
          <img
            alt="hi"
            style={{ width: "500px", height: "500px" }}
            src={this.state.src}
          />
        </div>
        <div>
          <input
            type="button"
            value="Next"
            onClick={() => {
              this.nextImage();
            }}
          />
          <input
            type="button"
            value="SlideShow"
            onClick={() => {
              this.startSlideShow();
            }}
          />
          <input
            type="button"
            value="Pause"
            onClick={() => {
              this.stopSlideShow();
            }}
          />
          <input
            type="button"
            value="Previous"
            onClick={() => {
              this.previousImage();
            }}
          />
        </div>
      </div>
    );
  }
}

export default Gallery;
