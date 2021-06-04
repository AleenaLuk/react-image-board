import React, {Component} from 'react';

const images = [
  {
    caption: 'Kill Bill 1',
    url: 'https://i.ytimg.com/vi/c_dNIXwrbzY/maxresdefault.jpg'
  },
  {
    caption: 'Kill Bill 2',
    url: 'https://cbs6albany.com/resources/media/5f6814e5-2b26-428a-9bc7-5a4cd22834f6-large16x9_kllbillvolume2miramax.jpg?1589779632158'
  },
  {
    caption: 'Cute Leo 3',
    url: 'https://media.gq.com/photos/5582c196e52bc4b477a9be0a/master/w_628,h_434,c_limit/copilot-entertainment-201412-1418765571371_leonardo-dicaprio-saint-tropez-boating.jpg'
  }
]
// Image Form Component
class ImageForm extends Component {
  constructor(props) {
    super(props); {
      this.state = {
        url: '',
        caption: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addImg(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="imgForm">
          <label htmlFor="url">Add an Image URL</label>
          <input id="url" name="url" name='url' onChange={this.handleChange} placeholder="enter url" />
          <label htmlFor="caption">Add an Image Caption</label>
          <textarea rows="2" id="caption" name='caption' onChange={this.handleChange} placeholder="caption here" />
          <button>Submit Image</button>
        </div>
      </form>
  );}
}

// List of Images Component
class ImageList extends Component {
  render() {
    let images = this.props.images.map((image, index) => (
      <div className="imgList" key={index}>
          <div className="imgCard">
          <img src={image.url} alt="" />
          <span>{image.caption}</span>
        </div>
      </div>
    ));
    return (
      <div>{images}</div>
    )
  }
}

// Parent Component containing Form and List for Images
class ImageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    this.addImg = this.addImg.bind(this);
  }

  componentDidMount() {
    this.setState({images})
  }

  addCaption(caption) {
    let images = [...this.state.images];
    images.push(caption);
    this.setState({images})
  }

  addImg(url) {
    let images = [...this.state.images];
    images.push(url);
    this.setState({images});
  }

  render() {
    console.log(this.state);
    return (
      <div className="imgboard">
        <ImageForm addImg={this.addImg} />
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default ImageBoard;


// import  { Component } from 'react';
//  import './ImageBoard.css';
// // class ImageForm extends Component{
// //   render() {
// //     return(
// //       <form>
// //         i am the image form
// //       </form>
// //     )
// //   }
// // };
// //
// // function ImageList() {
// //   return(
// //     <ul>
// //       i am the image list
// //     </ul>
// //   );
// // }
//
// class ImageBoard extends Component {
//   constructor(props) {
//     this.state = {
//       url: '',
//       caption: '',
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//
//   }
// }
//
// handleChange(e) {
//   e.preventDefault();
//   this.setState({[e.target.name]: e.target.value})
//   console.log(e.target.value);
// }
//
// handleSubmit(e) {
//   e.preventDefault();
//   this.props.addImg(this.state);
// }
//
// render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//     <div calssName="imgForm">
//        <ladel htmlFor="url">Add an Image URL</ladel>
//        <input id="url" name="url" onChange={this.handleChange} placeholder="enter"></input>
//        <ladel htmlFor="caption">Add an Image Caption</ladel>
//        <input id="caption" name="caption" onCahnge={this.handleChange} placeholder="caption holder"></input>
//     </div>
//     </form>
//   );}
// }
//
// class ImageList extends Component {
//   render() {
//     let images = this.props.images.map((image, index) => (
//       <div className-'imageList' key={index}>
//            <div className="imgCard">
//            <img scr={image.url} alt="" />
//            <span>{image.caption}</span>
//            </div>
//       </div>
//     ));
//     return (
//       <div>{images}</div>
//     )
//   }
// }
//
// class ImageBoard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: []
//     }
//     this.addImg = this.addImg.bind(this);
//   }
//
//   componentDidMount() {
//     this.satState({images})
//   }
//
//   addCaption(caption) {
//     let images = [ ...this.state.images];
//     images.push(caption);
//     this.setState({images})
//   }
//
//   addImg(url) {
//     let inages = [...this.state.images];
//     images.push(url);
//     this.setState({images});
//   }
//
//   render() {
//     console.log(this.state);
//     return (
//       <div className="imageboard">
//          <ImageForm images={this.state.images} addImag={this.addImg} />
//          <ImageList images={this.state.images} />
//       </div>
//     )
//   }
// }
//
// export default ImageBoard;
