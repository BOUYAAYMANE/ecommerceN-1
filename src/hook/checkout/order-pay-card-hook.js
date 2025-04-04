import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrderCARD } from '../../redux/actions/checkoutAction';
import notify from '../../component/utilitys/ToastNotify';
import GetAllUserCartHook from './../cart/get-all-user-cart-hook';


const OrderPayCardHook = (addressDetalis) => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [, , , , , cartID] = GetAllUserCartHook()

    //when user click
    const handelCreateOrderCARD = async () => {
        if (cartID === '0') {
            notify("من فضلك اضف منتجات الى العربه اولا", "warning")
            return
        }
        if (addressDetalis.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warning")
            return
        }
        setLoading(true)
        await dispatch(createOrderCARD(cartID, {
            shippingAddress: {
                details: addressDetalis.alias,
                phone: addressDetalis.phone,
                city: addressDetalis.city,
                postalCode: addressDetalis.postalCode
            }
            }))
        setLoading(false)
    }



    //get response for create order card
    const resOrderCard = useSelector(state => state.checkoutReducer.createOrderCard)
    console.log("ddddd"+ resOrderCard)
    useEffect(() => {
        if (loading === false) {
            if (resOrderCard && resOrderCard.status === "success") {
                //notify("تم انشاء طلبك بنجاح", "Success")
                if (resOrderCard.session.url) {
                console.log(resOrderCard.session.url)
                    window.open(resOrderCard.session.url)
                }
            } else {
                notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warning")
            }
        }
    }, [loading])


    return [handelCreateOrderCARD]


}

export default OrderPayCardHook