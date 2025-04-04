import React, { useEffect, useState } from "react";
import ViewSearhProducthook from "../product/view-search-products-hook";

const NavbarSearchHhook = () => {
  const [items, pageCount, getPage, getProduct] = ViewSearhProducthook();
  const [searchWord, setSearchWord] = useState("");
  const onChangeSearch = (e) => {
    // LocalStorage est une API du navigateur qui permet de stocker des données de manière persistante dans le navigateur web. Elle est souvent utilisée en combinaison avec React pour stocker des données localement dans une application React.
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    // KANHDEDO PATHNAME DE PAGE LI HNA FIHA
    const path = window.location.pathname;
    // if(searchWord == ""){
    //   window.location.href =path
    // }
    if (path != "/Product") {
      // katdina l href link
      window.location.href = "/Product";
    }
  };
  //
  useEffect(() => {
    // katkhli function t3tel hta ikteb 3la khatro wla isuprimer hit fl3adia atle3 erreur
    // t3tel request matsaftch hta n ajout wla nsuprim li bghina
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);

  return [onChangeSearch, searchWord];
};

export default NavbarSearchHhook;
