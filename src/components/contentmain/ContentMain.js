import React from "react";
import "./ContentMain.css";
import Card from "../cards/Card";
import Transaction from "../transactions/Transaction";
import Report from "../report/Report";
import Budget from "../report/Report";
import Subscription from "../subscriptions/Subscription";
import Saving from "../savings/Saving";
import Loan from "../loans/Loan";
import Financial from "../financial/Financial";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Card/>
            <Transaction/>
            <Report/>
        </div>
        <div className="content-grid-two">
            <Budget/>
            <div className="grid-two-item">
                <div className="subgrid-two">
                    <Subscription/>
                    <Saving/>
                </div>
            </div>
            <div className="grid-two-item">
                <div className="subgrid-two">
                    <Loan/>
                    <Financial/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain