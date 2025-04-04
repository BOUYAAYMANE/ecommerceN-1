import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAddress } from "../../redux/actions/userAddressesAction";
import { useNavigate } from "react-router-dom";
import notify from "../../component/utilitys/ToastNotify";

const AddAddressHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alias, setAlias] = useState("");
  const [detalis, setDetalis] = useState("");
  const [city, setCity] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeAlias = (event) => {
    event.persist();
    setAlias(event.target.value);
  };

  const onChangeDetalis = (event) => {
    event.persist();
    setDetalis(event.target.value);
  };

  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };

  const onChangeCity = (event) => {
    event.persist();
    setCity(event.target.value);
  };
  const onChangeCodePostal = (event) => {
    event.persist();
    setCodePostal(event.target.value);
  };

  const onSubmit = async () => {
    if (alias === "" || detalis === "" || phone === "") {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      addUserAddress({
        alias: alias,
        details: detalis,
        phone: phone,
        city: city,
        postalCode: codePostal,
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.userAddressesReducer.addUserAddress);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تمت اضافة العنوان بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 1000);
      } else {
        notify("هناك مشكله فى عملية الاضافة ", "error");
      }
    }
  }, [loading]);

  return [
    alias,
    detalis,
    phone,
    city,
    codePostal,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    onChangeCity,
    onChangeCodePostal,
    onSubmit,
  ];
};

export default AddAddressHook;
