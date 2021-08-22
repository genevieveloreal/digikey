import React from "react";
import MyDataSection from "../components/MyDataSection";

function MyData(props) {
  return (
    <MyDataSection
      bgColor="default"
      size="medium"
      bgImage=""
      bgImageOpacity={1}
      title="Check-in History"
      subtitle="Review your previous check-ins and the information that was shared"
    />
  );
}

export default MyData;
