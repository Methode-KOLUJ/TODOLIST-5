import React from "react"

export const Lelo = () => {

    const today = new Date()
    const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

    const nomJours = days[today.getDay()];
    
    const Jour = String(today.getDate()).padStart(2, "0")
    const Mois = String(today.getMonth() + 1).padStart(2, "0");
    const Année = String(today.getFullYear());

    const LaDate = `${nomJours} ${Jour}. ${Mois}. ${Année}`

    return <>
    {LaDate}
    </>
}