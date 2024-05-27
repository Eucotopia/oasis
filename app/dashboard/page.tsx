'use client'
import React from "react";
import {Input, Spinner, Tabs} from "@nextui-org/react";
import {Tab} from "@nextui-org/tabs";
import {SearchIcon} from "@/components/icons";
import {useGetPostCountQuery} from "@/feature/api/postApi";
import {useGetColumnCountQuery} from "@/feature/api/columnApi";
import {useGetUserCountQuery} from "@/feature/api/authApi";
import ReactECharts from "echarts-for-react"
import * as echarts from 'echarts';
import {useGetCategoryCountQuery} from "@/feature/api/categoryApi";
import {useGetTagCountQuery} from "@/feature/api/tagApi";

export default function DashboardPage() {
    const {data: postCount, isLoading: isGetPostCountLoading} = useGetPostCountQuery()

    const {data: columnCount, isLoading: isGetColumnCountLoading} = useGetColumnCountQuery()

    const {data: userCount, isLoading: isGetUserCountLoading} = useGetUserCountQuery()

    const {data: categoryCount, isLoading: isGetCategoryCountLoading} = useGetCategoryCountQuery()

    const {data: tagCount, isLoading: isGetTagCountLoading} = useGetTagCountQuery();
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];

    let data = [Math.random() * 300];

    for (let i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    const option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt: any) {
                return [pt[0], '10%'];
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 10,
                show: false
            },
            {
                start: 0,
                end: 10,
                show: false
            }
        ],
        series: [
            {
                name: 'Fake Data',
                type: 'line',
                symbol: 'none',
                sampling: 'lttb',
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }
                    ])
                },
                data: data
            }
        ]
    };

    return (
        <>
            <div className={"flex flex-col gap-4"}>
                <div className={"relative w-full"}>
                    <Tabs
                        classNames={{
                            tabList: "mb-4 w-full",
                            tab: "",
                            tabContent: "",
                            panel: "w-full flex flex-row gap-6 items-center px-0",
                        }}
                        placement={"top"}
                        key={"achievement"}
                        size={'md'}
                        aria-label="achievement">
                        <Tab key="photos" title="Data Snapshot">
                            <div className={"flex flex-col flex-1 px-4 py-3 bg-content1 rounded-md gap-4"}>
                                <p className={"text-xl grid"}>Post Count</p>
                                <p className={"text-4xl"}>
                                    {
                                        isGetPostCountLoading ? (
                                            <Spinner color="secondary"/>
                                        ) : (
                                            postCount
                                        )
                                    }
                                </p>
                                <p className={"text-tiny text-default-500"}>+20% month over month</p>
                            </div>
                            <div className={"flex flex-col flex-1 p-4 py-3 bg-content1 rounded-md gap-4"}>
                                <p className={"text-xl"}>Column Count</p>
                                <p className={"text-4xl"}>
                                    {isGetColumnCountLoading ? (
                                        <Spinner color="secondary"/>
                                    ) : (
                                        columnCount
                                    )}
                                </p>
                                <p className={"text-tiny text-default-500"}>+33% month over month</p>
                            </div>
                            <div className={"flex flex-col flex-1 p-4 py-3 bg-content1 rounded-md gap-4"}>
                                <p className={"text-xl"}>User Count</p>
                                <p className={"text-4xl"}>
                                    {
                                        isGetUserCountLoading ? (
                                            <Spinner color="secondary"/>
                                        ) : (
                                            userCount
                                        )
                                    }
                                </p>
                                <p className={"text-tiny text-default-500"}>-8% month over month</p>
                            </div>
                        </Tab>
                        <Tab key="music" title="请起一个名字">
                            <div className={"flex flex-col flex-1 px-4 py-3 bg-content1 rounded-md gap-4"}>
                                <p className={"text-xl grid"}>Category Count</p>
                                <p className={"text-4xl"}>
                                    {
                                        isGetCategoryCountLoading ? (
                                            <Spinner color="secondary"/>
                                        ) : (
                                            categoryCount
                                        )
                                    }
                                </p>
                                <p className={"text-tiny text-default-500"}>+20% month over month</p>
                            </div>
                            <div className={"flex flex-col flex-1 p-4 py-3 bg-content1 rounded-md gap-4"}>
                                <p className={"text-xl"}>Tag Count</p>
                                <p className={"text-4xl"}>
                                    {isGetTagCountLoading ? (
                                        <Spinner color="secondary"/>
                                    ) : (
                                        tagCount
                                    )}
                                </p>
                                <p className={"text-tiny text-default-500"}>+33% month over month</p>
                            </div>
                            <div className={"flex flex-col flex-1 p-4 py-3 bg-content1 rounded-md gap-4"}>
                                <p className={"text-xl"}>Column Count</p>
                                <p className={"text-4xl"}>
                                    {
                                        isGetUserCountLoading ? (
                                            <Spinner color="secondary"/>
                                        ) : (
                                            userCount
                                        )
                                    }
                                </p>
                                <p className={"text-tiny text-default-500"}>-8% month over month</p>
                            </div>
                        </Tab>
                        <Tab key="videos" title="Videos">
                            <div className={"flex flex-col flex-1 px-4 py-3 bg-content1 rounded-md gap-4"}>
                                <p className={"text-xl grid"}>Post Count</p>
                                <p className={"text-4xl"}>
                                    {
                                        isGetPostCountLoading ? (
                                            <Spinner color="secondary"/>
                                        ) : (
                                            postCount
                                        )
                                    }
                                </p>
                                <p className={"text-tiny text-default-500"}>+20% month over month</p>
                            </div>
                            <div className={"flex flex-col flex-1 p-4 py-3 bg-content1 rounded-md gap-4"}>
                                <p className={"text-xl"}>Column Count</p>
                                <p className={"text-4xl"}>
                                    {isGetColumnCountLoading ? (
                                        <Spinner color="secondary"/>
                                    ) : (
                                        columnCount
                                    )}
                                </p>
                                <p className={"text-tiny text-default-500"}>+33% month over month</p>
                            </div>
                            <div className={"flex flex-col flex-1 p-4 py-3 bg-content1 rounded-md gap-4"}>
                                <p className={"text-xl"}>User Count</p>
                                <p className={"text-4xl"}>
                                    {
                                        isGetUserCountLoading ? (
                                            <Spinner color="secondary"/>
                                        ) : (
                                            userCount
                                        )
                                    }
                                </p>
                                <p className={"text-tiny text-default-500"}>-8% month over month</p>
                            </div>
                        </Tab>
                    </Tabs>
                    <Input
                        isClearable
                        className="w-72 sm:max-w-[44%] absolute top-0 right-0"
                        placeholder="Search by name..."
                        startContent={<SearchIcon aria-hidden="true"
                                                  fill="none"
                                                  focusable="false"
                                                  height="1em"
                                                  role="presentation"
                                                  viewBox="0 0 24 24"
                                                  width="1em"/>}
                    />
                </div>
                <div className={"flex flex-row w-full gap-4 min-h-72"}>
                    <div className={"w-3/5  rounded-md bg-content1 pt-4 pl-4"}>
                        <p className={"font-bold text-2xl"}>Web Traffic Tracker</p>
                        <ReactECharts option={option}/>
                    </div>
                    <div className={"w-2/5 rounded-md bg-content1"}>
                        asd
                    </div>
                </div>
            </div>
        </>
    )
}
