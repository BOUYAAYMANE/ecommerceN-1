import React, { useEffect, useState } from 'react'
import notify from '../../component/utilitys/ToastNotify';
import { useDispatch, useSelector } from 'react-redux';
import avatar from "../../assets/Image/avatar.png";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { creatBrand } from '../../redux/actions/brandAction';


export const Addbrandhook = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [loadingS, setLoading] = useState(true);
       // ila click 3la button
    const [IsPress, setIsPress] = useState(false);
    // change name state
    const onChangeName= (e) =>{
        e.persist();
        setName(e.target.value)
    }
    //   WHEN IMAGE CHANGE SAVE IT
    const onImageChange = (event) => {
      // event.target.files => return dakchy litakhtar f input file //derna l cond bach itakhtar a 1 file (photo)
      if (event.target.files && event.target.files[0]) {
        // URL.createObjectURL(est de fournir une URL temporaire qui représente l'objet spécifié ) pour affichage dans site
        setImg(URL.createObjectURL(event.target.files[0]));
        //pour formdata avec son URL VRAIS
        setSelectedFile(event.target.files[0]);
      }
    };
  
    const res = useSelector((state)=>state.allBrand.brand)
  
    // save date in database
    const handelSubmit = async (event) => {
      event.preventDefault();
      if (name === "" || selectedFile===null) {
        notify("من فضلك اكمل البيانات","warning")
        return;
      }
      // create new form data pour insertion de data qui est d image
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", selectedFile);
      // bach nchofo wach dkhlo les donne wla mazal
      setLoading(true);
      setIsPress(true);
      await dispatch(creatBrand(formData));
      setLoading(false);
    };
    //
    useEffect(() => {
      if (loadingS === false) {
        setImg(avatar);
        setName("");
        setSelectedFile(null);
        // hna bach l autre add
        setLoading(true);
        // setTimeout de js => Katmeded haja fwahed periode
        setTimeout(()=>setIsPress(false) , 1000) 
        
        if(res.status === 201)
        {
          notify("success","Success")
        } else {
          notify("il y'a une prob","Error")
        }
      }
      // veridier cond de loadingS
    }, [loadingS]);
  return [img,name,handelSubmit,onImageChange,loadingS,IsPress,onChangeName]
}
