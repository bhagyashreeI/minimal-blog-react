

import  Box  from "@mui/material/Box";
import { Typography } from '@mui/material';

const Footer = () =>{

    return <div style={{ display: "flex", background: "#212529", color: "#fff", padding: "20px" }}>
        <div style={{ flexGrow: 1 }}>
          <Typography color="#fff" variant="h6" gutterBottom>
            Contact the Publisher
          </Typography>
          <Typography color="#E5E5E5" fontSize="12px">
            mike@runo.com
          </Typography>
          <Typography color="#E5E5E5" fontSize="12px">
            +944 450 904 505
          </Typography>
        </div>
        <div style={{ flexGrow: 1 }}>
          <Typography color="#fff" variant="h6" gutterBottom>
            Explorate
          </Typography>
          <ul   style={{ listStyle: "none", fontSize: "12px",color:"#E5E5E5", padding: "0px" }}>
            <li>About</li>
            <li>Partners</li>
            <li>Job Opportunities</li>
            <li>Advertise</li>
            <li>Membership</li>
          </ul>
        </div>
        <div style={{ flexGrow: 1 }}>
          <Typography color="#fff" variant="h6" gutterBottom>
            Headquarter
          </Typography>
          <Typography color="#E5E5E5" fontSize="12px">
            191 Middleville Road,<br /> NY 1001,<br /> Sydney Australia
          </Typography>
        </div>
      </div>;
}

export default Footer