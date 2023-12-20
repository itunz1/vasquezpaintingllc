"use client"
import React from "react";
import { useState } from "react";
import english from "@/lang/en-US.json";
import spanish from "@/lang/es-MX.json";
import { IntlProvider } from "react-intl"

const langContext = React.createContext();


function LangProvider({children}) {

    const [msg, setMsg] = useState(english);
    const [locale, setLocale] = useState('en-US');

    const changeLang = (lang) => {
        switch(lang) {
            case "es-MX":
                setMsg(spanish);
                setLocale('es-MX');
                break;
            case "en-US":
                setMsg(english);
                setLocale('en-US');
                break;
            default:
                setMsg(english);
                setLocale('en-US');
        }
    };

  return (
    <langContext.Provider value={{changeLang: changeLang, state: locale}}>
        <IntlProvider locale={locale} messages={msg}>
        {children}
        </IntlProvider>
    </langContext.Provider>
  )
}

export {LangProvider, langContext};