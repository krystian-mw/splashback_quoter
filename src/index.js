import React from 'react'
import ReactDOM from 'react-dom'

import NavBarArrows from './NavBarArrows'

import './style.scss'

let valid = {
  info: false,
  shape: false,
  size: false,
  colour: false,
  extra: false
}

class Upload {
  constructor() {
    this.id = undefined
    this.name = undefined
    this.data = undefined
  }
}

class Splashbacks_Quote {
  constructor () {
    this.client = {
      quantity: 1
    }
    this.splashbacks = []
    this.postcode = undefined
    this.extraInfo = undefined
    this.uploads = []
  }
}

class Splashback {
  constructor () {
    this.shape = undefined
    this.sizes = undefined
    this.colour = undefined
  }
}

const Quote = new Splashbacks_Quote()

class SplashbackShapeSelector extends React.Component {

  constructor () {
    super ()

    this.state = {
      selected: 'square'
    }

    Quote.splashbacks.forEach((splash, index) => {
      Quote.splashbacks[index].shape = 'square'
    })
  }

  handleChange = (e) => {
    Quote.splashbacks[this.props.index].shape = e.target.dataset.value
    this.setState({
      selected: e.target.dataset.value
    })
  }

  render () {
    return (
      <div>
        <p>Splashback #{this.props.index + 1}</p>
        <div>Currently selected: <span>{(() => {
          switch (this.state.selected) {
            case 'square': return 'Square'
            case 't-shape': return 'Upside Down T Shape'
            case 'l-shape': return 'L Shape'
            case 'custom': return 'By Upload'
            default: return 'None Selected'
          }
        })()}</span></div>
        <div className="splash-shape">
          <img alt="" className={(this.state.selected === 'square') ? 'shape-active' : null} data-value="square" onClick={this.handleChange} src="square.svg" />
            
          <img alt="" className={(this.state.selected === 't-shape') ? 'shape-active' : null} data-value="t-shape" onClick={this.handleChange} src="t-shape.svg" />
            
          <img alt="" className={(this.state.selected === 'l-shape') ? 'shape-active' : null} data-value="l-shape" onClick={this.handleChange} src="l-shape.svg" />
            
          <img alt="" className={(this.state.selected === 'custom') ? 'shape-active' : null} data-value="custom" onClick={this.handleChange} src="custom.svg" />
        </div>
      </div>
    )
  }

}

class SplashbackSizeSelector extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.type === "square") {
      this.state = {
        a: "",
        b: "",
        cutouts: ""
      };
    } else if (this.props.type === "custom") {
      this.state = {
        uploadId: "",
        cutouts: ""
      };
    } else {
      this.state = {
        a: "",
        b: "",
        c: "",
        d: "",
        cutouts: ""
      };
    }
  }

  handleChange = e => {
    let temp = String(e.target.value);
    this.state[e.target.name]
      .toString()
      .split("")
      .forEach(char => {
        temp = temp.replace(char, "");
      });
    if (!temp.match(/[0-9]/g) && temp !== "") return false;

    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        let noUndefined = true;
        Object.keys(this.state).forEach(key => {
          console.log(`${key} - ${this.state[key]}`);
          if (!this.state[key]) noUndefined = false;
        });
        valid.size = noUndefined;

        Quote.splashbacks[this.props.index].sizes = this.state;
      }
    );
  };

  handleFileUpload = e => {
    const input = e.target.files[0];
    const id = crypto
      .getRandomValues(new Uint8Array(4))
      .toString(15)
      .replace(/,/g, "");
    const reader = new FileReader();
    const upload = new Upload();

    upload.id = id;
    upload.name = input.name;

    reader.onload = () => {
      upload.data = reader.result;
      Quote.uploads.push(upload);
      this.setState({ uploadId: id, previewData: reader.result });
    };

    reader.readAsDataURL(input);
  };

  getUploadSource = () => {
    Quote.uploads.forEach((upload, index) => {
      if (upload.id === this.state.uploadId) return index;
    });
  };

  render() {
    let entryFields = [];
    switch (this.props.type) {
      case "square":
        entryFields.push(
          <div key="main">
            <img alt="" src={`${this.props.type}.svg`} />
            <div>
              <span>a: </span>
              <input
                name="a"
                onChange={this.handleChange}
                value={this.state.a}
              />
              <span> mm </span>
            </div>
            <div>
              <span>b: </span>
              <input
                name="b"
                onChange={this.handleChange}
                value={this.state.b}
              />
              <span> mm </span>
            </div>
            <div>
              <span>Cutouts: </span>
              <input
                name="cutouts"
                onChange={this.handleChange}
                value={this.state.cutouts}
              />
            </div>
          </div>
        );
        break;
      case "custom":
        entryFields.push(
          <div key="main">
            <img alt="" src={this.state.previewData || undefined} />
            <input type="file" onChange={this.handleFileUpload} />
            <div>
              <span>Cutouts: </span>
              <input name="cutouts" onChange={this.handleChange} />
            </div>
          </div>
        );
        break;
      default:
        entryFields.push(
          <div key="main">
            <img alt="" src={`${this.props.type}.svg`} />
            <div>
              <span>a: </span>
              <input name="a" onChange={this.handleChange} />
              <span> mm </span>
            </div>
            <div>
              <span>b: </span>
              <input name="b" onChange={this.handleChange} />
              <span> mm </span>
            </div>
            <div>
              <span>c: </span>
              <input name="c" onChange={this.handleChange} />
              <span> mm </span>
            </div>
            <div>
              <span>d: </span>
              <input name="d" onChange={this.handleChange} />
              <span> mm </span>
            </div>
            <div>
              <span>Cutouts: </span>
              <input name="cutouts" onChange={this.handleChange} />
              <span></span>
            </div>
          </div>
        );
        break;
    }
    return (
      <div>
        <p>Splashbacks #{this.props.index + 1}</p>
        {entryFields}
      </div>
    );
  }
}


