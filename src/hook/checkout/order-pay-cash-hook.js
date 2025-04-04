import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { createOrderCash } from '../../redux/actions/checkoutAction';
import { getOneUserAddress } from '../../redux/actions/userAddressesAction';
import GetAllUserCartHook from './../cart/get-all-user-cart-hook';
import notify from '../../component/utilitys/ToastNotify';

const OrderPayCashHook = () => {
    // loading de data adress
    const [loading, setLoading] = useState(true);
    const [loadingCreate, setLoadingCreate] = useState(true);
    const [addressDetalis, setAddressDetalis] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [, , , , , cartID] = GetAllUserCartHook()
    // console.log(addressDetalis)
    //when change address by user
    const handelChooseAddress = (e) => {
        setAddressDetalis([])
        if (e.target.value != '0')
        // pour dispatch sur id de adress
            get(e.target.value);
    }

    const get = async (id) => {
        setLoading(true)
        await dispatch(getOneUserAddress(id))
        setLoading(false)
    }

    //get address detalis for user
    const resAddress = useSelector(state => state.userAddressesReducer.oneAddress)
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAddressDetalis(resAddress.data)
            } else
                setAddressDetalis([])
        }
    }, [loading])



    //when user click
    const handelCreateOrderCash = async () => {
        if (cartID === '0') {
            notify("من فضلك اضف منتجات الى العربه اولا", "warning")
            return
        }
        if (addressDetalis.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warning")
            return
        }
        setLoadingCreate(true)
        await dispatch(createOrderCash(cartID, {
            shippingAddress: {
                details: addressDetalis.alias,
                phone: addressDetalis.phone,
                city: addressDetalis.city,
                postalCode: addressDetalis.postalCode
            }
        }))
        setLoadingCreate(false)
    }


    //get response for create order cash
    const resOrserCash = useSelector(state => state.checkoutReducer.createOrderCash)
    useEffect(() => {
        if (loadingCreate === false) {
            if (resOrserCash && resOrserCash.status === 201) {
                notify("تم انشاء طلبك بنجاح", "success")
                setTimeout(() => {
                    navigate('/user/allorders')
                }, 1500);
            } else {
                notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warning")
            }
        }
    }, [loadingCreate])


    return [handelChooseAddress, addressDetalis, handelCreateOrderCash]

}

export default OrderPayCashHook