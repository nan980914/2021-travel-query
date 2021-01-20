
import React, { useEffect, useState } from "react";
import './card.less';
import { CityData } from '../index'

interface Props {
    data: CityData[]
    type: string
}

const TravelCard: React.FC<Props> = (props) => {
    const { data, type } = props;
    const { city, leave_policy_date, leave_policy, back_policy, back_policy_date, poi_list } = data[0];

    const poiArea = () => {
        if(poi_list.length) {
            return <div className="tab high">中高风险地区{poi_list.length}个</div>
        } else {
            return <div className="tab low">低风险地区</div>
        }
    }

    const policyDate = () => {
        if(type === 'from' && leave_policy_date) {
            return <div className="time">政策发布时间：{leave_policy_date}</div>
        } else if(type === 'to' && back_policy_date) {
            return <div className="time">政策发布时间：{back_policy_date}</div>
        } else {
            return null
        }
    }

    return (
        <div className="card-wrapper">
            <div className="title-wrapper">
                <div className="card-title">{type === 'from' ? '出发地' : '目的地'}:{city}</div>
                {poiArea()}
            </div>
            <div className="tips-and-time">
                <div className="tips">数据来源于当地卫健委</div>
                {policyDate()}
            </div>
            <div className="policy">{type === 'from' ? leave_policy : back_policy}</div>
        </div>
    )
}

export default TravelCard