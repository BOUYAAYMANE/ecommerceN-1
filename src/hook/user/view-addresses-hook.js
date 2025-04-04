import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAddress } from "../../redux/actions/userAddressesAction";

const ViewAddressesHook = () => {
  const disptach = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await disptach(getAllUserAddress());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.userAddressesReducer.allAddresses);
  const response = res.data
  return [response];
};

export default ViewAddressesHook;