class SplashbackColourSelector extends React.Component {

  handleChange = (e) => {
    Quote.splashbacks[this.props.index].colour = e.target.value
  }

  render () {

    let normal = [<div>
<img alt="" src={`${Quote.splashbacks[this.props.index].shape}.svg`} />
        {(() => {
          let out = []
          Object.keys(Quote.splashbacks[this.props.index].sizes).forEach(key => {
          out.push(<p>{key}: <b>{Quote.splashbacks[this.props.index].sizes[key] || 'Not Specified'}</b> {(key === 'cutouts') ? '' : 'mm'}</p>)          
          })
          return out
        })()}
    </div>]

    let custom = [<div>
      <img alt="" src={Quote.splashbacks[this.props.index].previewData} />
    </div>]

    return (
      <div>
        <p>Splashback #{this.props.index + 1}</p>
        {(() => { return (Quote.splashbacks[this.props.index].shape === 'custom') ? custom : normal })()}
        <select onChange={this.handleChange}>
          <option>Backpainted: RAL, Dulux, F&B or BSI</option>
          <option>Clear</option>
          <option>Special Finish (Please specify on the final page)</option>
        </select>
      </div>
    )
  }
}

class Info extends React.Component {
  constructor () {
  	super ()
    this.state = {
      name: Quote.client.name || undefined,
      phone: Quote.client.phone || undefined,
      email: Quote.client.email || undefined,
      quantity: Quote.client.quantity || 1
    }
  }
  
  updateQuote = (e) => {  
    if (e.target.name === 'quantity') {
      let temp = String(e.target.value)
      this.state.quantity.toString().split('').forEach(char => {
        temp = temp.replace(char, '')
      })
      if (!temp.match(/[0-9]| /g) && temp !== '') return false
    }

    Quote.client[e.target.name] = e.target.value

    Quote.splashbacks = []

    for (let i = 0; i < Quote.client.quantity; i++) {
      Quote.splashbacks.push(new Splashback())
    }
    
    valid.info = (Quote.client.name
      && Quote.client.phone
      && Quote.client.email
      && Quote.client.quantity >= 1) ? true : false

    this.setState({
    	[e.target.name]: e.target.value
    })
  }

  componentDidMount () {
    this.updateQuote({
      target: {
        name: 'quantity',
        value: Quote.client.quantity || 1
      }
    })
  }
  
