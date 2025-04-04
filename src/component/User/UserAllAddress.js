import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewAddressesHook from "../../hook/user/view-addresses-hook";
import UserAddressCard from "./UserAddressCard";
import { useTheme } from "@mui/system";

const UserAllAddress = () => {
  const [response] = ViewAddressesHook();
  const theme = useTheme();
  
  return (
    <div>
      <div  style={{ color: theme.palette.text.primary }} className="admin-content-text pb-4">Addresses</div>
      {response ? (
        response.map((item, index) => {
          return <UserAddressCard key={index} item={item} />;
        })
      ) : (
        <h6  style={{ color: theme.palette.text.primary }}>There are no Address  yet</h6>
      )}

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button  style={{ backgroundColor: theme.palette.button.main, color: theme.palette.text.primary }} className="btn-add-address">Add address</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddress;
