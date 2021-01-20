import React, { useEffect, useState } from "react";
import { Picker, List } from 'antd-mobile';
import TravelCard from './components/card'
import data from './json/json'
import queryCity from '../../service/request'
import './index.less';
import imgurl from "./image/transform.png";

interface Props { }

export interface CityData {
    back_policy: string;
    back_policy_date: string;
    back_policy_list: string[];
    city: string;
    city_id: string;
    leave_policy: string;
    leave_policy_date: string;
    leave_policy_list: string[];
    poi_list: Object[];
    provice: string;
    stay_info: string;
    stay_info_list: string[];
}

const Travel: React.FC<Props> = (props) => {
    const [from, setFrom] = useState<string[]>([])
    const [to, setTo] = useState<string[]>([])

    const [fromData, setFromData] = useState<CityData[]>([])
    const [toData, setToData] = useState<CityData[]>([])

    const changeFromArea = (v: string[]) => {

        setFrom([...v])

        queryCity(+v[1], 'from').then(res => {
            setFromData([...res.result.data])
        })
    }

    const changeToArea = (v: string[]) => {
        setTo([...v])

        queryCity(+v[1], 'to').then(res => {
            let data = res.result.data
            setToData([...data])
        })
    }

    const transform = () => {
        const fromCity = from
        const toCity = to
        const fromCityData = fromData
        const toCityData = toData
        setFrom(toCity)
        setTo(fromCity)
        setFromData(toCityData)
        setToData(fromCityData)
    }

    return (
        <div className="travel-wrapper">
            <div className="head">
                <div className="headBg"></div>
                <div className="card">
                    <List style={{ backgroundColor: 'white' }} className="picker-list" >
                        <Picker extra="请选择"
                            data={data}
                            cols={2}
                            title="选择出发地"
                            value={from}
                            itemStyle={{ width: '200px' }}
                            onOk={v => changeFromArea(v)}
                        >
                            <List.Item arrow="horizontal">出发地</List.Item>
                        </Picker>
                        <div onClick={transform} className="img1-wrapper"><img src={imgurl} className="img1"></img></div>
                        <Picker extra="请选择"
                            data={data}
                            cols={2}
                            title="选择目的地"
                            value={to}
                            className="picker-item"
                            onOk={v => changeToArea(v)}
                        >
                            <List.Item arrow="horizontal">目的地</List.Item>
                        </Picker>
                    </List>
                </div>
            </div>
            <div>{fromData.length ? <TravelCard data={fromData} type={'from'}></TravelCard> : null}</div>
            <div>{toData.length ? <TravelCard data={toData} type={'to'}></TravelCard> : null}</div>
        </div>
    )
}

export default Travel