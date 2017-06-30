/**
 * Created by changjin.zhang on 4/17/2017.
 */
import React,{Component} from 'react';
import {Nav,NavItem,InputGroup,FormGroup,FormControl,Button,ButtonToolbar,ButtonGroup,Glyphicon,Row,Col} from 'react-bootstrap';

import '../index.scss';
import Footer from '../../../component/Footer';
class Home extends Component{
    render(){
        return (
            <div className="cj-main">
                <header className="cj-header">
                    <InputGroup>
                        <FormControl type="text" />
                        <InputGroup.Button bsStyle="primary"><Button><Glyphicon glyph="search"/></Button></InputGroup.Button>
                    </InputGroup>
                </header>
                <article className="cj-content container">
                    <img className="cj-bg" src={require("../../../assets/img/bg.png")} />
                    <div className="cj-bg2"> </div>
                    home
                </article>
                <Footer/>
            </div>
        );
    }
}
export default Home;