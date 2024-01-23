import React from "react";
import "./Subscription.css"
import {subscriptions} from "../../data/Data";
import {alertIcon, plusIcon} from "../../helpers/Icon";

const Subscription = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Subscriptions</h3>
            <button className="grid-c-title-icon">{plusIcon({width:20,height:20})}</button>
        </div>
        <div className="grid-c5-content">
            <div className="grid-items">
                {subscriptions.map((subscription) => (
					<div className="grid-item" key = {subscription.id}>
						<div className="grid-item-l">
							<div className="icon">{alertIcon({width:20,height:20})}</div>
							<p className="text text-silver-v1">{subscription.title} <span>due {subscription.due_date}</span></p>
						</div>
						<div className="grid-item-r">
							<span className="text-silver-v1">$ {subscription.amount}</span>
						</div>
					</div>
				))}
            </div>
        </div>
    </div>
  )
}
export default Subscription