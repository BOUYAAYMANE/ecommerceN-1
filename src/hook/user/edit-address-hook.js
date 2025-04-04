import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneUserAddress,
  editUserAddress,
} from "./../../redux/actions/userAddressesAction";
import { useNavigate } from "react-router-dom";
import notify from "../../component/utilitys/ToastNotify";

const EditAddressHook = (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(true);
  const [alias, setAlias] = useState("");
  const [detalis, setDetalis] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [codePostal, setCodePostal] = useState("");

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

  // recuper data de l'adress choisi par id
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getOneUserAddress(id));
      setLoading(false);
    };
    get();
  }, []);

  const resAddress = useSelector(
    (state) => state.userAddressesReducer.oneAddress
  );
  useEffect(() => {
    if (loading === false) {
      if (resAddress && resAddress.status === "success") {
        setAlias(resAddress.data.alias);
        setDetalis(resAddress.data.details);
        setPhone(resAddress.data.phone);
        setCity(resAddress.data.city);
        setCodePostal(resAddress.data.postalCode);
      }
    }
  }, [loading]);
  // changer data
  const handelEdit = async () => {
    setLoadingEdit(true);
    await dispatch(
      editUserAddress(id, {
        alias,
        details: detalis,
        phone,
      })
    );
    setLoadingEdit(false);
  };
  const resEdit = useSelector(
    (state) => state.userAddressesReducer.editAddress
  );
  useEffect(() => {
    if (loadingEdit === false) {
      if (resEdit && resEdit.status === 200) {
        notify("تمت عملية التعديل بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 1000);
      } else {
        notify("فشل فى عملية التعديل", "error");
      }
    }
  }, [loadingEdit]);

  return [
    handelEdit,
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
  ];
};

export default EditAddressHook;
