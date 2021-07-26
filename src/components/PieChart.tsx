import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export interface IChart {
    name: string,
    count: number
}

const screenWidth = Dimensions.get("window").width;
const colorPalette = ["#A71D31", "#CECECE", "#A6A6A8", "#272635"]
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};

const Chart = ({ chartData }: { chartData: IChart[] }) => {
    const [pieData, setPietData] = useState([] as IChart[])

    useEffect(() => {
        const data = chartData.map((item, index) => {
            return {
                name: item.name,
                count: item.count,
                color: colorPalette[index],
                legendFontColor: "black",
                legendFontSize: 16
            }
        });
        setPietData(data)
    }, [])

    return (
        <PieChart
            data={pieData}
            width={screenWidth}
            height={120}
            chartConfig={chartConfig}
            accessor={"count"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 0]}
            absolute
        />
    )
}

export default Chart
