import React, { useState, useEffect } from "react";

interface InfoProps {
id: string | number;
visible: string;
}

export default function StationsInfo({ id, visible }: InfoProps) {
  const [via1, setVia1] = useState("Loading...")
  const [via2, setVia2] = useState("Loading...")

  useEffect(() => {
    document.getElementById("info-panel-"+id)?.setAttribute("visible", visible);
    if (!visible) return

    const fetchData = async () => {
      try {
        const res = await fetch(`https://operations.metro-sevilla.es/v1/GetEstimacionHoraria/${id}`)
        const data = await res.json()
        setVia1(data.EstimacionTren1_via_1 >= 0 ? `${data.EstimacionTren1_via_1} min` : "No data")
        setVia2(data.EstimacionTren1_via_2 >= 0 ? `${data.EstimacionTren1_via_2} min` : "No data")
      } catch (e) {
        setVia1("Error")
        setVia2("Error")
      }
    }

    fetchData()
  }, [visible, id])

    return (
      <a-plane 
        id={"info-panel-"+id}
        width="1.2"
        height="0.35"
        color="black"
        position="0.3 0.3 0.02"
        visible="false">
        <a-text value={"OLIVAR DE QUINTOS: " + via1} width="2" position="-0.55 0.075 0"/>
        <a-text value={"CIUDAD EXPO: " + via2} width="2" position="-0.55 -0.075 0"/>
      </a-plane>
    )
}