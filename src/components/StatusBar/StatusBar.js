import React, { Component } from "react";
 import "./StatusBar.css";
 import Avatar from '@mui/material/Avatar';
 import statusimg  from "../../images/pp1.png";
 
 class StatusBar extends Component {
    constructor(props) {
          super(props);
          this.state = { }
  }
          render() {
                 return (
                    <div> 
                        <div className="statusbar_container">
                            
                         <div className=  "status"> 
                             <Avatar className="statusbar_status " src={statusimg} />
                             <div className="statusbar_text " >agg_2323</div>
                               </div>
                               <div className=  "status"> 
                             <Avatar className="statusbar_status " src={statusimg} />
                             <div className="statusbar_text " >fd_8</div>
                               </div>
                               <div className=  "status"> 
                             <Avatar className="statusbar_status " src={statusimg} />
                             <div className="statusbar_text " >ss_10</div>
                               </div>
                               <div className=  "status"> 
                             <Avatar className="statusbar_status " src={statusimg} />
                             <div className="statusbar_text " >oo_89</div>
                             
                               </div>
                               <div className=  "status"> 
                             <Avatar className="statusbar_status " src={statusimg} />
                             <div className="statusbar_text " >rutu_29</div>
                               </div>
                               <div className=  "status"> 
                             <Avatar className="statusbar_status " src={statusimg} />
                             <div className="statusbar_text " >tt_00</div>
                               </div>
                               <div className=  "status"> 
                             <Avatar className="statusbar_status " src={statusimg} />
                             <div className="statusbar_text " >uu_0</div>
                               </div>
                               <div className=  "status"> 
                             <Avatar className="statusbar_status " src={statusimg} />
                             <div className="statusbar_text " >kk_8</div>
                               </div>
                               <div className=  "status"> 
                             <Avatar className="statusbar_status " src={statusimg} />
                             <div className="statusbar_text " >ii_3</div>
                               </div>
                        </div>
                        

                    </div>
                 );
          }
}

export default  StatusBar;