  render () {
    return (
      <div className="info">
        <h3>A little about you ... </h3>
        <div className="info-form">
          <div>
            <div>Name</div>
            <div><input onChange={this.updateQuote} name="name" value={this.state.name} placeholder={"Name ... "} /></div>
          </div>
          <div>
            <div>Phone Number</div>
            <div><input onChange={this.updateQuote} name="phone" placeholder={"Phone Number ... "} value={this.state.phone} /></div>
          </div>
          <div>
            <div>E-Mail Address</div>
            <div><input onChange={this.updateQuote} name="email" placeholder={"Email Address ... "} value={this.state.email} /></div>
          </div>
          <div>
            <div>Pieces Required</div>
            <div><input onChange={this.updateQuote} name="quantity" value={this.state.quantity} placeholder={"Name ... "} /></div>
          </div>
        </div>
        <p>
          Privacy Policy reminder:
        </p>
        <p>
          Data entered through this form is submitted only to us (PAR Glass) and is not shared with any other third parties.
        </p>
        <p>
          By using this tool you agree to our privacy policy.
        </p>
        <p>
          See our full privacy policy at https://www.parglass.co.uk/privacy-policy/
        </p>
      </div>  
  	)
  }
}

class Shape extends React.Component {
  render () {
    let out = []
    Quote.splashbacks.forEach((splash, index) => {
      out.push(<SplashbackShapeSelector index={index} key={index} />)
    })
    return (
      <div className="Shape">
        <h3>Please select the shape ... </h3>
        {out}
      </div>
    )
  }
}

class Size extends React.Component {
  render () {
    let out = []
    Quote.splashbacks.forEach((splash, index) => {
      out.push(<SplashbackSizeSelector index={index} key={index} type={splash.shape} />)
    })
    return (
      <div>
        <h3>Please enter the Sizes & # of Cutouts ... </h3>
        <div className="Size">
          {out}
        </div>
      </div>
    )
  }
}

class Colour extends React.Component {
  render () {
    let out = []
    Quote.splashbacks.forEach((splash, index) => {
      out.push(
        <SplashbackColourSelector index={index} key={index} />
      )
    })
    return (
      <div className="Colour">
        <h3>Please select the colours ... </h3>
        {out}
      </div>
    )
  }
}

class Extra extends React.Component {
  handleChange = (e) => {
    Quote[e.target.name] = e.target.value
  }

  render () {
    return (
      <div className="Extra">
        <p>Do you require delivery or installation? Please enter your postcode below</p>
        <input name="postcode" onChange={this.handleChange} />
        <p>Anything else?</p>
        <textarea name="extraInfo" onChange={this.handleChange}></textarea>
      </div>
    )
  }
}

class Loader extends React.Component {
  constructor () {
    super()
    this.state = { body: '' }
  }

  componentDidMount () {
    fetch('/quote_request.php', {
      method: 'post',
      body: JSON.stringify(Quote)
    }).then(res => {
      this.setState({ body: res.body })
    })
  }

  render () {
    return (
      <p>{this.state.body}</p>
    )
  }
}

class App extends React.Component {
  constructor () {    
    super()
    this.state = {
      step: 1,
      visible: true,
      backButtonText: `Cancel`,
      nextButtonText: `Next`
    }
  }
  
	getComponent = () => {
    	switch (this.state.step) {
          case 1: return <Info />
          case 2: return <Shape />
          case 3: return <Size />
          case 4: return <Colour />
          case 5: return <Extra />
          default: return new Error()
        }
    }
  
	backButton = () => {
      switch (this.state.step) {          
        case 1:
          this.setState({ visible: false })
          window.close()
          break;
        case 2:
          this.setState({ step: 1, backButtonText: `Cancel` })
          break;
        case 3:
          this.setState({ step: 2 })
          break;
        case 4:
          this.setState({ step: 3 })
          break;
        case 5:
          this.setState({ step: 4, nextButtonText: `Submit` })
          break;
        default:
          return new Error()
      }
  }
    
    nextButton = () => {
      switch (this.state.step) {          
        case 1:
          if (valid.info) {
            this.setState({ step: 2, backButtonText: `Back` })
          } else alert("Please fill in all boxes")
          break
        case 2:
          this.setState({ step: 3 })
          break
        case 3:
            if (valid.size) {
              this.setState({ step: 4 })
            } else alert("Please fill in all boxes")
          break
        case 4:
          this.setState({ step: 5, nextButtonText: `Submit` })
          break
        case 5:
          ReactDOM.render(<Loader />, document.getElementById('qrc'))
          break
        default:
          return new Error()
      }
    }
  
  render () {
    return (
      <div style={{
        	display: (this.state.visible) ? `initial` : `none`
        }}>
      	<div className="nav-container">
          <button onClick={this.backButton}>{this.state.backButtonText}</button>
          <div className="q-nav">
            <NavBarArrows step={this.state.step} />
          </div>
          <button onClick={this.nextButton}>{this.state.nextButtonText}</button>
        </div>
        <div>
          {this.getComponent()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('qrc'))