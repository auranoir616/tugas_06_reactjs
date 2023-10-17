import React, {Component}  from "react";
import "../style/Header.css"
import { Link } from "react-router-dom"

class Header extends Component{
    render(){
        return(
            <div id="head">
                <table style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            <center>
                          <td>
                            <h2>
                                <Link to="/" classname="link">Home</Link>
                                </h2>
                                </td>
                                <td>
                            <h2>
                                <Link to="/menu_makanan" classname="link">Makanan</Link>
                                </h2>
                                </td>
                                <td>
                            <h2>    
                            <Link to="/menu_minuman" classname="link">Minuman</Link>
                            </h2>
                                </td>
                                <td>
                            <h2> 
                                <Link to="/kontak" classname="link">Kontak</Link>
                                </h2>
                                </td>
                        </center>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
} 

export default Header