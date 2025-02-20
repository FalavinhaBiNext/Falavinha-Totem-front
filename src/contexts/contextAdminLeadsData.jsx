import { useState } from "react";

export default function ContextAdminLeadsData() {
  const [adminLeadData, setAdminLeadData] = useState({
    leadName: "",
    leadEmail: "",
    leadPhoneNumber: "",
    leadCompanyName: "",
  });
  const [biQuestionsData, setBiQuestionsData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  const [consultoriaData, setConsultoriaData] = useState({});
  const handleSubmitLeadsData = () => {
    // e.preventDefault();
    setConsultoriaData({
      ...adminLeadData,
      ...biQuestionsData,
    });
    setAdminLeadData({});
    setBiQuestionsData({});
  };

  return {
    adminLeadData,
    setAdminLeadData,
    biQuestionsData,
    setBiQuestionsData,
    handleSubmitLeadsData,
  };
}
