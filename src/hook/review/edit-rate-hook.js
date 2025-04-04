import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  updateReviewOnProduct } from './../../redux/actions/reviewAction';
import notify from '../../component/utilitys/ToastNotify';
const EditRateHook = (review) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)

    const [newRateText, setNewRateText] = useState(review.review);
    const [newRateValue, setNewRateValue] = useState(review.rating);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const onChangeRateText = (e) => {
        setNewRateText(e.target.value)
    }
    const OnChangeRateValue = (val) => {
        setNewRateValue(val)
    }

    const handelEdit = async () => {
        setLoading(true)
        await dispatch(updateReviewOnProduct(review._id, {
            review: newRateText,
            rating: newRateValue
        }))
        setLoading(false)
        handleCloseEdit();
    }
    const res = useSelector(state => state.reviewReducer.updateReview)

    useEffect(() => {
        if (loading === false) {
           //console.log(res)
            if (res.status && res.status === 200) {
                notify("Rating has been modified successfully"
                , "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
            else
                notify("There is a problem with the editing process."
                    , "Error")
        }
    }, [loading])

    return [showEdit, handleCloseEdit, handleShowEdit, handelEdit, onChangeRateText, newRateText, OnChangeRateValue, newRateValue]

}


export default EditRateHook