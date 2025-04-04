import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import notify from '../../component/utilitys/ToastNotify';
import { verifyPassword } from '../../redux/actions/authAction';


const VerifyPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [code, setCode] = useState('')
    const [loading, setLoading] = useState(true)


    const OnChangeCode = (e) => {
        setCode(e.target.value)
    }

    const onSubmit = async () => {
        if (code === "") {
            notify("من فضلك ادخل الكود", "Error")
            return
        }
        setLoading(true)
        await dispatch(verifyPassword({
            resetCode: code
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.authReducer.verifyPassword)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.data.status === "Success") {
                    notify("كود التفعيل صحيح", "success")
                    setTimeout(() => {
                        navigate("/user/reset-password")
                    }, 1500);
                }
                if (res.data.status === "fail") {
                    notify("الكود خاطئ او انتهت صلاحيته", "Error")
                }
            }
        }
    }, [loading])

    return [code, OnChangeCode, onSubmit]
}

export default VerifyPasswordHook