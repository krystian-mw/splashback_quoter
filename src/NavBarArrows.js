import React from 'react'

const NavBarArrows = (props) => {
    let FILLS = {}  
    switch (props.step) {
      case 1:
        FILLS = {
          Info: {
            fill: '#5dc172',
            text: 'white'
          },
          Size: {
            fill: '#e9e9e9',
            text: 'black'
          },
          Shape: {
            fill: '#e9e9e9',
            text: 'black'
          },
          Colour: {
            fill: '#e9e9e9',
            text: 'black'
          },
          Extra: {
            fill: '#e9e9e9',
            text: 'black'
          }
        }
        break
      case 2:
        FILLS = {
          Info: {
            fill: '#5dc172',
            text: 'white'
          },
          Shape: {
            fill: '#5dc172',
            text: 'white'
          },
          Size: {
            fill: '#e9e9e9',
            text: 'black'
          },
          Colour: {
            fill: '#e9e9e9',
            text: 'black'
          },
          Extra: {
            fill: '#e9e9e9',
            text: 'black'
          }
        }
        break
      case 3:
        FILLS = {
          Info: {
            fill: '#5dc172',
            text: 'white'
          },
          Shape: {
            fill: '#5dc172',
            text: 'white'
          },
          Size: {
            fill: '#5dc172',
            text: 'white'
          },
          Colour: {
            fill: '#e9e9e9',
            text: 'black'
          },
          Extra: {
            fill: '#e9e9e9',
            text: 'black'
          }
        }
        break
      case 4:
        FILLS = {
          Info: {
            fill: '#5dc172',
            text: 'white'
          },
          Shape: {
            fill: '#5dc172',
            text: 'white'
          },
          Size: {
            fill: '#5dc172',
            text: 'white'
          },
          Colour: {
            fill: '#5dc172',
            text: 'white'
          },
          Extra: {
            fill: '#e9e9e9',
            text: 'black'
          }
        }
        break
      case 5:
        FILLS = {
          Info: {
            fill: '#5dc172',
            text: 'white'
          },
          Shape: {
            fill: '#5dc172',
            text: 'white'
          },
          Size: {
            fill: '#5dc172',
            text: 'white'
          },
          Colour: {
            fill: '#5dc172',
            text: 'white'
          },
          Extra: {
            fill: '#5dc172',
            text: 'white'
          }
        }
        break
      default:
        throw new Error()
    }
  
  
  
    return (      
      <svg version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 150" width="100%">
  
      {/** Info */}
      <path d="M0 0L250 0L250 150L0 150L0 0Z" id="e1KKw4Jwru" stroke="#a7a7a7" strokeWidth="1" strokeOpacity="1" opacity="1" fill={FILLS.Info.fill} fillOpacity="1"></path>
  
      {/** Extra */}
      <path d="M800 0L1000 0L1000 150L800 150L800 0Z" id="ez1AN0FVO" stroke="#a7a7a7" strokeWidth="1" strokeOpacity="1" opacity="1" fill={FILLS.Extra.fill} fillOpacity="1"></path>
  
      {/** Colour */}
      <path d="M800 0L850 75L800 150L600 150L650 75L600 0L800 0Z" id="aWBMOeZlD" stroke="#a7a7a7" strokeWidth="1" strokeOpacity="1" opacity="1" fill={FILLS.Colour.fill} fillOpacity="1"></path>
  
      {/** Size */}
      <path d="M600 0L650 75L600 150L400 150L450 75L400 0L600 0Z" id="bzY3yfqH" stroke="#a7a7a7" strokeWidth="1" strokeOpacity="1" opacity="1" fill={FILLS.Size.fill} fillOpacity="1"></path>
    
      {/** Shape */}
      <path d="M400 0L450 75L400 150L200 150L250 75L200 0L400 0Z" id="aDZh3rmaJ" stroke="#a7a7a7" strokeWidth="1" strokeOpacity="1" fill={FILLS.Shape.fill} fillOpacity="1"></path>
    
      {/** Extra Tick */}
      <path d="M929.07 102.98L929.07 102.98L910.53 125L876.19 84.22L894.73 62.2L910.53 80.96L957.65 25L976.19 47.02L929.07 102.98Z" id="c2k1NmCsjz" opacity="1" fill={FILLS.Extra.text} fillOpacity="1"></path>
  
      {/** Info text */}
      <text id="a10tLP7hDg" x="152.64" y="79.5" fontSize="40" fontFamily="Montserrat" fontWeight="normal" fontStyle="normal" letterSpacing="0" alignmentBaseline="before-edge" transform="matrix(1 0 0 1 -95.49975448619041 -28.999999999999687)" style={{"lineHeight":"100%"}} opacity="1" fill={FILLS.Info.text} fillOpacity="1">
      <tspan x="152.64" dy="0em" alignmentBaseline="before-edge" dominantBaseline="text-before-edge" textAnchor="start">INFO</tspan>
      </text>
  
      {/** Shape text */}
      <text id="b568VyLYuq"  opacity="1" fill={FILLS.Shape.text} fillOpacity="1" x="152.64" y="79.5" fontSize="40" fontFamily="Montserrat" fontWeight="normal" fontStyle="normal" letterSpacing="0" alignmentBaseline="before-edge" transform="matrix(1 0 0 1 115.02253313516884 -28.999999999999687)" style={{"lineHeight":"100%"}}>
      <tspan x="152.64" dy="0em" alignmentBaseline="before-edge" dominantBaseline="text-before-edge" textAnchor="start">SHAPE</tspan></text>
      
      {/** Size text */}
      <text id="bqFfZJ2pa" opacity="1" fill={FILLS.Size.text} fillOpacity="1" x="152.64" y="79.5" fontSize="40" fontFamily="Montserrat" fontWeight="normal" fontStyle="normal" letterSpacing="0" alignmentBaseline="before-edge" transform="matrix(1 0 0 1 335.2596089557883 -28.999999999999687)" style={{"lineHeight":"100%"}}><tspan x="152.64" dy="0em" alignmentBaseline="before-edge" dominantBaseline="text-before-edge" textAnchor="start">SIZE</tspan></text>
      
      {/** Colour text */}
      <text id="b3OXAhNXAZ" opacity="1" fill={FILLS.Colour.text} fillOpacity="1" x="152.64" y="79.5" fontSize="40" fontFamily="Montserrat" fontWeight="normal" fontStyle="normal" letterSpacing="0" alignmentBaseline="before-edge" transform="matrix(1 0 0 1 500.6592633709532 -28.999999999999687)" style={{"lineHeight":"100%"}}><tspan x="152.64" dy="0em" alignmentBaseline="before-edge" dominantBaseline="text-before-edge" textAnchor="start">COLOUR</tspan></text>
      </svg>  
    )
  }

export default NavBarArrows